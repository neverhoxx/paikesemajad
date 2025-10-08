"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function AuthLayout({ children, title }: AuthLayoutProps) {
    const pathname = usePathname();
    const shouldShowDialog = pathname === "/en/contact" || pathname === "/et/kontakt";

    if (!shouldShowDialog) return null;

    return (
        <>
            {children}
        </>

    );
}
