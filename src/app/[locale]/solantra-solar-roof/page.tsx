import type { Metadata } from "next";
import SolarRoofClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en") {
    return {};
  }

  const baseUrl = "https://www.solantrahome.com";
  const title = "Solantra Solar Roof — Solar Panels Built Into Your Roof";
  const description =
    "Solantra Solar Roof is an integrated solar roofing system for homes in Estonia. Weatherproof, high-yield panels with a 12-year product warranty — power generation that looks like a standard roof.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/en/solantra-solar-roof`,
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
      url: `${baseUrl}/en/solantra-solar-roof`,
      siteName: "Solantra",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const baseUrl = "https://www.solantrahome.com";
  const jsonLd =
    locale === "en"
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Solantra Solar Roof",
          description:
            "Integrated solar roofing system combining solar panels and roof covering in a single weatherproof unit.",
          brand: { "@type": "Brand", name: "Solantra" },
          warranty: {
            "@type": "WarrantyPromise",
            durationOfWarranty: { "@type": "QuantitativeValue", value: 12, unitCode: "ANN" },
          },
          url: `${baseUrl}/en/solantra-solar-roof`,
        }
      : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <SolarRoofClient />
    </>
  );
}