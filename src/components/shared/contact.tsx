'use client';

import { Container } from "../shared/container";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';

import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function PremiumContactForm() {
    const t = useTranslations("Contact");

    const nav_t = useTranslations("Navigations");

    const locale = useLocale();

    const availableLocales = ['et', 'en'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    const contactPath = currentLocale === "et" ? "kontakt" : "contact";
    return (
        <div className="shadow-2xl py-10">
            <Container className="flex">
                <div className="w-1/2">
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 drop-shadow-lg text-blue-600">
                        {t("title")}
                    </h2>
                    <p className="text-lg opacity-90 mb-10">
                        {t("text")}
                    </p>

                    <Link className="px-10 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-900 duration-300 select-none" href={`/${currentLocale}/${contactPath}`}>
                        {t("btn")}
                    </Link>
                </div>
                <div className="w-1/2">
                    <div className="bg-[#f3f2f2] shadow-2xl rounded-2xl p-10">
                        <p className="font-bold mb-5 text-2xl">
                            Contact information
                        </p>

                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-2 items-center text-[18px]">
                                <FaPhoneAlt className="text-blue-600" /> +372 123 4567
                            </li>
                            <li className="flex gap-2 items-center text-[18px]">
                                <MdEmail className="text-blue-600 text-[20px]" /> info@paikesemajad.ee
                            </li>
                            <li className="flex gap-2 items-center text-[18px]">
                                <FaClock className="text-blue-600" /> Mon-Fri: 9:00-17:00
                            </li>
                        </ul>
                    </div>
                </div>
            </Container >
        </div >
    );
}