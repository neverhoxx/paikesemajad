import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solantrahome.com"),
  title: {
    default: "Solantra | Päikesekatused ja päikeseenergia lahendused",
    template: "%s | Solantra",
  },
  description:
    "Solantra pakub päikesekatuseid ja päikeseenergia lahendusi kodudele Eestis. Kvaliteetne paigaldus, pikaajaline garantii ja professionaalne teenindus.",
  keywords: [
    "päikesekatus",
    "päikesepaneelid",
    "päikeseenergia",
    "Solantra",
    "solar roof Estonia",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.solantrahome.com",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
