'use client';

import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/container";
import planImg from "@/images/main-hero-bg.png";

import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';

export default function PlanningBlock() {
    const nav_t = useTranslations("Navigations");

    const locale = useLocale();

    const availableLocales = ['et', 'en'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';
    return (
        <section className="bg-[#f2f7fb] py-16 md:py-24">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div>
                        <h2 className="text-4xl text-blue-700 font-extrabold mb-8">
                            Kuidas alustada oma kodu planeerimisega?
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Küsimusi on kindlasti palju, nii krundi asetuse, hoone ruumiplaneeringu,
                            ehituse eelarve kui ka töö etappide kohta.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Kutsume teid külla, et saaksime selles osas rohkem abiks olla!
                        </p>
                        <p className="text-lg text-gray-700 mb-10">
                            Kohtumise paremaks ettevalmistamiseks palume võimalusel vastata
                            registreerumisvormil ka mõnele täpsustavale küsimusele, mis avanevad
                            klikkides allolevale lingile.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href={`/${currentLocale}/${nav_t("contact")}`}
                                className="px-8 py-3 text-[#0014C7] font-bold border-2 border-[#0014C7] rounded-lg shadow-sm hover:bg-[#0014C7] hover:text-white transition duration-300"
                            >
                                ALUSTA OMA PROJEKTIGA
                            </Link>

                            <Link
                                href={`/${currentLocale}/${nav_t("projectss")}`}
                                className="text-[#0014C7] font-semibold underline underline-offset-4 hover:text-black transition"
                            >
                                Vali meie kataloogist
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src={planImg}
                            alt="Kodu plaan"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}