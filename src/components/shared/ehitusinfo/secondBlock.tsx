import { Container } from "../container";

import { FaSolarPanel } from "react-icons/fa6";
import { GiProcessor } from "react-icons/gi";
import { FaBatteryFull } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";

import Image from "next/image";

import testimg from "@/images/firstProject-main.jpg"

export default function EhitusinfoSecondBlock() {
    return (
        <div className='py-10'>
            <Container className="flex flex-wrap gap-2 justify-between">
                <div className="lg:w-1/2 w-full">
                    <h2 className="text-3xl lg:text-4xl text-blue-700 font-extrabold mb-10">
                        Sisseehitatud päikesepaneelid: projekteerimine, paigaldamine, optimeerimine
                    </h2>

                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center text-xl gap-5">
                            <FaSolarPanel className="text-4xl text-blue-600" />
                            <div className="opacity-90">
                                <h3 className="font-bold opacity-100">Katusele optimeeritud paneelide paigutus</h3>
                                Maksimaalne efektiivsus kohandatud katusekonstruktsiooniga
                            </div>

                        </li>

                        <li className="flex items-center text-xl gap-5">
                            <GiProcessor className="text-4xl text-blue-600" />
                            <div className="opacity-90">
                                <h3 className="font-bold opacity-100">Integreeritud inverter ja jälgimine</h3>
                                Jõudluse jälgimine ja optimeerimine reaalajas
                            </div>

                        </li>

                        <li className="flex items-center text-xl gap-5">
                            <FaBatteryFull className="text-4xl text-blue-600" />
                            <div className="opacity-90">
                                <h3 className="font-bold opacity-100">Valikuline aku salvestamine</h3>
                                Salvesta üleliigne energia öiseks kasutamiseks
                            </div>

                        </li>

                        <li className="flex items-center text-xl gap-5">
                            <BsGraphUp className="text-4xl text-blue-600" />
                            <div className="opacity-90">
                                <h3 className="font-bold opacity-100">Kiirem investeeringutasuvus energia omavarustatusega</h3>
                                Tüüpiline tasuvusaeg: 6-8 aastat
                            </div>

                        </li>
                    </ul>
                </div>
                <div className="lg:w-[40%] w-full flex items-center rounded-2xl">
                    <Image className="rounded-2xl" src={testimg} alt={""} />
                </div>
            </Container>
        </div>
    );
}