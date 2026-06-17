import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  type?: "website" | "article" | "product";
}

const BASE_URL = "https://www.giasolari.cl";

const SEO = ({ title, description, path, image, noindex, type = "website" }: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  const rawImage = image || `${BASE_URL}/og-image.jpg`;
  const ogImage = rawImage.startsWith("http") ? rawImage : `${BASE_URL}${rawImage}`;

  return (
    <Helmet>
      <html lang="es-CL" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Gia Solari Joyas" />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* AI summary */}
      <meta name="summary" content="Gia Solari Joyas: joyería de autor en Santiago de Chile. Anillos de compromiso, argollas y joyas a medida en oro 18k y platino. Hecho a mano, con grabados simbólicos únicos. Showroom en Vitacura." />
    </Helmet>
  );
};

export default SEO;
