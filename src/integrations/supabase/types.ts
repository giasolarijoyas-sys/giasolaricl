export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      base_prices: {
        Row: {
          category: string
          created_at: string
          id: string
          item: string
          notes: string | null
          price_clp: number
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          item: string
          notes?: string | null
          price_clp: number
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          item?: string
          notes?: string | null
          price_clp?: number
          updated_at?: string
        }
        Relationships: []
      }
      quotes: {
        Row: {
          como_nos_conociste: string | null
          confidence_score: number | null
          created_at: string
          email: string
          engaste: string | null
          estilo: string | null
          fecha_aniversario: string | null
          fecha_cumple_pareja: string | null
          fecha_limite: string | null
          forma: string | null
          grabado: string | null
          id: string
          image_urls: string[] | null
          metal: string
          nombre: string
          nombre_pareja: string | null
          notas_pareja: string | null
          piedra: string | null
          pieza: string
          presupuesto: string | null
          quilates: string | null
          quiz_answers: Json | null
          quoted_price: number | null
          recommendation: Json | null
          referencias: string | null
          status: string
          updated_at: string
          whatsapp: string
        }
        Insert: {
          como_nos_conociste?: string | null
          confidence_score?: number | null
          created_at?: string
          email: string
          engaste?: string | null
          estilo?: string | null
          fecha_aniversario?: string | null
          fecha_cumple_pareja?: string | null
          fecha_limite?: string | null
          forma?: string | null
          grabado?: string | null
          id?: string
          image_urls?: string[] | null
          metal: string
          nombre: string
          nombre_pareja?: string | null
          notas_pareja?: string | null
          piedra?: string | null
          pieza: string
          presupuesto?: string | null
          quilates?: string | null
          quiz_answers?: Json | null
          quoted_price?: number | null
          recommendation?: Json | null
          referencias?: string | null
          status?: string
          updated_at?: string
          whatsapp: string
        }
        Update: {
          como_nos_conociste?: string | null
          confidence_score?: number | null
          created_at?: string
          email?: string
          engaste?: string | null
          estilo?: string | null
          fecha_aniversario?: string | null
          fecha_cumple_pareja?: string | null
          fecha_limite?: string | null
          forma?: string | null
          grabado?: string | null
          id?: string
          image_urls?: string[] | null
          metal?: string
          nombre?: string
          nombre_pareja?: string | null
          notas_pareja?: string | null
          piedra?: string | null
          pieza?: string
          presupuesto?: string | null
          quilates?: string | null
          quiz_answers?: Json | null
          quoted_price?: number | null
          recommendation?: Json | null
          referencias?: string | null
          status?: string
          updated_at?: string
          whatsapp?: string
        }
        Relationships: []
      }
      wish_list: {
        Row: {
          created_at: string
          email: string
          fecha_aniversario: string | null
          fecha_cumple_pareja: string | null
          id: string
          image_urls: string[] | null
          metal_preferido: string | null
          nombre: string
          nombre_pareja: string
          notas: string | null
          otras_fechas: string | null
          piedra_preferida: string | null
          preferencias: string
          presupuesto_aproximado: string | null
          referencias: string | null
          tipo_joya: string | null
          whatsapp: string
        }
        Insert: {
          created_at?: string
          email: string
          fecha_aniversario?: string | null
          fecha_cumple_pareja?: string | null
          id?: string
          image_urls?: string[] | null
          metal_preferido?: string | null
          nombre: string
          nombre_pareja: string
          notas?: string | null
          otras_fechas?: string | null
          piedra_preferida?: string | null
          preferencias: string
          presupuesto_aproximado?: string | null
          referencias?: string | null
          tipo_joya?: string | null
          whatsapp: string
        }
        Update: {
          created_at?: string
          email?: string
          fecha_aniversario?: string | null
          fecha_cumple_pareja?: string | null
          id?: string
          image_urls?: string[] | null
          metal_preferido?: string | null
          nombre?: string
          nombre_pareja?: string
          notas?: string | null
          otras_fechas?: string | null
          piedra_preferida?: string | null
          preferencias?: string
          presupuesto_aproximado?: string | null
          referencias?: string | null
          tipo_joya?: string | null
          whatsapp?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
