import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "et"],
    defaultLocale: "et"
});

export const config = {
    matcher: ["/", "/(en|et)/:path*"]
};
