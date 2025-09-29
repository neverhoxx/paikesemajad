"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocaleSwitch() {
    const router = useRouter();
    const pathname = usePathname() || "/";
    const [currentLocale, setCurrentLocale] = useState<"en" | "et">("et");

    useEffect(() => {
        if (pathname.startsWith("/en")) {
            setCurrentLocale("en");
        } else {
            setCurrentLocale("et");
        }
    }, [pathname]);

    const toggleLocale = () => {
        const nextLocale = currentLocale === "et" ? "en" : "et";

        const segments = pathname.split("/").filter(Boolean);

        if (segments[0] === "en" || segments[0] === "et") {
            segments.shift();
        }

        const newPath = `/${nextLocale}/${segments.join("/")}`;

        router.push(newPath === `/${nextLocale}/` ? `/${nextLocale}` : newPath);

        document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
    };


    return (
        <button
            onClick={toggleLocale}
            className="border-2 rounded-full px-3 py-1 text-white font-bold cursor-pointer"
        >
            {currentLocale === "et" ? "EN" : "EST"}
        </button>
    );
}
