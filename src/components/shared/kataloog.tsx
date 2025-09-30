import { Container } from "./container";
import Image from "next/image";

import HeroImage from "@/images/main-hero-bg.png";

export default function Kataloog() {
    return (
        <section className="py-[75px] bg-[#f8fafc]">
            <Container>
                <h2 className="text-4xl text-blue-700 font-extrabold mb-8">
                    Uuemad projektid kataloogis
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl duration-300"
                        >
                            <div className="relative w-full h-60">
                                <Image
                                    src={HeroImage}
                                    alt="Projekt"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    Projekt {item}
                                </h3>
                                <p className="text-gray-600">NETOPIND 137.5 m²</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
