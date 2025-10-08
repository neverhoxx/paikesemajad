'use client';

import { Container } from "../shared/container";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';

export default function PremiumContactForm() {
    const t = useTranslations("Contact");

    const nav_t = useTranslations("Navigations");

    const locale = useLocale();

    const availableLocales = ['et', 'en'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    const contactPath = currentLocale === "et" ? "kontakt" : "contact";
    return (
        <div className=" shadow-2xl">
            <Container className="">

                <div className="text-center items-start p-10  text-black">
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 drop-shadow-lg text-blue-600">
                        {t("title")}
                    </h2>
                    <p className="text-lg opacity-90 mb-10">
                        {t("text")}
                    </p>

                    <Link className="px-10 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-900 duration-300" href={`/${currentLocale}/${contactPath}`}>
                        {t("btn")}
                    </Link>
                </div>
            </Container>
        </div>
    );
}