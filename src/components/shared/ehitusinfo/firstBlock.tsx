import Link from "next/link";
import { Container } from "../container";

export default function EhitusinfoFirstBlock() {
    return (
        <div className='py-10'>
            <Container className="">
                <h2 className="text-3xl md:text-4xl text-blue-700 font-extrabold mb-10 md:text-center">
                    Kuidas eelvalmistatud tehnoloogia töötab?
                </h2>
                <div className="flex flex-wrap gap-5 justify-center">
                    <div className="flex flex-col justify-center items-center max-w-[350px]">
                        <div className="rounded-full bg-blue-600 w-[50px] h-[50px] text-2xl font-bold text-white flex justify-center items-center mb-2">
                            1
                        </div>
                        <h3 className="font-semibold text-2xl mb-2">
                            Disain ja inseneriteadus
                        </h3>
                        <p className="text-[16px] opacity-90 text-center">
                            Custom layouts engineered for transport and site assembly.
                        </p>

                        <Link className="text-blue-600 mt-5" href="">
                            Learn more →
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center max-w-[350px]">
                        <div className="rounded-full bg-blue-600 w-[50px] h-[50px] text-2xl font-bold text-white flex justify-center items-center mb-2">
                            2
                        </div>
                        <h3 className="font-semibold text-2xl mb-2">
                            Tehase ehitus
                        </h3>
                        <p className="text-[16px] opacity-90 text-center">
                            Kontrollitud keskkonnas tootmine: täpsus, kvaliteet, kiirus.
                        </p>

                        <Link className="text-blue-600 mt-5" href="">
                            Learn more →
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center max-w-[350px]">
                        <div className="rounded-full bg-blue-600 w-[50px] h-[50px] text-2xl font-bold text-white flex justify-center items-center mb-2">
                            3
                        </div>
                        <h3 className="font-semibold text-2xl mb-2">
                            Kohapealne kokkupanek
                        </h3>
                        <p className="text-[16px] opacity-90 text-center">
                            Kiire kohapealne kokkupanek ja professionaalne päikesesüsteemi aktiveerimine.
                        </p>

                        <Link className="text-blue-600 mt-5" href="">
                            Learn more →
                        </Link>
                    </div>
                </div>

            </Container>
        </div>
    );
}