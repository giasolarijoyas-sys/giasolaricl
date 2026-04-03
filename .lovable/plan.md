# Plan: Quiz Guiado de Descubrimiento + Motor de Inferencia + Recomendación Personalizada

## Resumen

Transformar el cotizador actual de 8 pasos (selección directa de atributos) en un flujo de descubrimiento conversacional inspirado en CustomMade. El nuevo flujo permite que un comprador indeciso responda preguntas sobre su pareja y su relación, y el sistema infiera el anillo ideal. Se mantiene 100% el design system existente (colores, tipografías, componentes, layout).

---

## Research: Lo que se dedujo de CustomMade

**Flujo clave de CustomMade:**

1. Landing con mensaje tranquilizador ("Tired of searching? We'll make it for you")
2. Quiz de entrada: categoría de pieza, luego preguntas consultivas
3. Proceso de 4 pasos: Style Exploration → Sketches & Design → Details Perfected → Crafting
4. Pricing transparente: centro stone (factor principal) + accent stones + metal + complejidad
5. Trust signals: "Happiness guaranteed", "Human touch", "Not found in stores", "Ethically sourced"
6. Reviews con fotos reales + nombres + piezas

**Patrones clave para usuarios indecisos:**

- "You don't have to know what they want. Just what they like."
- Preguntas indirectas sobre personalidad antes de preguntas técnicas sobre piedras
- "No sé" siempre válido
- Resultado = recomendación explicada, no solo un formulario vacío

---

## Arquitectura del cambio

Se reemplaza `QuoteForm.tsx` (componente monolítico de 883 líneas) con un sistema modular:

```text
/src
  /components
    /quiz
      QuizContainer.tsx        ← Orquestador principal (stepper, estado, navegación)
      QuizProgress.tsx         ← Barra de progreso visual
      steps/
        WelcomeStep.tsx        ← "Cuéntanos sobre ella" — mensaje tranquilizador
        RelationshipStep.tsx   ← Contexto: relación, pistas, nivel de seguridad
        PersonalityStep.tsx    ← Estilo de vida, hobbies, trabajo, joyería habitual
        StyleExploreStep.tsx   ← Preferencias estéticas (clásico/moderno/vintage/etc)
        StonePreferenceStep.tsx ← Piedra central + forma + tamaño visual
        MetalStep.tsx          ← Metal preferido o inferido
        BudgetTimelineStep.tsx ← Presupuesto + fecha + prioridades
        InspirationStep.tsx    ← Fotos/Pinterest (reutiliza lógica actual)
      ResultView.tsx           ← Recomendación personalizada con alternativas
      LeadCaptureStep.tsx      ← Formulario final de contacto
    /quiz/engine
      scoringEngine.ts         ← Motor de inferencia / scoring
      taxonomies.ts            ← Catálogos de estilos, piedras, metales, formas
      priceEstimator.ts        ← Estimador de rango de precios
      types.ts                 ← Tipos compartidos
  /pages
    Index.tsx                  ← Se actualiza para usar QuizContainer en lugar de QuoteForm
```

---

## Detalle por fase

### 1. Taxonomías y modelo de datos (`taxonomies.ts`, `types.ts`)

Catálogos internos con scoring weights:

- **ringStyles**: solitaire, halo, three-stone, vintage, nature-inspired, modern, cathedral, pavé, bezel, toi-et-moi
- **centerStoneTypes**: diamante natural, diamante lab, moissanita, zafiro, esmeralda, rubí
- **stoneShapes**: round, oval, emerald, pear, cushion, marquise, princess, asscher, radiant
- **metals**: oro 18k amarillo, blanco, rosado, platino
- **sizePreference**: discreto, balanceado, impactante
- **aestheticKeywords**: delicado, elegante, llamativo, bohemio, minimalista, ornamentado

Tipo `QuizAnswers` con todos los campos + `certaintyScore` por respuesta.
Tipo `Recommendation` con: style, stone, shape, metal, accentStones, estimatedPriceRange, confidenceScore, explanation.

### 2. Quiz de 8 pasos (nuevos steps)


| Paso | Pregunta principal                                                                                            | Tipo             | Skippable |
| ---- | ------------------------------------------------------------------------------------------------------------- | ---------------- | --------- |
| 1    | Bienvenido: "No necesitas saber exactamente qué anillo quiere. Solo cuéntanos cómo es ella."                  | Intro + CTA      | No        |
| 2    | Relación: ¿Cuánto llevan juntos? ¿Ha dado pistas? ¿Nivel de seguridad?                                        | Cards + radio    | Sí        |
| 3    | Personalidad: ¿Qué le gusta hacer? ¿Deporte? ¿Trabajo? ¿Usa joyas? ¿Estilo de vestir?                         | Inputs + selects | Sí        |
| 4    | Exploración de estilo: ¿Clásico, moderno, vintage, natural, minimalista? + ¿Qué color de joyería usa?         | Cards visuales   | Sí        |
| 5    | Piedra: ¿Diamante, lab, moissanita, gema de color, no sé? + Forma (con descripciones) + Tamaño visual         | Cards + select   | Sí        |
| 6    | Metal: ¿Oro amarillo, blanco, rosado, platino, no sé? (si eligió argollas → solo amarillo)                    | Cards            | Sí        |
| 7    | Presupuesto y timeline: Rango CLP + fecha + prioridades (brillo, tamaño, durabilidad, precio, sostenibilidad) | Select + chips   | Sí        |
| 8    | Inspiración: Fotos + Pinterest (reutiliza lógica actual de upload)                                            | Upload + input   | Sí        |


Cada paso tiene opción "No lo sé" / "Saltar" prominente. Microcopy consultivo en cada pantalla.

### 3. Motor de inferencia (`scoringEngine.ts`)

Lógica basada en reglas con pesos:

```text
SI estiloVestir = "Clásico/elegante" → +score: solitaire, round, cathedral, platino
SI estiloVestir = "Bohemio/relajado" → +score: nature-inspired, oval, pear, oro rosado
SI usaJoyas = "Casi nunca" → +score: solitaire, bezel (bajo perfil), discreto
SI usaJoyas = "Sí, todos los días" → +score: durabilidad alta, platino, bezel
SI colorJoyería = "Dorado" → +score: oro amarillo
SI colorJoyería = "Plateado" → +score: platino, oro blanco
SI presupuesto < $1M → +score: moissanita, diamante lab, oro 18k
SI presupuesto > $4M → +score: diamante natural, platino
SI estilo = "Vintage" → +score: milgrain, halo, cushion, emerald-cut, filigree
SI deporte = activo → +score: bezel, bajo perfil, durabilidad
SI "no sé" en muchas respuestas → generar recomendación conservadora (solitaire oval, oro blanco, diamante lab)
```

Cada atributo del anillo recibe un score acumulado. El motor selecciona la combinación con mayor score total como recomendación principal, y las 2-3 siguientes como alternativas.

### 4. Vista de resultado (`ResultView.tsx`)

Muestra:

- Recomendación principal con descripción explicativa ("Basándonos en que ella tiene un estilo elegante y usa joyería dorada, te recomendamos...")
- 2-3 alternativas con diferencias explicadas
- Rango estimado de precio (desde `priceEstimator.ts`)
- Nivel de confianza del sistema (alto/medio/bajo según cuántas preguntas se respondieron)
- Resumen editable de preferencias detectadas
- CTA: "Solicitar cotización detallada"

### 5. Estimador de precios (`priceEstimator.ts`)

Reglas basadas en datos públicos del mercado chileno (NO de CustomMade):

```text
Base setting: $300.000 - $500.000 CLP
+ Diamante natural 0.5ct: $1.000.000 - $1.500.000
+ Diamante lab 0.5ct: $300.000 - $600.000
+ Moissanita 1ct: $150.000 - $300.000
+ Platino vs Oro: +10%
+ Halo / pavé: +$150.000 - $300.000
+ Complejidad alta: +$200.000 - $500.000
```

Todos los valores son constantes configurables. Se marcan como "estimación orientativa".  
  
Habilita estos datos (constantes) como tabla de base de datos que sea facil de actualizar de forma independiente 

### 6. Captura de lead (`LeadCaptureStep.tsx`)

Reutiliza la lógica actual del paso 8 (nombre, WhatsApp, email, presupuesto, fecha, cómo nos conociste). Agrega el campo "recomendación seleccionada" que se envía junto con la cotización.

Se sigue usando la edge function `process-quote` existente, agregando los campos de inferencia al payload.

### 7. DB migration

Agregar columnas a `quotes`:

- `quiz_answers` (jsonb) — respuestas completas del quiz
- `recommendation` (jsonb) — recomendación generada
- `confidence_score` (numeric) — confianza del sistema

### 8. Integración en Index.tsx

`QuoteForm` se reemplaza por `QuizContainer` en la misma posición del layout. El `id="cotizador"` se mantiene para los anchor links.

---

## Lo que NO cambia

- Hero, Navbar, Footer, Gallery, Historia, Testimonials, WhyUs, JewelryChat, WhatsAppButton
- Design system (colores, tipografías, spacing, border-radius)
- Componente `OptionCard` se reutiliza y extiende
- Edge function `process-quote` se extiende (no reemplaza)
- Storage bucket `quote-images`

## Hipótesis documentadas

- Los pesos del scoring engine son iniciales y necesitan calibración con datos reales
- Los rangos de precio son estimaciones del mercado chileno, no datos de CustomMade
- El flujo asume que el comprador típico es un novio comprando para su pareja (basado en testimonios actuales)
- La lógica de inferencia para "no sé" múltiple produce un default conservador (solitaire oval) que debe validarse con Macarena

## Archivos a crear/modificar


| Archivo                                             | Acción                                             |
| --------------------------------------------------- | -------------------------------------------------- |
| `src/components/quiz/types.ts`                      | Crear                                              |
| `src/components/quiz/taxonomies.ts`                 | Crear                                              |
| `src/components/quiz/engine/scoringEngine.ts`       | Crear                                              |
| `src/components/quiz/engine/priceEstimator.ts`      | Crear                                              |
| `src/components/quiz/QuizContainer.tsx`             | Crear                                              |
| `src/components/quiz/QuizProgress.tsx`              | Crear                                              |
| `src/components/quiz/steps/WelcomeStep.tsx`         | Crear                                              |
| `src/components/quiz/steps/RelationshipStep.tsx`    | Crear                                              |
| `src/components/quiz/steps/PersonalityStep.tsx`     | Crear                                              |
| `src/components/quiz/steps/StyleExploreStep.tsx`    | Crear                                              |
| `src/components/quiz/steps/StonePreferenceStep.tsx` | Crear                                              |
| `src/components/quiz/steps/MetalStep.tsx`           | Crear                                              |
| `src/components/quiz/steps/BudgetTimelineStep.tsx`  | Crear                                              |
| `src/components/quiz/steps/InspirationStep.tsx`     | Crear                                              |
| `src/components/quiz/ResultView.tsx`                | Crear                                              |
| `src/components/quiz/LeadCaptureStep.tsx`           | Crear                                              |
| `src/pages/Index.tsx`                               | Modificar — reemplazar QuoteForm por QuizContainer |
| `supabase/functions/process-quote/index.ts`         | Modificar — aceptar campos nuevos                  |
| DB migration                                        | Agregar columnas jsonb a quotes                    |
| `docs/QUIZ-ARCHITECTURE.md`                         | Crear — documentación interna                      |


## Orden de implementación

1. Tipos, taxonomías y motor de scoring
2. Estimador de precios
3. Componentes de steps (uno por uno)
4. QuizContainer + QuizProgress
5. ResultView
6. LeadCaptureStep
7. DB migration + actualizar edge function
8. Integrar en Index.tsx
9. Documentación interna