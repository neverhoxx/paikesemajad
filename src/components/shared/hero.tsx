import { Container } from "@/components/shared/container";

import { FaArrowDown } from "react-icons/fa6";

import Link from "next/link";

import HeroImage from "@/images/hero-bg.jpg";

import { useTranslations } from "next-intl";
/* md:text-5xl text-3xl */


export default function HeroMain() {
    const t = useTranslations("Main-main");
    return (
        <div
            className='hero bg-center bg-cover bg-no-repeat'
            style={{
                backgroundImage: `
                    linear-gradient(90deg, rgba(48, 79, 254, 0.6) 0%, rgba(25, 25, 25, 0) 88%, rgba(16, 16, 16, 0) 100%),
                    linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
                    url(${HeroImage.src})`,
            }}

        >
            <Container className="hero flex flex-col justify-center pt-[90px]">
                <div className="max-w-[700px]">
                    <h1 className="md:text-5xl text-[30px] font-bold mb-6 text-white">
                        {t("Hero.title")}
                    </h1>
                    <p className="text-sm font-semibold max-w-[500px] md:opacity-80 mb-6 text-white">
                        {t("Hero.text")}
                    </p>

                    <Link href="" className="flex gap-2 items-center select-none font-extrabold text-white">
                        {t("Hero.uuri")} <FaArrowDown />
                    </Link>
                </div>

            </Container>
        </div>
    );
}