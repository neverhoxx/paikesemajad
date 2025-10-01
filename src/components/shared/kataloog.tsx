import { Container } from "./container";

import { getProducts } from "@/data/projects";
import type { Product } from "@/data/projects";

import { useTranslations } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import { useLocale } from 'next-intl';
import HeroImage from "@/images/main-hero-bg.png";

export default function Kataloog() {
    const products: Product[] = getProducts();
    const t = useTranslations("Main-main");

    const nav_t = useTranslations("Navigations");

    const locale = useLocale();

    const availableLocales = ['et', 'en'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    return (
        <section className="py-[75px] bg-[#f8fafc]">
            <Container>
                <h2 className="text-4xl text-blue-700 font-extrabold mb-8">
                    Projektid kataloogis
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    {products.map((project) => (
                        <Link
                            href={`/${currentLocale}/${nav_t("projects")}/${project.id}`}
                            key={project.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl duration-300"
                        >
                            <div className="relative w-full h-60">
                                <Image
                                    src={project.main_image}
                                    alt={project.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600">NETOPIND: {project.charasteristic.area}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
