import { Container } from "./container";
import Image from "next/image";

import HeroImage from "@/images/main-hero-bg.png";

export default function Kataloog() {
    return (
        <div className='py-[75px]'>
            <Container>
                <h2 className="text-4xl text-blue-700 font-extrabold mb-8">
                    Uuemad projektid kataloogis
                </h2>

                <div className="flex justify-between items-center flex-wrap gap-5">
                    <div className="w-[600px] bg-[#f5f5f5] rounded-2xl p-5 select-none">
                        <Image className="max-w-[560px] h-auto" src={HeroImage} alt={""}></Image>
                        <h3 className="text-2xl font-bold mb-3">TITLE</h3>

                        <p>NETOPIND 137.5 M2</p>
                    </div>

                    <div className="w-[600px] bg-[#f5f5f5] rounded-2xl p-5 select-none">
                        <Image className="max-w-[560px] h-auto" src={HeroImage} alt={""}></Image>
                        <h3 className="text-2xl font-bold mb-3">TITLE</h3>

                        <p>NETOPIND 137.5 M2</p>
                    </div>

                    <div className="w-[600px] bg-[#f5f5f5] rounded-2xl p-5 select-none">
                        <Image className="max-w-[560px] h-auto" src={HeroImage} alt={""}></Image>
                        <h3 className="text-2xl font-bold mb-3">TITLE</h3>

                        <p>NETOPIND 137.5 M2</p>
                    </div>

                    <div className="w-[600px] bg-[#f5f5f5] rounded-2xl p-5 select-none">
                        <Image className="max-w-[560px] h-auto" src={HeroImage} alt={""}></Image>
                        <h3 className="text-2xl font-bold mb-3">TITLE</h3>

                        <p>NETOPIND 137.5 M2</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}