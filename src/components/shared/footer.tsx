"use client";

import { Container } from "./container";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import logo from "@/images/solantra-logo.png";

import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-col text-black">
            <Container className="">
                <div className="hidden md:flex justify-between">
                    <Link
                        href="/"
                        className="max-w-[200px] flex-shrink-0"
                    >
                        <Image
                            src={logo}
                            alt={`Partner Logo`}
                            className="h-auto w-[160px]"
                        />
                    </Link>

                    <Link
                        href="/"
                        className="max-w-[200px] flex-shrink-0"
                    >
                        <Image
                            src={logo}
                            alt={`Partner Logo`}
                            className="h-auto w-[160px]"
                        />
                    </Link>

                    <Link
                        href="/"
                        className="max-w-[200px] flex-shrink-0"
                    >
                        <Image
                            src={logo}
                            alt={`Partner Logo`}
                            className="h-auto w-[160px]"
                        />
                    </Link>

                    <Link
                        href="/"
                        className="max-w-[200px] flex-shrink-0"
                    >
                        <Image
                            src={logo}
                            alt={`Partner Logo`}
                            className="h-auto w-[160px]"
                        />
                    </Link>

                </div>

                <div className="md:hidden">
                    <Swiper
                        slidesPerView={1}
                        loop
                        spaceBetween={20}
                    >
                        <SwiperSlide >
                            <Link href="/" className="flex justify-center">
                                <Image
                                    src={logo}
                                    alt={`Partner Logo`}
                                    className="h-auto w-[160px]"
                                />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Link href="/" className="flex justify-center">
                                <Image
                                    src={logo}
                                    alt={`Partner Logo`}
                                    className="h-auto w-[160px]"
                                />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Link href="/" className="flex justify-center">
                                <Image
                                    src={logo}
                                    alt={`Partner Logo`}
                                    className="h-auto w-[160px]"
                                />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Link href="/" className="flex justify-center">
                                <Image
                                    src={logo}
                                    alt={`Partner Logo`}
                                    className="h-auto w-[160px]"
                                />
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>

            <div className="">
                <Container className="text-black text-[18px] flex justify-between items-center border-b-2 pb-10 border-[#c7c7c7]">
                    <div className="">
                        <h1 className="font-bold">Solantra OÜ</h1>
                        <h3 className="mt-2 text-[16px] font-semibold">+372 1111 1111</h3>
                        <h3 className="text-[16px] font-semibold">info@solantra.com</h3>
                    </div>

                    <div className="">
                        <h1 className="font-bold">Aadress</h1>
                        <h3 className="mt-2 text-[16px] font-semibold">Viljandi, Eesti</h3>
                    </div>
                </Container>
                <div className="">
                    <Container className="flex justify-between items-center py-5">
                        <Link className="" href="">
                            <FaFacebookF size="20" className="text-black hover:text-blue-700 duration-500" />
                        </Link>

                        <div className="text-black font-bold">
                            © Solantra 2025
                        </div>
                    </Container>
                </div>
            </div>

        </footer>
    );
}
