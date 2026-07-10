import type { Metadata } from "next";
import SolarRoofClient from "./client";

export function generateMetadata(): Metadata {
  const baseUrl = "https://www.solantrahome.com";
  const title = "Solantra Aurinkokatto — katto, joka tuottaa sähköä";
  const description =
    "Solantra-aurinkokatto on integroitu aurinkoenergian kattoratkaisu virolaisiin koteihin. Säänkestävät, korkean hyötysuhteen paneelit 12 vuoden tuotetakuulla — energiantuotanto, joka näyttää tavalliselta katolta.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/fi/solantra-aurinkokatto`,
      languages: {
        et: `${baseUrl}/et/solantra-paikesekatus`,
        en: `${baseUrl}/en/solantra-solar-roof`,
        fi: `${baseUrl}/fi/solantra-aurinkokatto`,
        "x-default": `${baseUrl}/et/solantra-paikesekatus`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/fi/solantra-aurinkokatto`,
      siteName: "Solantra",
      locale: "fi_FI",
      type: "website",
    },
  };
}

export default function Page() {
  const baseUrl = "https://www.solantrahome.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Solantra Aurinkokatto",
    description:
      "Integroitu aurinkoenergian kattoratkaisu, joka yhdistää aurinkopaneelit ja kattopinnoitteen yhdeksi säänkestäväksi kokonaisuudeksi.",
    brand: { "@type": "Brand", name: "Solantra" },
    warranty: {
      "@type": "WarrantyPromise",
      durationOfWarranty: { "@type": "QuantitativeValue", value: 12, unitCode: "ANN" },
    },
    url: `${baseUrl}/fi/solantra-aurinkokatto`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolarRoofClient />
    </>
  );
}