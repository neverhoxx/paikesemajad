"use client";

import { usePathname } from "next/navigation";

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const showDialog = [
        "/et/kontakt",
        "/en/contact",
        "/fi/yhteystiedot",
    ].includes(pathname);

    if (!showDialog) return null;

    return children;
}