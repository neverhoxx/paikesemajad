import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
    const store = await cookies();
    const cookieLocale = store.get("locale")?.value;

    const locales = ["en", "et"] as const;

    const locale = locales.includes(cookieLocale as any) ? cookieLocale! : "et";

    return {
        locale,
        messages: (await import(`../content/${locale}.json`)).default
    };
});
