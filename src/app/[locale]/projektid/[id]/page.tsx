"use client";

import { use } from "react";
import { Container } from '@/components/shared/container';
import Image from 'next/image';
import { getProducts } from '@/data/projects';
import type { Product } from '@/data/projects';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {
    MdOutlineSquareFoot, MdOutlineMeetingRoom, MdConstruction
} from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { FaHouse } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { TbSunElectricity } from "react-icons/tb";
import { SiInstructure } from "react-icons/si";
import { PiMedal } from "react-icons/pi";

import Link from "next/link";

import CharacteristicsBlock from "@/components/shared/projects/CharacteristicsBlock";

interface Props {
    params: Promise<{ id: string }>;
}

export default function ProductDetails({ params }: Props) {
    const { id } = use(params);
    const t = useTranslations('Projects');

    const products: Product[] = getProducts(t);
    const product = products.find((p) => String(p.id) === id);

    const product_images = product?.images || [];
    const [index, setIndex] = useState(-1);

    if (!product) return <div className="p-5">{t('productNotFound')}</div>;

    return (
        <>
            <div
                className="project-details-hero bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${product.main_image.src})` }}
            ></div>

            <Container>
                <div className="pt-10 flex flex-col md:flex-row gap-6">

                    <div className="w-full md:w-1/2 select-none">
                        <Image
                            className="w-full h-auto rounded-lg cursor-pointer"
                            src={product.main_image}
                            alt={product.name}
                            onClick={() => setIndex(0)}
                        />

                        <div className="flex gap-2 mt-4 flex-wrap md:justify-between">
                            {product_images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="cursor-pointer w-24 h-24 sm:w-32 sm:h-32"
                                    onClick={() => setIndex(idx + 1)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${product.name} thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl sm:text-3xl font-bold">{product.name}</h2>
                        <p className="mt-4 text-sm sm:text-base">{product.text}</p>

                        <div className="mt-6">
                            <h2 className="text-[18px] font-semibold">{t("solantra-roof-included")}</h2>

                            <div className="flex mt-2 gap-2 flex-wrap">
                                <div className="border border-gray-300 rounded-lg shadow-sm bg-white p-3">
                                    <h4 className="text-[14px] opacity-75">Est. kWh/yr (EE)</h4>
                                    <p className="text-[18px] font-semibold">8,900</p>
                                </div>

                                <div className="border border-gray-300 rounded-lg p-3
                             shadow-sm bg-white">
                                    <h4 className="text-[14px] opacity-75">Est. kWh/yr (DE)</h4>
                                    <p className="text-[18px] font-semibold">9,600</p>
                                </div>

                                <div className="border border-gray-300 rounded-lg 
                             shadow-sm bg-white p-3">
                                    <h4 className="text-[14px] opacity-75">Est. kWh/yr (ES)</h4>
                                    <p className="text-[18px] font-semibold">11,800</p>
                                </div>

                                <div className="border border-gray-300 rounded-lg 
                             shadow-sm bg-white p-3">
                                    <h4 className="text-[14px] opacity-75">Lead time</h4>
                                    <p className="text-[18px] font-semibold ">12 weeks</p>
                                </div>
                            </div>

                            <ul className="list-disc pl-5 mt-4 text-[14px]">
                                <li>{t("integrated")}</li>
                                <li>{t("fire")}</li>
                                <li>{t("wind")}</li>
                                <li>{t("battery")}</li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <ul className="flex-wrap flex justify-center items-center">

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <MdOutlineSquareFoot className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("area")}</p>
                                        <p className="font-semibold">{product.charasteristic.area}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <MdOutlineSquareFoot className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("living")}</p>
                                        <p className="font-semibold">{product.charasteristic.living}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <RxDimensions className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("dimensions")}</p>
                                        <p className="font-semibold">{product.charasteristic.dimensions}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <AiOutlineColumnHeight className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("height")}</p>
                                        <p className="font-semibold">{product.charasteristic.height}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <MdOutlineMeetingRoom className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("rooms")}</p>
                                        <p className="font-semibold">
                                            {product.charasteristic.rooms_amount} {t("rooms-amount")}
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <FaHouse className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("loft")}</p>
                                        <p className="font-semibold">{product.charasteristic.loft}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <IoDocument className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("documentation")}</p>
                                        <p className="font-semibold">{product.charasteristic.documentation}</p>
                                    </div>
                                </li>


                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <FaBath className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("bathroom")}</p>
                                        <p className="font-semibold">{product.charasteristic.bathroom}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <TbSunElectricity className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("electricity")}</p>
                                        <p className="font-semibold">{product.charasteristic.electricity}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <SiInstructure className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("structure")}</p>
                                        <p className="font-semibold">{product.charasteristic.structure}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <MdConstruction className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("construction")}</p>
                                        <p className="font-semibold">{product.charasteristic.construction}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <PiMedal className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("warranty")}</p>
                                        <p className="font-semibold">{product.charasteristic.warranty}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <IoDocument className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("plan")}</p>
                                        <p className="font-semibold">
                                            <Link className="text-blue-500 underline" href={product.charasteristic.plan.url}>
                                                {product.charasteristic.plan.name}
                                            </Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-10 border border-gray-300 rounded-lg p-6
                             shadow-sm bg-white">
                                <h2 className="font-semibold mb-2">
                                    Factory profile
                                </h2>

                                <h3>
                                    Powered by <Link className="underline font-semibold" href="https://en.via-s.lv/">via-s factory</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 mb-6 border-b border-gray-300 pb-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">{t("technical-specification")}</h2>
                    <p className="mt-2 text-sm sm:text-base">{t("standard-specification")}</p>
                </div>


                <CharacteristicsBlock
                    data={[
                        { title: "Facade", value: [product.techSpecs.facade] },
                        { title: "Interior options", value: product.techSpecs.interior_options },
                        { title: "Flooring options", value: product.techSpecs.flooring_options },
                        { title: "Insulation", value: product.techSpecs.insulation },
                        { title: "Electricity installation", value: [product.techSpecs.electricity_installation] },
                        { title: "Bathroom", value: [product.techSpecs.bathroom] },
                        { title: "Doors and windows", value: [product.techSpecs.doors_and_windows] },
                        { title: "Adjustability", value: [product.techSpecs.adjustability] },
                        { title: "Additional options", value: product.techSpecs.additional_options },
                    ]}
                />
            </Container>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={[
                    { src: product.main_image.src },
                    ...product_images.map((img) => ({
                        src: img.src
                    })),
                ]}
            />
        </>
    );
}
