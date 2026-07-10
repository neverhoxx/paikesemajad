"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { FaArrowLeft } from "react-icons/fa";

// wall brick grid: 3 rows x 4 bricks
const ROWS = [
    { y: 272, delayBase: 0.6 },
    { y: 232, delayBase: 1.3 },
    { y: 194, delayBase: 2.0 },
];
const BRICK_W = 45.5;
const BRICK_H = 34;
const BRICK_GAP = 2;
const WALL_X = 105;

export default function Name() {
    const t = useTranslations("UnderConstruction");
    const locale = useLocale();

    return (
        <div className="min-h-screen bg-[#FBFAF7] flex items-center">
            <div className="w-full max-w-6xl mx-auto px-6 py-20 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">

                {/* Left: editorial text block */}
                <div className="max-w-md select-none">
                    <span className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.25em] text-blue-600">
                        {t("eyebrow")}
                    </span>

                    <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] text-[#0A0A0A]">
                        {t("title")}
                    </h1>

                    <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                        {t("text")}
                    </p>

                    <div className="mt-10 h-px w-16 bg-slate-200" />

                    <Link
                        href={`/${locale}`}
                        className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] hover:text-blue-600 transition-colors group"
                    >
                        <FaArrowLeft
                            size={12}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        {t("back")}
                    </Link>
                </div>

                {/* Right: the house builds itself, then collapses, on loop */}
                <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                    <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
                        {/* ground — always present, never animates */}
                        <line x1="40" y1="330" x2="360" y2="330" stroke="#E2E8F0" strokeWidth="1" />

                        {/* foundation */}
                        <rect
                            className="rise"
                            x="90" y="310" width="220" height="20"
                            fill="#0A0A0A"
                            style={{ animationDelay: "0s" }}
                        />

                        {/* wall bricks */}
                        {ROWS.map((row, rowIdx) =>
                            Array.from({ length: 4 }).map((_, i) => (
                                <rect
                                    key={`${rowIdx}-${i}`}
                                    className="rise"
                                    x={WALL_X + i * (BRICK_W + BRICK_GAP)}
                                    y={row.y}
                                    width={BRICK_W}
                                    height={BRICK_H}
                                    rx="1.5"
                                    fill="#FBFAF7"
                                    stroke="#0A0A0A"
                                    strokeWidth="1.5"
                                    style={{ animationDelay: `${row.delayBase + i * 0.1}s` }}
                                />
                            ))
                        )}

                        <path
                            className="settle"
                            d="M 85 190 L 200 110 L 315 190 Z"
                            fill="#FBFAF7"
                            stroke="#0A0A0A"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            style={{ animationDelay: "3s" }}
                        />


                        {/* solar panels — the payoff, sit exactly on the roof slope */}
                        <polygon
                            className="settle panel"
                            points="100,162.5 169,114.5 177,126 108,174"
                            fill="#C5FFFD"
                            stroke="#2563EB"
                            strokeWidth="1.2"
                            style={{ animationDelay: "4.6s" }}
                        />
                        <polygon
                            className="settle panel"
                            points="231,114.5 300,162.5 292,174 223,126"
                            fill="#C5FFFD"
                            stroke="#2563EB"
                            strokeWidth="1.2"
                            style={{ animationDelay: "4.7s" }}
                        />
                    </svg>
                </div>
            </div>

            <style>{`
                @media (prefers-reduced-motion: no-preference) {
                    .rise {
                        animation: rise-cycle 10s ease-in-out infinite;
                    }
                    .settle {
                        animation: settle-cycle 10s ease-in-out infinite;
                    }
                }

                @keyframes rise-cycle {
                    0%   { opacity: 0; transform: translateY(70px); }
                    8%   { opacity: 1; transform: translateY(0); }
                    70%  { opacity: 1; transform: translateY(0); }
                    84%  { opacity: 0; transform: translateY(46px) rotate(-5deg); }
                    100% { opacity: 0; transform: translateY(70px); }
                }

                @keyframes settle-cycle {
                    0%   { opacity: 0; transform: translateY(-46px); }
                    8%   { opacity: 1; transform: translateY(0); }
                    70%  { opacity: 1; transform: translateY(0); }
                    84%  { opacity: 0; transform: translateY(36px) rotate(4deg); }
                    100% { opacity: 0; transform: translateY(-46px); }
                }
            `}</style>
        </div>
    );
}