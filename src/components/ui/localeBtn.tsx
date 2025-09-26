"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocaleSwitch() {
    const router = useRouter();
    const pathname = usePathname() || "/";
    const [currentLocale, setCurrentLocale] = useState<"en" | "ee">("ee");

    useEffect(() => {
        if (pathname.startsWith("/en")) {
            setCurrentLocale("en");
        } else {
            setCurrentLocale("ee");
        }
    }, [pathname]);

    const toggleLocale = () => {
        const nextLocale = currentLocale === "ee" ? "en" : "ee";

        const pathWithoutLocale = pathname.replace(/^\/(en|ee)/, "") || "/";

        document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
        router.push(`/${nextLocale}${pathWithoutLocale}`);
    };

    return (
        <button
            onClick={toggleLocale}
            className="border rounded-full px-3 py-1 text-blue-600 font-bold cursor-pointer"
        >
            {currentLocale === "ee" ? "EN" : "EST"}
        </button>
    );
}
