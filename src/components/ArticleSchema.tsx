import { Helmet } from "react-helmet-async";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

const BASE_URL = "https://www.giasolari.cl";

const ArticleSchema = ({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaProps) => {
  const url = `${BASE_URL}${path}`;
  const img = image || `${BASE_URL}/og-image.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: img,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "Gia Solari Joyas",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Gia Solari Joyas",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/wordmark-oliva.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default ArticleSchema;
