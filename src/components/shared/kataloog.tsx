import { Container } from "./container";

import { getProducts } from "@/data/projects";

import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';

import Link from "next/link";
import Image from "next/image";


export default function Kataloog() {
    const t = useTranslations("Projects");
    const products = getProducts(t);

    const nav_t = useTranslations("Navigations");

    const locale = useLocale();

    const availableLocales = ['et', 'en'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    return (
        <section className="py-[75px] bg-[#f8fafc]">
            <Container>
                <h2 className="text-3xl md:text-4xl text-blue-700 font-extrabold mb-8">
                    {t("katalogis")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl duration-300"
                        >
                            <div className="relative w-full h-60">
                                <Image
                                    src={project.main_image}
                                    alt={project.name}
                                    fill
                                    className="object-cover select-none"
                                />
                            </div>
                            <div className="p-6 flex justify-between flex-wrap gap-2">
                                <div className="">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-600 select-none">{project.charasteristic.area} • {project.charasteristic.rooms_amount} {t('rooms-amount')}
                                        {project?.charasteristic?.bathroom === "Included" && (
                                            <> • {t("bathroom-inc")}</>
                                        )}
                                    </p>
                                </div>
                                <div className="flex items-center select-none">
                                    <Link className="px-5 py-2 text-white bg-blue-700 rounded-2xl" href={`/${currentLocale}/${nav_t("projectss")}/${project.id}`}>
                                        {t("view")}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <Link className="opacity-70 select-none" href="">
                        Näita rohkem
                    </Link>
                </div>
            </Container>
        </section>
    );
}
