import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
    const store = await cookies();
    const cookieLocale = store.get("locale")?.value;

    const locales = ["en", "et"] as const;
    type Locale = (typeof locales)[number];

    const locale: Locale = locales.includes(cookieLocale as Locale) ? (cookieLocale as Locale) : "et";

    return {
        locale,
        messages: (await import(`../content/${locale}.json`)).default
    };
});
