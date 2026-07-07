"use client";

import { Container } from "./container";

import Image from "next/image";
import Link from "next/link";

import logo from "@/images/solantra-logo.png";
import Partners from "./partners";

import { useTranslations } from "next-intl";

import { FaFacebookF } from "react-icons/fa";


export default function Footer() {
    const nav_t = useTranslations("Navigations");
    const t = useTranslations("Header");
    const ft = useTranslations("footer");

    const NAV_LINKS = [
        { key: "katalog", path: nav_t("projectss"), label: t("headerNav.katalog") },
        { key: "referentsid", path: nav_t("referentsid"), label: t("headerNav.referentsid") },
        { key: "ehitusinfo", path: nav_t("ehitusinfo"), label: t("headerNav.ehitusinfo") },
        { key: "meist", path: nav_t("meist"), label: t("headerNav.meist") },
        { key: "kontakt", path: nav_t("contact"), label: t("headerNav.kontakt") },
    ];

    return (
        <footer className="bg-[#FAF8F4] text-[#1B1B18] border-t border-[#E7E2D8]">
            <Partners />
            <Container className="py-14 md:py-16">
                <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:gap-8 md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" className="inline-block">
                            <Image
                                src={logo}
                                alt="Solantra"
                                className="h-auto w-[140px]"
                            />
                        </Link>
                        <p className="mt-4 max-w-[240px] text-[14px] leading-relaxed text-[#8C8880]">
                            {ft("text")}
                        </p>
                    </div>

                    <nav aria-label="Jaluse navigatsioon">
                        <ul className="flex flex-col gap-3 text-[15px]">
                            {NAV_LINKS.map((link) => (
                                <li key={link.key}>
                                    <Link
                                        href={link.path}
                                        className="text-[#1B1B18]/80 transition-colors duration-300 hover:text-[#1B1B18]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className="text-[15px] font-semibold">Solantra OÜ</p>
                        <a
                            href="tel:+3725235932"
                            className="text-[15px] text-[#1B1B18]/80 transition-colors duration-300 hover:text-[#1B1B18]"
                        >
                            +372 523 5932
                        </a>
                        <a
                            href="mailto:info@solantra.com"
                            className="text-[15px] text-[#1B1B18]/80 transition-colors duration-300 hover:text-[#1B1B18]"
                        >
                            info@solantra.com
                        </a>
                        <p className="text-[15px] text-[#8C8880]">Viljandi, Eesti</p>
                    </div>

                    <Link
                        href=""
                        aria-label="Facebook"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7E2D8] text-[#1B1B18] transition-colors duration-300 hover:border-[#D98E3B] hover:text-[#D98E3B]"
                    >
                        <FaFacebookF size="15" />
                    </Link>
                </div>

                <div className="mt-12 flex flex-col items-center gap-2 border-t border-[#E7E2D8] pt-6 text-[13px] text-[#8C8880] md:flex-row md:justify-between">
                    <span>© {new Date().getFullYear()} Solantra. {ft("oigused")}.</span>
                    <div className="flex items-center gap-5">
                        <Link href="/privaatsuspoliitika" className="hover:text-[#1B1B18] transition-colors duration-300">
                            {ft("privacy")}
                        </Link>
                        <Link href="/kasutustingimused" className="hover:text-[#1B1B18] transition-colors duration-300">
                            {ft("terms")}
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}