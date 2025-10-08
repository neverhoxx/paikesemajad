"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import ContactLayout from "../layout";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function ContactForm() {
    const router = useRouter();


    const handleClose = useCallback(() => {
        router.back();
    }, [router]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [handleClose]);

    return (
        <ContactLayout>
            <Sheet open onOpenChange={handleClose}>
                <SheetContent
                    side="right"
                    className="w-full sm:w-[40%] h-full"
                >
                    <SheetHeader>
                        <SheetTitle className="text-center text-blue-600 text-2xl">
                            Get in touch
                        </SheetTitle>
                        <SheetDescription className="text-center">
                            Get in touch and we will discuss options tailored to your needs.
                        </SheetDescription>
                    </SheetHeader>
                    <form className="h-full flex flex-col justify-end" action="">
                        <div className="px-5">

                            <Input type="text" placeholder="Nimi" className="p-2 mb-3" />
                            <Input type="email" placeholder="E-post" className="p-2 mb-3" />
                            <Input type="tel" placeholder="Telefoni number" className="p-2 mb-3" />

                            <Textarea className="w-full border p-2" placeholder="Sõnum" />

                        </div>
                        <SheetFooter className="flex justify-between">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl cursor-pointer">
                                Send
                            </button>
                        </SheetFooter>
                    </form>
                </SheetContent>
            </Sheet>
        </ContactLayout>


    );
}
