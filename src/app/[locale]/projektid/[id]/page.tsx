"use client";

import { use } from "react"; // 👈 новый хук
import { Container } from '@/components/shared/container';
import Image from 'next/image';
import { getProducts } from '@/data/projects';
import type { Product } from '@/data/projects';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { MdOutlineSquareFoot } from "react-icons/md";

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

    if (!product) return <div>{t('productNotFound')}</div>;

    return (
        <>
            <div
                className="project-details-hero bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${product.main_image.src})` }}
            ></div>

            <Container>
                <div className="pt-10 flex">
                    <div className="w-1/2 select-none">
                        <Image
                            className="w-[688px] h-auto rounded-lg cursor-pointer"
                            src={product.main_image}
                            alt={product.name}
                            onClick={() => setIndex(0)}
                        />

                        <div className="flex gap-2 mt-4">
                            {product_images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="cursor-pointer w-[129px] h-[129px] bg-no-repeat bg-center bg-cover"
                                    onClick={() => setIndex(idx + 1)}


                                >
                                    <Image
                                        src={img}
                                        alt={`${product.name} thumbnail ${idx + 1}`}
                                        className='w-[129px] h-[129px] object-cover'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pl-10 w-1/2">
                        <h2 className="text-3xl font-bold">
                            {product.name}
                        </h2>

                        <p className="mt-5">
                            {product.text}
                        </p>

                        <div className="mt-5">
                            <ul className="flex flex-wrap max-w-[472px] justify-between ">
                                <li className="flex items-center w-1/2 mt-5">
                                    <div className="p-2 border flex justify-center items-center mr-3">
                                        <MdOutlineSquareFoot className="text-5xl text-blue-600" />
                                    </div>
                                    <div className="">
                                        <p className="text-[#414145] text-[14px]">
                                            {t("area")}
                                        </p>
                                        <p className="font-semibold">
                                            {product.charasteristic.area}
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-center w-1/2 mt-5">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-[65.6px] w-[65.6px]">
                                        Icon
                                    </div>
                                    <div className="">
                                        <p className="text-[#414145] text-[14px]">
                                            {t("dimensions")}
                                        </p>
                                        <p className="font-semibold">
                                            {product.charasteristic.dimensions}
                                        </p>
                                    </div>

                                </li>

                                <li className="flex items-center w-1/2 mt-5">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-[65.6px] w-[65.6px]">
                                        Icon
                                    </div>
                                    <div className="">
                                        <p className="text-[#414145] text-[14px]">
                                            {t("height")}
                                        </p>
                                        <p className="font-semibold">
                                            {product.charasteristic.height}
                                        </p>
                                    </div>

                                </li>

                                <li className="flex items-center w-1/2 mt-5">
                                    <div className="p-2 border flex justify-center items-center mr-3 h-[65.6px] w-[65.6px]">
                                        Icon
                                    </div>
                                    <div className="">
                                        <p className="text-[#414145] text-[14px]">
                                            {t("rooms")}
                                        </p>
                                        <p className="font-semibold">
                                            {product.charasteristic.rooms_amount} {t("rooms-amount")}
                                        </p>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10 h-100">
                    <h2 className="text-3xl font-bold">
                        Technical specification
                    </h2>

                    <p>
                        Standard specification for module
                    </p>
                </div>
            </Container>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={[
                    { src: product.main_image.src || product.main_image },
                    ...product_images.map(img => ({ src: img.src || img })),
                ]}
            />
        </>
    );
}
