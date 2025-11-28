import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Distingo Resto Pub - Restaurant Bistro Montréal",
  description = "Restaurant bistro élégant au cSur de Montréal. Cuisine gastronomique, cocktails artisanaux et ambiance chaleureuse. Réservez votre table dès maintenant.",
  keywords = "restaurant montreal, bistro montreal, resto pub, gastronomie, cocktails, réservation restaurant, événements privés, cartes cadeaux",
  image = "/og-image.jpg",
  url = "https://distingo.com"
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Distingo Resto Pub' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });
  }, [title, description, keywords, image, url]);

  return null;
}
