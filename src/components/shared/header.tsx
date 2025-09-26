"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LocaleSwitch from "../ui/localeBtn";

import { Container } from "./container";

import et from "@/content/et.json";
import en from "@/content/en.json";

export default function Header() {
    const t = useTranslations("Header");
    const locales = ["en", "ee"];
    const pathname = usePathname() || "/";

    const pathWithoutLocale = pathname.replace(/^\/(en|et)/, "") || "/";

    const lang: "et" | "en" = pathname.startsWith("/en") ? "en" : "et";

    const headerNav = lang === "en" ? en.Header.headerNav : et.Header.headerNav;

    const setLocaleCookie = (lc: string) => {
        document.cookie = `locale=${lc}; path=/; max-age=31536000`;
    };

    return (
        <header className="h-[85px] fixed z-50 bg-transparent text-[#153243] select-none w-full font-semibold">
            <Container className="flex items-center justify-between">
                <h2 className="font-extrabold text-3xl ">Päieksemajad</h2>
                <nav className="flex gap-10">
                    <ul className="flex items-center gap-6">
                        {Object.entries(headerNav).map(([key, label]) => (
                            <li key={key}>
                                <Link href={`/${lang}${pathWithoutLocale}#${key}`}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <LocaleSwitch />
                </nav>
            </Container>
        </header>
    );
}
