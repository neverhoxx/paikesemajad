import HeroMain from "@/components/shared/hero";
import Steps from "@/components/ui/Steps";

import BeautifulResponsiveForm from "@/components/shared/contact";
import MainSecondBlock from "@/components/shared/secondBlock";

import Kataloog from "@/components/shared/kataloog";

import { getTranslations, getLocale } from "next-intl/server";

export default async function Home() {
    const locale = await getLocale();
    const t = await getTranslations("meta");

    const baseUrl = "https://www.solantrahome.com";

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                name: "Solantra",
                url: baseUrl,
                logo: `${baseUrl}/images/solantra-logo.png`,
                sameAs: [],
            },
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                url: baseUrl,
                name: "Solantra",
                description: t("description"),
                publisher: { "@id": `${baseUrl}/#organization` },
                inLanguage: locale,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HeroMain />
            <MainSecondBlock />
            <Kataloog />
            <Steps />
            <BeautifulResponsiveForm />
        </>
    );
}