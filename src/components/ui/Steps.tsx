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
                <h2 className="text-3xl font-extrabold text-[#fff] mb-3">
                    {t("choose")}
                </h2>
                <p className="md:text-[18px] text-[16px] font-semibold text-white max-w-[750px]">
                    {t("choose-text")}
                </p>

                <div className="flex flex-wrap gap-5 mt-5 select-none md:justify-normal justify-center">
                    <Link className="px-10 py-3 text-white border-3 border-[#C5FFFD] rounded-2xl hover:text-black hover:bg-[#C5FFFD] duration-500" href={`/${currentLocale}/${nav_t("projectss")}`}>
                        {tBtn("projects")}
                    </Link>

                    <Link className="px-10 py-3 border-3 text-white border-[#C5FFFD] rounded-2xl hover:text-black hover:bg-[#C5FFFD] duration-500" href={`/${currentLocale}/${nav_t("referentsid")}`}>
                        {tBtn("complete-works")}
                    </Link>
                </div>
            </Container>
        </div>
    );
}
