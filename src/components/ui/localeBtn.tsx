"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Locale = "en" | "et" | "fi";
const locales: Locale[] = ["en", "et", "fi"];
const labels: Record<Locale, string> = { et: "EST", en: "EN", fi: "FI" };

function getLocaleFromPath(pathname: string): Locale {
    const seg = pathname.split("/")[1];
    return locales.includes(seg as Locale) ? (seg as Locale) : "et";
}

export default function LocaleSwitch() {
    const router = useRouter();
    const pathname = usePathname() || "/";
    const [currentLocale, setCurrentLocale] = useState<Locale>("et");

    useEffect(() => {
        setCurrentLocale(getLocaleFromPath(pathname));
    }, [pathname]);

    const cycleLocale = () => {
        const currentIndex = locales.indexOf(currentLocale);
        const nextLocale = locales[(currentIndex + 1) % locales.length];

        const segments = pathname.split("/").filter(Boolean);
        if (locales.includes(segments[0] as Locale)) {
            segments.shift();
        }

        const newPath = `/${nextLocale}${segments.length ? `/${segments.join("/")}` : ""}`;
        router.push(newPath);
        document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
    };

    return (
        <button
            onClick={cycleLocale}
            className="border-2 rounded-full px-3 py-1 text-white font-bold cursor-pointer"
        >
            {labels[currentLocale]}
        </button>
    );
}