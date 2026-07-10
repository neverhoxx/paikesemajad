"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

export default function KontaktForm() {
    const router = useRouter();

    const handleClose = useCallback(() => {
        router.back();
    }, [router]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [handleClose]);

    return (
        <Sheet open onOpenChange={(open) => !open && handleClose()}>
            <SheetContent
                side="right"
                className="w-full sm:max-w-lg bg-white p-0 flex flex-col"
            >
                <SheetHeader className="px-6 pt-8 pb-4 border-b">
                    <SheetTitle className="text-2xl text-center text-blue-600">
                        Ota yhteyttä
                    </SheetTitle>

                    <SheetDescription className="text-center">
                        Ota yhteyttä, niin keskustelemme juuri sinun tarpeisiisi
                        sopivista ratkaisuista.
                    </SheetDescription>
                </SheetHeader>

                <form className="flex-1 flex flex-col">
                    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                        <Input
                            type="text"
                            placeholder="Nimi"
                        />

                        <Input
                            type="email"
                            placeholder="Sähköposti"
                        />

                        <Input
                            type="tel"
                            placeholder="Puhelinnumero"
                        />

                        <Textarea
                            placeholder="Viesti"
                            className="min-h-[160px] resize-none"
                        />
                    </div>

                    <SheetFooter className="border-t p-6">
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
                        >
                            Lähetä
                        </button>
                    </SheetFooter>
                </form>
            </SheetContent>
        </Sheet>
    );
}