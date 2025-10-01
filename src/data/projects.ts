import { useTranslations } from "next-intl";

import firstProductMain from "@/images/firstProject-main.jpg";
import firstProductSecond from "@/images/firstProject-second.jpg";
import firstProductThird from "@/images/firstProject-third.jpg";

interface BaseProduct {
    id: number;
    name: string;
    text: string;
    main_image: any;
    charasteristic: Characteristics;
}


interface Characteristics {
    area: string;
    dimensions: string;
    height: string;
    rooms_amount: string;
    loft: string;
    documentation: string;
    bathroom: string;
    electricity: string;
    structure: string;
    construction: string;
    warranty: string;
    plan: {
        name: string;
        url: string;
    };
}



interface ProductWithImage extends BaseProduct {
    image: any;
    images?: never;
}

interface ProductWithImages extends BaseProduct {
    images: any[];
    image?: never;
}

export type Product = ProductWithImage | ProductWithImages;


export function getProducts(): Product[] {
    const t = useTranslations("Projects");

    return [
        {
            id: 1,
            name: t("first-project.name"),
            text: t("first-project.text"),
            main_image: firstProductMain,

            charasteristic: {
                area: "35 m²",
                dimensions: "8.75 x 4.0 m",
                height: "3.95 m",
                rooms_amount: "2",
                loft: t("included"),
                documentation: t("included"),
                bathroom: t("included"),
                electricity: t("included"),
                structure: t("metal-frame"),
                construction: t("wooden-panels"),
                warranty: "5" + t("years"),
                plan: {
                    name: t("drawings"),
                    url: "https://voltamp.ee/docs/tigo_tap_paigaldus.pdf"
                }
            },

            images: [
                firstProductSecond,
                firstProductThird
            ]

        }
    ];
}
