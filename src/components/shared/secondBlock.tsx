'use client';

import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/container";
import planImg from "@/images/main-pic-3.jpeg";

import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';

export default function PlanningBlock() {
    const nav_t = useTranslations("Navigations");

    const locale = useLocale();

    const availableLocales = ['et', 'en'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';
    return (
        <section className="bg-[#f2f7fb] py-25">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
                    <div>
                        <h2 className="text-[30px] text-blue-700 font-extrabold mb-8">
                            Kuidas alustada oma kodu planeerimisega?
                        </h2>
                        <p className="text-sm text-gray-700 mb-4">
                            Küsimusi on kindlasti palju, nii krundi asetuse, hoone ruumiplaneeringu,
                            ehituse eelarve kui ka töö etappide kohta.
                        </p>
                        <p className="text-sm text-gray-700 mb-4">
                            Kutsume teid külla, et saaksime selles osas rohkem abiks olla!
                        </p>
                        <p className="text-sm text-gray-700 mb-10">
                            Kohtumise paremaks ettevalmistamiseks palume võimalusel vastata
                            registreerumisvormil ka mõnele täpsustavale küsimusele, mis avanevad
                            klikkides allolevale lingile.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
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