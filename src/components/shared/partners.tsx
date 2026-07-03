"use client";

import { Container } from "./container";

import Image from "next/image";
import Link from "next/link";

import voltampLogo from "@/images/partners/voltamplogo.webp";
import kodukuubisLogo from "@/images/partners/kodu_kuubis_logo_3.png"

const PARTNERS = [
    { name: "Voltamp", logo: voltampLogo, href: "https://www.voltamp.ee" },
    { name: "Kodukuubis", logo: kodukuubisLogo, href: "https://kodukuubis.com" },
    { name: "Partner 3", logo: voltampLogo, href: "/" },
    { name: "Partner 4", logo: voltampLogo, href: "/" },
    { name: "Partner 5", logo: voltampLogo, href: "/" },
];

export default function Partners() {
    return (
        <section className="bg-[#FAF8F4] border-t border-[#E7E2D8]">
            <Container className="py-14 md:py-16">
                <p className="text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8C8880] md:text-left">
                    Meie partnerid
                </p>

                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 items-center justify-items-center sm:grid-cols-3 md:grid-cols-5 md:gap-x-10">
                    {PARTNERS.map((partner) => (
                        <Link
                            key={partner.name}
                            href={partner.href}
                            aria-label={partner.name}
                            className="group flex items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                className="h-auto w-[110px] md:w-[130px]"
                            />
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}