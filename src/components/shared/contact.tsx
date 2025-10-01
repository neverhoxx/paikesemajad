'use client';

import { useState } from "react";
import { Container } from "../shared/container";

export default function PremiumContactForm() {
    const [formData, setFormData] = useState({
        nimi: "",
        perenimi: "",
        telefon: "",
        email: "",
        krunt: "",
        lisainfo: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form data:", formData);
    };

    return (
        <div className="bg-gradient-to-b from-[#304FFE] to-[#0d47a1] bg-white/95 shadow-2xl">
            <Container className="grid grid-cols-1 lg:grid-cols-2  overflow-hidden">

                <div className="flex flex-col justify-center items-start p-10  text-white">
                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 drop-shadow-lg">
                        Kirjuta meile otse
                    </h2>
                    <p className="text-lg leading-relaxed max-w-md opacity-90">
                        Võta ühendust ja arutame võimalusi täpselt Sinu vajaduste järgi.
                    </p>
                </div>
                <div className="flex items-center justify-center py-5 bg-white rounded-2xl">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-lg space-y-6 "
                    >
                        <div className="flex justify-between">
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-1">
                                    Nimi *
                                </label>
                                <input
                                    type="text"
                                    name="nimi"
                                    placeholder="Sisestage eesnimi"
                                    value={formData.nimi}
                                    onChange={handleChange}
                                    required
                                    className="w-full max-w-[300px] px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#304FFE] shadow-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-1">
                                    Perenimi *
                                </label>
                                <input
                                    type="text"
                                    name="perenimi"
                                    placeholder="Sisestage perekonnanimi"
                                    value={formData.perenimi}
                                    onChange={handleChange}
                                    required
                                    className="w-full max-w-[300px] px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#304FFE] shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between gap-1">
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-1">
                                    Telefon
                                </label>
                                <input
                                    type="tel"
                                    name="telefon"
                                    placeholder="Täpsustavateks küsimusteks"
                                    value={formData.telefon}
                                    onChange={handleChange}
                                    pattern="^((\+372|\+371|\+370|\+358|\+46|\+47)\d{6,12})$"
                                    className="w-full max-w-[300px] px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#304FFE] shadow-sm"
                                />

                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-1">
                                    E-mail *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Pakkumise saatmiseks"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full max-w-[300px] px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#304FFE] shadow-sm"
                                />
                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-1">
                                Krundi asukoht
                            </label>
                            <input
                                type="text"
                                name="krunt"
                                placeholder="Transpordi ja objektitööde jaoks krundi asukoht"
                                value={formData.krunt}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#304FFE] shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-1">
                                Lisainfo
                            </label>
                            <textarea
                                name="lisainfo"
                                placeholder="Soovi korral saatke meile lisainfo"
                                value={formData.lisainfo}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#304FFE] shadow-sm"
                            />
                        </div>

                        <p className="text-xs text-gray-500">
                            Palun kontrollige, kas kõik tärniga (*) tähistatud väljad on täidetud.
                        </p>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#304FFE] via-[#0d47a1] to-[#000000] hover:opacity-90 shadow-lg transition-all duration-300"
                        >
                            Saada sõnum
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    );
}