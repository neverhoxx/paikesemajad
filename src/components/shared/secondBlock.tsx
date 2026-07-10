'use client';

import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/container";
import planImg from "@/images/main-pic-3.jpeg";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function PlanningBlock() {
    const t = useTranslations("Planning");
    const nav_t = useTranslations("Navigations");

    const locale = useLocale();

    return (
        <section className="bg-[#f2f7fb] py-25">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-[30px] text-blue-700 font-extrabold mb-8">
                            {t("title")}
                        </h2>

                        <p className="text-sm text-gray-700 mb-4">
                            {t("text1")}
                        </p>

                        <p className="text-sm text-gray-700 mb-4">
                            {t("text2")}
                        </p>

                        <p className="text-sm text-gray-700 mb-10">
                            {t("text3")}
                        </p>

                        <Link
                            href={`/${locale}/${nav_t("projectss")}`}
                            className="text-[#0014C7] font-semibold underline underline-offset-4 hover:text-black transition"
                        >
                            {t("button")}
                        </Link>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src={planImg}
                            alt={t("imageAlt")}
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}