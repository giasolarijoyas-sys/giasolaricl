import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-3xl text-foreground">Artículo no encontrado</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block">Volver al blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = blogPosts.filter((p) => post.relatedSlugs?.includes(p.slug));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image || "https://www.giasolari.cl/og-image.jpg",
    author: { "@type": "Person", name: "Macarena González Solari" },
    publisher: {
      "@type": "Organization",
      name: "Gia Solari Joyas",
      logo: { "@type": "ImageObject", url: "https://www.giasolari.cl/logo.png" },
    },
    datePublished: post.date,
    dateModified: post.date,
  };
      <div className="min-h-screen">
        <Navbar />
        <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
           <div className="container mx-auto px-4 md:px-8 max-w-[700px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Helmet>
                <title>{post.title} | Gia Solari Blog</title>
                <meta name="description" content={post.excerpt} />
                <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
              </Helmet>
              <Breadcrumbs items={[{ label: "Blog", path: "/blog" }, { label: post.title }]} />
              
              <span className="text-primary text-xs tracking-widest uppercase">{post.category}</span>
              <h1 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-4">{post.title}</h1>
              <div className="flex items-center gap-3 text-muted-foreground text-sm mb-10">
                <span>Por {post.author}</span>
                <span>·</span>
                <span>{new Date(post.date).toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
              <div className="text-muted-foreground leading-relaxed">
                {renderContent(post.content)}
              </div>
            </motion.div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
              <h3 className="font-display text-xl text-foreground mb-3">¿Necesitas asesoría personalizada?</h3>
              <a href="https://calendly.com/giasolarijoyas" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors">
                Agenda tu cita
              </a>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="font-display text-xl text-foreground mb-6">Artículos relacionados</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/blog/${r.slug}`} className="group block">
                      
                      <span className="text-primary text-xs tracking-widest uppercase">{r.category}</span>
                      <h4 className="font-display text-foreground mt-1 group-hover:text-primary transition-colors">{r.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPost;
