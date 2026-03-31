export default function SchemaMarkup({ data }: { data: any }) {
  const schemaStr = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": data.brandName,
    "image": "https://olympiagym.pk/hero-bg.png",
    "@id": "https://olympiagym.pk",
    "url": "https://olympiagym.pk",
    "telephone": data.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.location.street,
      "addressLocality": data.location.city,
      "addressCountry": data.location.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.location.lat,
      "longitude": data.location.lng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "06:00",
      "closes": "23:59"
    },
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaStr) }}
    />
  );
}
