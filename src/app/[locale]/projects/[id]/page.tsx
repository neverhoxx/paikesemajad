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

import { MdOutlineSquareFoot, MdOutlineMeetingRoom, MdConstruction } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { FaHouse } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { TbSunElectricity } from "react-icons/tb";
import { SiInstructure } from "react-icons/si";
import { PiMedal } from "react-icons/pi";

import Link from "next/link";

interface Props {
    params: Promise<{ id: string }>;
}

export default function ProductDetails({ params }: Props) {
    const { id } = use(params);

    const t = useTranslations('Projects');
    const products: Product[] = getProducts(t);
    const product = products.find(p => String(p.id) === id);
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
                                        className='w-full h-full object-cover rounded'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 ">
                        <h2 className="text-2xl sm:text-3xl font-bold">{product.name}</h2>
                        <p className="mt-4 text-sm sm:text-base">{product.text}</p>

                        <div className="mt-6 ">
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

                                <li className="flex items-center w-full sm:w-1/2  mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <RxDimensions className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("dimensions")}</p>
                                        <p className="font-semibold">{product.charasteristic.dimensions}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2  mt-2">
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
                                        <p className="font-semibold">{product.charasteristic.rooms_amount} {t("rooms-amount")}</p>
                                    </div>
                                </li>

                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16"><FaHouse className="text-4xl text-blue-600" /></div>
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
                                            <Link className="text-blue-500" href="">{product.charasteristic.plan.name}</Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl sm:text-3xl font-bold">Technical specification</h2>
                    <p className="mt-2 text-sm sm:text-base">Standard specification for module</p>
                </div>
            </Container>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={[
                    { src: typeof product.main_image === "string" ? product.main_image : product.main_image.src },
                    ...product_images.map(img => ({ src: typeof img === "string" ? img : img.src })),
                ]}
            />
        </>
    );
}
