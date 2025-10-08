import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/components/shared/header";

import Footer from "@/components/shared/footer";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

type Props = { children: React.ReactNode; contact: React.ReactNode; params: Promise<{ locale: string }> };

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
