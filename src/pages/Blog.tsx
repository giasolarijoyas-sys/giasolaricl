import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const Blog = () => (
  <>
    <SEO
      title="Blog | Gia Solari Joyas"
      description="Historias de diseño, tendencias en joyería y consejos para elegir tu anillo de compromiso o joya a medida."
      path="/blog"
    />
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Blog</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">Aprende sobre joyas</h1>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div key={post.slug} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <span className="text-primary text-xs tracking-widest uppercase">{post.category}</span>
                  <h2 className="font-display text-lg text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                  <p className="text-muted-foreground/60 text-xs mt-2">{new Date(post.date).toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" })}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default Blog;
