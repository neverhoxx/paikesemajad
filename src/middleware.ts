import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "et", "fi"],
    defaultLocale: "et"
});

export const config = {
    matcher: ["/", "/(en|et|fi)/:path*"]
};