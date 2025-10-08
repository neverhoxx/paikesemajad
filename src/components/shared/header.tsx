"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import LocaleSwitch from "../ui/localeBtn";


import { Container } from "./container";
import Image from "next/image";

import et from "@/content/et.json";
import en from "@/content/en.json";

import logo from "@/images/solantra-logo.png";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const t = useTranslations("Header");
    const nav_t = useTranslations("Navigations");
    const pathname = usePathname() || "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const pathWithoutLocale = pathname.replace(/^\/(en|et)/, "") || "/";
    const lang: "et" | "en" = pathname.startsWith("/en") ? "en" : "et";
    const headerNav = lang === "en" ? en.Header.headerNav : et.Header.headerNav;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const router = useRouter();
    const [currentLocale, setCurrentLocale] = useState<"en" | "et">("et");

    useEffect(() => {
        if (pathname.startsWith("/en")) {
            setCurrentLocale("en");
        } else {
            setCurrentLocale("et");
        }
    }, [pathname]);

    const toggleLocale = () => {
        const nextLocale = currentLocale === "et" ? "en" : "et";

        const segments = pathname.split("/").filter(Boolean);

        if (segments[0] === "en" || segments[0] === "et") {
            segments.shift();
        }

        const newPath = `/${nextLocale}/${segments.join("/")}`;

        router.push(newPath === `/${nextLocale}/` ? `/${nextLocale}` : newPath);

        document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
    };

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-colors duration-300 text-[#fff] ${isScrolled ? "bg-[#000000da] shadow-md " : "bg-[#00000038]"
                }`}
        >
            <Container className="flex items-center justify-between h-[85px]">
                <Link href="/" className="max-w-[200px] flex-shrink-0">
                    <Image src={logo} alt="Solantra" className="h-auto w-[160px]" />
                </Link>

                <nav className="hidden md:flex gap-10">
                    <ul className="flex items-center gap-6">

                        <li>
                            <Link
                                href={`/${currentLocale}/${nav_t("projectss")}`}
                                className="hover:opacity-75"
                            >
                                {t("headerNav.katalog")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${currentLocale}/${nav_t("referentsid")}`}
                                className="hover:opacity-75"
                            >
                                {t("headerNav.referentsid")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${currentLocale}/${nav_t("ehitusinfo")}`}
                                className="hover:opacity-75"
                            >
                                {t("headerNav.ehitusinfo")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${currentLocale}/${nav_t("meist")}`}
                                className="hover:opacity-75"
                            >
                                {t("headerNav.meist")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${currentLocale}/${nav_t("contact")}`}
                                className="hover:opacity-75"
                            >
                                {t("headerNav.kontakt")}
                            </Link>
                        </li>
                    </ul>
                    <LocaleSwitch />
                </nav>

                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </Container>

            {menuOpen && (
                <div className="md:hidden absolute top-[85px] left-0 w-full bg-white shadow-lg">
                    <nav className="flex flex-col items-center gap-6 py-6 text-gray-900 font-medium">
                        {Object.entries(headerNav).map(([key, label]) => (
                            <Link
                                key={key}
                                href={`/${lang}${pathWithoutLocale}#${key}`}
                                className="hover:text-blue-600 transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <button
                            onClick={toggleLocale}
                            className={`border-2 rounded-full px-3 py-1 transition-colors duration-300 font-bold cursor-pointer ${isScrolled ? "!border-black !text-black" : "border-white text-white"}`}
                        >
                            {currentLocale === "et" ? "EN" : "EST"}
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
