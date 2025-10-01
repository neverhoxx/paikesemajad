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

import { MdOutlineSquareFoot } from "react-icons/md";
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
            {/* Hero */}
            <div
                className="project-details-hero bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${product.main_image.src})` }}
            ></div>

            <Container>
                <div className="pt-10 flex flex-col md:flex-row gap-6">
                    {/* Images */}
                    <div className="w-full md:w-1/2 select-none">
                        <Image
                            className="w-full h-auto rounded-lg cursor-pointer"
                            src={product.main_image}
                            alt={product.name}
                            onClick={() => setIndex(0)}
                        />

                        <div className="flex gap-2 mt-4 flex-wrap">
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

                    {/* Details */}
                    <div className="w-full md:w-1/2 ">
                        <h2 className="text-2xl sm:text-3xl font-bold">{product.name}</h2>
                        <p className="mt-4 text-sm sm:text-base">{product.text}</p>

                        {/* Characteristics */}
                        <div className="mt-6">
                            <ul className="flex flex-wrap">
                                {/* Area */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <MdOutlineSquareFoot className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("area")}</p>
                                        <p className="font-semibold">{product.charasteristic.area}</p>
                                    </div>
                                </li>

                                {/* Living */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">
                                        <MdOutlineSquareFoot className="text-4xl text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("living")}</p>
                                        <p className="font-semibold">{product.charasteristic.living}</p>
                                    </div>
                                </li>

                                {/* Dimensions */}
                                <li className="flex items-center w-full sm:w-1/2  mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("dimensions")}</p>
                                        <p className="font-semibold">{product.charasteristic.dimensions}</p>
                                    </div>
                                </li>

                                {/* Height */}
                                <li className="flex items-center w-full sm:w-1/2  mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("height")}</p>
                                        <p className="font-semibold">{product.charasteristic.height}</p>
                                    </div>
                                </li>

                                {/* Rooms */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("rooms")}</p>
                                        <p className="font-semibold">{product.charasteristic.rooms_amount} {t("rooms-amount")}</p>
                                    </div>
                                </li>

                                {/* Loft */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("loft")}</p>
                                        <p className="font-semibold">{product.charasteristic.loft}</p>
                                    </div>
                                </li>

                                {/* Documentation */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("documentation")}</p>
                                        <p className="font-semibold">{product.charasteristic.documentation}</p>
                                    </div>
                                </li>

                                {/* Bathroom */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("bathroom")}</p>
                                        <p className="font-semibold">{product.charasteristic.bathroom}</p>
                                    </div>
                                </li>

                                {/* Electricity */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("electricity")}</p>
                                        <p className="font-semibold">{product.charasteristic.electricity}</p>
                                    </div>
                                </li>

                                {/* Structure */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("structure")}</p>
                                        <p className="font-semibold">{product.charasteristic.structure}</p>
                                    </div>
                                </li>

                                {/* Construction */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("construction")}</p>
                                        <p className="font-semibold">{product.charasteristic.construction}</p>
                                    </div>
                                </li>

                                {/* Warranty */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
                                    <div>
                                        <p className="text-[#414145] text-sm">{t("warranty")}</p>
                                        <p className="font-semibold">{product.charasteristic.warranty}</p>
                                    </div>
                                </li>

                                {/* Plan */}
                                <li className="flex items-center w-full sm:w-1/2 mt-2">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-16 w-16">Icon</div>
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

                {/* Technical Specification */}
                <div className="mt-10">
                    <h2 className="text-2xl sm:text-3xl font-bold">Technical specification</h2>
                    <p className="mt-2 text-sm sm:text-base">Standard specification for module</p>
                </div>
            </Container>

            {/* Lightbox */}
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
