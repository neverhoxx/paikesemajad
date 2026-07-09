import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

type Props = { children: React.ReactNode; contact: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });

    const baseUrl = "https://www.solantrahome.com";

    console.log("Generating metadata for locale:", locale, t("description"));

    return {
        metadataBase: new URL(baseUrl),
        title: {
            default: t("title"),
            template: `%s | Solantra`,
        },
        description: t("description"),
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                et: `${baseUrl}/et`,
                en: `${baseUrl}/en`,
                "x-default": `${baseUrl}/et`,
            },
        },
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        },
    };
}

export default async function LocaleLayout({ children, contact, params }: Props) {
    const { locale } = await params;

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}>
                <NextIntlClientProvider locale={locale}>
                    {contact}
                    <Header />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}