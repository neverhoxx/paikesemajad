'use client';

import { Container } from "../shared/container";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';

import { FaPhoneAlt, FaClock, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function PremiumContactForm() {
    const t = useTranslations("Contact");

    const locale = useLocale();

    const availableLocales = ['et', 'en'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    const contactPath = currentLocale === "et" ? "kontakt" : "contact";

    const infoItems = [
        { icon: FaPhoneAlt, label: "+372 523 5932", href: "tel:+3725235932" },
        { icon: MdEmail, label: "mait@voltamp.ee", href: "mailto:mait@voltamp.ee" },
        { icon: FaClock, label: "Mon-Fri: 9:00-17:00", href: undefined },
    ];

    return (
        <div className="relative overflow-hidden bg-white py-20 md:py-28">
            <div className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

            <Container className="relative flex flex-col gap-14 md:flex-row md:items-center md:gap-10">
                <div className="md:w-1/2">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                        {t("info")}
                    </span>

                    <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-[#111827] lg:text-4xl">
                        {t("title")}
                    </h2>

                    <p className="mt-5 max-w-md text-[14px] leading-relaxed text-[#4B5563]">
                        {t("text")}
                    </p>

                    <Link
                        href={`/${currentLocale}/${contactPath}`}
                        className="group mt-9 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/30 select-none"
                    >
                        {t("btn")}
                        <FaArrowRight
                            size="13"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <div className="md:w-1/2">
                    <div className="rounded-3xl border border-[#EEF0F3] bg-[#F7F8FA] p-8 shadow-xl shadow-black/[0.03] md:p-10">
                        <p className="mb-7 text-xl font-bold text-[#111827]">
                            {t("info")}
                        </p>

                        <ul className="flex flex-col gap-5">
                            {infoItems.map(({ icon: Icon, label, href }) => {
                                const content = (
                                    <>
                                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                            <Icon size="16" />
                                        </span>
                                        <span className="text-[16px] font-medium text-[#1F2937]">
                                            {label}
                                        </span>
                                    </>
                                );

                                return (
                                    <li key={label}>
                                        {href ? (
                                            <a href={href} className="group flex items-center gap-4">
                                                {content}
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4">
                                                {content}
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
}