"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import LocaleSwitch from "../ui/localeBtn";
import { Container } from "./container";
import Image from "next/image";

import logo from "@/images/solantra-logo.png";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type Locale = "en" | "et" | "fi";
const locales: Locale[] = ["en", "et", "fi"];

function getLocaleFromPath(pathname: string): Locale {
    const seg = pathname.split("/")[1];
    return locales.includes(seg as Locale) ? (seg as Locale) : "et";
}

const solarRoofSlug: Record<Locale, string> = {
    et: "solantra-paikesekatus",
    en: "solantra-solar-roof",
    fi: "solantra-aurinkokatto",
};

export default function Header() {
    const t = useTranslations("Header");
    const nav_t = useTranslations("Navigations");
    const pathname = usePathname() || "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [currentLocale, setCurrentLocale] = useState<Locale>(getLocaleFromPath(pathname));
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setCurrentLocale(getLocaleFromPath(pathname));
    }, [pathname]);

    const cycleLocale = () => {
        const currentIndex = locales.indexOf(currentLocale);
        const nextLocale = locales[(currentIndex + 1) % locales.length];

        const segments = pathname.split("/").filter(Boolean);
        if (locales.includes(segments[0] as Locale)) {
            segments.shift();
        }

        const newPath = `/${nextLocale}${segments.length ? `/${segments.join("/")}` : ""}`;
        router.push(newPath);
        document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
    };

    const localeLabels: Record<Locale, string> = { et: "EST", en: "EN", fi: "FI" };

    const navLinks = [
        { key: "solantra", path: solarRoofSlug[currentLocale], label: t("headerNav.solantra") },
        { key: "katalog", path: nav_t("projectss"), label: t("headerNav.katalog") },
        { key: "referentsid", path: nav_t("referentsid"), label: t("headerNav.referentsid") },
        { key: "ehitusinfo", path: nav_t("ehitusinfo"), label: t("headerNav.ehitusinfo") },
        { key: "meist", path: nav_t("meist"), label: t("headerNav.meist") },
        { key: "kontakt", path: nav_t("contact"), label: t("headerNav.kontakt") },
    ];

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-colors duration-300 text-[#fff] ${isScrolled ? "bg-[#000000da] shadow-md" : "bg-[#00000038]"
                }`}
        >
            <Container className="flex items-center justify-between h-[85px]">
                <Link href="/" className="max-w-[200px] flex-shrink-0">
                    <Image src={logo} alt="Solantra" className="h-auto w-[160px]" />
                </Link>

                <nav className="hidden md:flex gap-10">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.key}>
                                <Link
                                    href={`/${currentLocale}/${link.path}`}
                                    className="hover:opacity-75"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
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
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                href={`/${currentLocale}/${link.path}`}
                                className="hover:text-blue-600 transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <button
                            onClick={() => {
                                cycleLocale();
                                setMenuOpen(false);
                            }}
                            className="border-2 border-black rounded-full px-3 py-1 transition-colors duration-300 font-bold cursor-pointer text-black"
                        >
                            {localeLabels[currentLocale]}
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}