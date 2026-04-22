export interface BlogPost {
  slug: string;
  title: string;
  category: "Guías" | "Tendencias" | "Historias de clientes" | "Cuidado";
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image?: string;
  relatedSlugs?: string[];
}

// Las 3 entradas anteriores fueron migradas a /aprende/* y se redirigen 1:1
// desde App.tsx. El blog queda como estructura preparada para nuevas notas
// cuando existan. Por ahora intencionalmente vacío.
export const blogPosts: BlogPost[] = [];
