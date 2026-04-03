# Quiz de Descubrimiento — Arquitectura Interna

## Qué se dedujo del research

Inspiración funcional tomada de flujos públicos de joyería custom (CustomMade, Brilliant Earth, etc.):

- **Patrón clave**: preguntas indirectas sobre personalidad y estilo de vida ANTES de preguntas técnicas sobre piedras/metales
- **"No sé" siempre válido**: el sistema genera recomendaciones útiles incluso con respuestas mínimas
- **Resultado explicado**: no solo "te recomendamos X", sino "porque nos dijiste que ella es elegante y usa joyería dorada, creemos que..."
- **Confianza transparente**: el sistema muestra cuán seguro está de su recomendación

## Qué se implementó

### Flujo de 10 pasos
0. **Welcome** — mensaje tranquilizador, CTA principal
1. **Relación** — contexto, pistas, nivel de seguridad
2. **Personalidad** — hobbies, deporte, trabajo, uso de joyas, estilo de vestir
3. **Estilo** — keywords estéticas (multi-select) + color de joyería habitual
4. **Piedra** — tipo + forma + tamaño visual
5. **Metal** — con opción "no sé"
6. **Presupuesto** — rango CLP + fecha + prioridades (chips, max 3)
7. **Inspiración** — fotos + Pinterest URLs
8. **Resultado** — recomendación principal + 2 alternativas + precio estimado + confianza
9. **Lead capture** — datos de contacto + envío a edge function

### Motor de inferencia (`scoringEngine.ts`)
- Sistema de pesos acumulativos por categoría
- Cada respuesta suma puntos a múltiples atributos del anillo
- Default conservador si pocas respuestas: solitaire oval, diamante lab, oro blanco
- Genera 3 combinaciones rankeadas

### Estimador de precios (`priceEstimator.ts`)
- Constantes configurables en CLP
- Base setting + piedra + multiplicador metal + complejidad estilo + multiplicador tamaño
- Todos los valores marcados como "estimación orientativa"

## Hipótesis (requieren validación con Macarena)

1. **Pesos del scoring**: los pesos iniciales son educated guesses. Necesitan calibración con datos reales de ventas.
2. **Rangos de precio**: estimaciones del mercado chileno, no datos exactos. Deben ajustarse.
3. **Default "no sé"**: solitaire oval en oro blanco con diamante lab. ¿Es lo que Macarena recomendaría por defecto?
4. **Comprador típico**: asumimos novio comprando para pareja (basado en testimonios del sitio).

## Cómo ajustar reglas y preguntas

### Agregar un nuevo estilo de anillo
1. Agregar entrada en `taxonomies.ts` → `RING_STYLES`
2. Agregar reglas de scoring en `scoringEngine.ts` → en las secciones relevantes
3. Agregar precio base en `priceEstimator.ts` → `PRICE_CONSTANTS.styleAddon`

### Cambiar pesos de inferencia
Editar `scoringEngine.ts`, función `computeScores()`. Cada `add(s.category, [keys], weight)` suma `weight` puntos a esos keys.

### Cambiar precios
Editar `PRICE_CONSTANTS` en `priceEstimator.ts`. También se pueden actualizar desde la tabla `base_prices` en la base de datos.

### Agregar una pregunta nueva
1. Agregar campo en `QuizAnswers` (`types.ts`)
2. Agregar al `INITIAL_ANSWERS`
3. Crear UI en el step correspondiente
4. Agregar reglas de scoring en `scoringEngine.ts`

## Archivos creados

```
src/components/quiz/
├── types.ts                    — Tipos compartidos
├── taxonomies.ts               — Catálogos de estilos, piedras, metales
├── engine/
│   ├── scoringEngine.ts        — Motor de inferencia
│   └── priceEstimator.ts       — Estimador de precios
├── QuizContainer.tsx           — Orquestador principal
├── QuizProgress.tsx            — Barra de progreso
├── ResultView.tsx              — Vista de recomendación
├── LeadCaptureStep.tsx         — Formulario de contacto
└── steps/
    ├── WelcomeStep.tsx
    ├── RelationshipStep.tsx
    ├── PersonalityStep.tsx
    ├── StyleExploreStep.tsx
    ├── StonePreferenceStep.tsx
    ├── MetalStep.tsx
    ├── BudgetTimelineStep.tsx
    └── InspirationStep.tsx
```

## DB changes
- `quotes.quiz_answers` (jsonb) — respuestas completas
- `quotes.recommendation` (jsonb) — recomendación generada
- `quotes.confidence_score` (numeric) — confianza 0–100
