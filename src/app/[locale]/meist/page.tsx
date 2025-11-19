import EhitusinfoMain from "@/components/shared/ehitusinfo/hero";
import EhitusinfoFirstBlock from "@/components/shared/ehitusinfo/firstBlock";
import EhitusinfoSecondBlock from "@/components/shared/ehitusinfo/secondBlock";
import Kataloog from "@/components/shared/kataloog";

export default function MeistPage() {
    return (
        <div className="pt-[185px]">
            <h1 className="md:text-4xl text-3xl font-bold mb-20 text-black text-center">
                Tutvuge Solantra Solarhome'i meeskonnaga
            </h1>
            <div className="flex flex-wrap justify-center mb:gap-25 gap-10">
                <div className="flex flex-col items-center">
                    <div className="md:w-[300px] w-[220px] md:h-[300px] h-[220px] rounded-full bg-black mb-4">

                    </div>

                    <h3 className="font-semibold">
                        Nimi Perekonnanimi
                    </h3>

                    <p>
                        Founder
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="md:w-[300px] w-[220px] md:h-[300px] h-[220px] rounded-full bg-black mb-4">

                    </div>

                    <h3 className="font-semibold">
                        Nimi Perekonnanimi
                    </h3>

                    <p>
                        Founder
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="md:w-[300px] w-[220px] md:h-[300px] h-[220px] rounded-full bg-black mb-4">

                    </div>

                    <h3 className="font-semibold">
                        Nimi Perekonnanimi
                    </h3>

                    <p>
                        Founder
                    </p>
                </div>

            </div>
        </div>
    );
}