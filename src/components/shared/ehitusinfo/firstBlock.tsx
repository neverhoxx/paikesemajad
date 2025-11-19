import Link from "next/link";
import { Container } from "../container";

import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';

export default function EhitusinfoFirstBlock() {
    const t = useTranslations("Ehitusinfo");

    return (
        <div className='py-10'>
            <Container className="">
                <h2 className="text-3xl md:text-4xl text-blue-700 font-extrabold mb-10 md:text-center">
                    {t("second-title")}
                </h2>
                <div className="flex flex-wrap gap-5 justify-center">
                    <div className="flex flex-col justify-center items-center max-w-[350px]">
                        <div className="rounded-full bg-blue-600 w-[50px] h-[50px] text-2xl font-bold text-white flex justify-center items-center mb-2">
                            1
                        </div>
                        <h3 className="font-semibold text-2xl mb-2">
                            {t("first-step-title")}
                        </h3>
                        <p className="text-[16px] opacity-90 text-center">
                            {t("first-step-text")}
                        </p>

                        <Link className="text-blue-600 mt-5" href="">
                            {t("uuri")} →
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center max-w-[350px]">
                        <div className="rounded-full bg-blue-600 w-[50px] h-[50px] text-2xl font-bold text-white flex justify-center items-center mb-2">
                            2
                        </div>
                        <h3 className="font-semibold text-2xl mb-2">
                            {t("second-step-title")}
                        </h3>
                        <p className="text-[16px] opacity-90 text-center">
                            {t("second-step-text")}
                        </p>

                        <Link className="text-blue-600 mt-5" href="">
                            {t("uuri")} →
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center max-w-[350px]">
                        <div className="rounded-full bg-blue-600 w-[50px] h-[50px] text-2xl font-bold text-white flex justify-center items-center mb-2">
                            3
                        </div>
                        <h3 className="font-semibold text-2xl mb-2">
                            {t("third-step-title")}
                        </h3>
                        <p className="text-[16px] opacity-90 text-center">
                            {t("third-step-text")}
                        </p>

                        <Link className="text-blue-600 mt-5" href="">
                            {t("uuri")} →
                        </Link>
                    </div>
                </div>

            </Container>
        </div>
    );
}