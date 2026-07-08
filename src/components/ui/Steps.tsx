'use client';
import { Container } from "../shared/container";

import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';

import bgImg from "@/images/main-first-block-bg.jpg";

import Link from "next/link";

export default function MainFirstBlock() {
    const t = useTranslations("Main-main");
    const nav_t = useTranslations("Navigations");
    const tBtn = useTranslations("Main-main.Buttons");

    const locale = useLocale();

    const availableLocales = ['et', 'en'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';



    return (
        <div
            className='main-first-block py-[50px] bg-no-repeat bg-center bg-cover'
            style={{
                backgroundImage: `linear-gradient(to top, rgba(48, 79, 254, 1), rgba(0, 0, 0, 0.7)), url(${bgImg.src})`
            }}
        >
            <Container>
                <h2 className="text-[30px] font-extrabold text-[#fff] mb-3">
                    {t("choose")}
                </h2>
                <p className="text-[14px] font-semibold text-white max-w-[750px]">
                    {t("choose-text")}
                </p>

                <div className="mt-7 flex flex-wrap gap-3 select-none">
                    <Link className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100" href={`/${currentLocale}/${nav_t("projectss")}`}>
                        {tBtn("projects")}
                    </Link>

                    <Link className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/70" href={`/${currentLocale}/${nav_t("referentsid")}`}>
                        {tBtn("complete-works")}
                    </Link>
                </div>
            </Container>
        </div>
    );
}
