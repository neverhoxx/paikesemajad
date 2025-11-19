"use client";

import { usePathname } from "next/navigation";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const pathname = usePathname();
    const shouldShowDialog = pathname === "/en/contact" || pathname === "/et/kontakt";

    if (!shouldShowDialog) return null;

    return (
        <>
            {children}
        </>

    );
}
