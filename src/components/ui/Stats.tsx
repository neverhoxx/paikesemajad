"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface CounterProps {
    target: number;
    duration?: number;
}

const Counter: React.FC<CounterProps> = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const startTimestamp = useRef<number | null>(null);

    useEffect(() => {
        const step = (timestamp: number) => {
            if (!startTimestamp.current) startTimestamp.current = timestamp;
            const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration]);

    return <span className="text-3xl font-extrabold text-[#374B4A]">{count}</span>;
};

export default function Stats() {
    const t = useTranslations("Stats");

    return (
        <div className="min-h-25 py-5 w-full flex gap-5 justify-center items-center select-none flex-wrap">
            <div className="text-center">
                <Counter target={20} duration={1500} />
                <p className="text-sm font-semibold">{t("years")}</p>
            </div>
            <div className="text-center">
                <Counter target={2150} duration={2500} />
                <p className="text-sm font-semibold">{t("complete")}</p>
            </div>
            <div className="text-center">
                <Counter target={65} duration={1800} />
                <p className="text-sm font-semibold">{t("workers")}</p>
            </div>
        </div>
    );
}
