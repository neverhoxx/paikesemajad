import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";

const locales = ["en", "et", "fi"] as const;
const defaultLocale = "et";

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(locales, requested) ? requested : defaultLocale;

    const messages = (await import(`../content/${locale}.json`)).default;

    return {
        locale,
        messages,
    };
});