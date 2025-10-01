import firstProductMain from "@/images/firstProject-main.jpg";
import firstProductSecond from "@/images/firstProject-second.jpg";
import firstProductThird from "@/images/firstProject-third.jpg";
import firstProductFourth from "@/images/firstProject-fourth.jpg";
import firstProduct5 from "@/images/firstProject-5.jpg";
import firstProduct6 from "@/images/firstProject-6.jpg";
import firstProduct7 from "@/images/firstProject-7.jpg";
import firstProduct8 from "@/images/firstProject-8.jpg";
import firstProduct9 from "@/images/firstProject-9.jpg";
import firstProduct10 from "@/images/firstProject-10.jpg";
import firstProduct11 from "@/images/firstProject-11.jpg";
import firstProduct12 from "@/images/firstProject-12.jpg";
import firstProduct13 from "@/images/firstProject-13.jpg";

import secondProduct1 from "@/images/secondProduct-1.png";
import secondProduct2 from "@/images/secondProduct-2.png";
import secondProduct3 from "@/images/secondProduct-3.png";
import secondProduct4 from "@/images/secondProduct-4.png";
import secondProduct5 from "@/images/secondProduct-5.png";
import secondProduct6 from "@/images/secondProduct-6.png";
import secondProduct7 from "@/images/secondProduct-7.png";

import thirdProduct1 from "@/images/thirdProject-1.jpg";
import thirdProduct2 from "@/images/thirdProject-2.jpg";
import thirdProduct3 from "@/images/thirdProject-3.jpg";
import thirdProduct4 from "@/images/thirdProject-4.jpg";
import thirdProduct5 from "@/images/thirdProject-5.jpg";
import thirdProduct6 from "@/images/thirdProject-6.jpg";
import thirdProduct7 from "@/images/thirdProject-7.jpg";

import fourhProduct1 from "@/images/fourhProject-1.jpg";
import fourhProduct2 from "@/images/fourhProject-2.jpg";
import fourhProduct3 from "@/images/fourhProject-3.jpg";
import fourhProduct4 from "@/images/fourhProject-4.jpg";
import fourhProduct5 from "@/images/fourhProject-5.jpg";
import fourhProduct6 from "@/images/fourhProject-6.jpg";
import fourhProduct7 from "@/images/fourhProject-7.jpg";
import fourhProduct8 from "@/images/fourhProject-8.jpg";
import fourhProduct9 from "@/images/fourhProject-9.jpg";
import fourhProduct10 from "@/images/fourhProject-10.jpg";
import fourhProduct11 from "@/images/fourhProject-11.jpg";



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
    living: string;
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


export function getProducts(t: (key: string) => string): Product[] {

    return [
        {
            id: 1,
            name: t("first-project.name"),
            text: t("first-project.text"),
            main_image: firstProductMain,

            charasteristic: {
                area: "35 m²",
                dimensions: "8.75 x 4.0 m",
                living: "-",
                height: "3.95 m",
                rooms_amount: "2",
                loft: t("included"),
                documentation: t("included"),
                bathroom: t("included"),
                electricity: t("included"),
                structure: t("metal-frame"),
                construction: t("wooden-panels"),
                warranty: "5 " + t("years"),
                plan: {
                    name: t("drawings"),
                    url: "https://voltamp.ee/docs/tigo_tap_paigaldus.pdf"
                }
            },

            images: [
                firstProductSecond,
                firstProductThird,
                firstProductFourth,
                firstProduct5,
                firstProduct6,
                firstProduct7,
                firstProduct8,
                firstProduct9,
                firstProduct10,
                firstProduct11,
                firstProduct12,
                firstProduct13,
            ]

        },

        {
            id: 2,
            name: t("second-project.name"),
            text: t("second-project.text"),
            main_image: secondProduct1,

            charasteristic: {
                area: "72 m²",
                living: "59 m²",
                dimensions: "12.15 x 10.14 m",
                height: "3.95 m",
                rooms_amount: "3",
                loft: t("included"),
                documentation: t("included"),
                bathroom: t("included"),
                electricity: t("included"),
                structure: t("metal-frame"),
                construction: t("wooden-panels"),
                warranty: "5 " + t("years"),
                plan: {
                    name: t("drawings"),
                    url: "https://voltamp.ee/docs/tigo_tap_paigaldus.pdf"
                }
            },

            images: [
                secondProduct1,
                secondProduct2,
                secondProduct3,
                secondProduct4,
                secondProduct5,
                secondProduct6,
                secondProduct7,
            ]

        },

        {
            id: 3,
            name: t("third-project.name"),
            text: t("third-project.text"),
            main_image: thirdProduct1,

            charasteristic: {
                area: "120 m²",
                living: "99 m²",
                dimensions: "15.89 x 8.50 m",
                height: "3.95 m",
                rooms_amount: "4",
                loft: "-",
                documentation: t("included"),
                bathroom: t("included"),
                electricity: t("included"),
                structure: t("metal-frame"),
                construction: t("wooden-panels"),
                warranty: "5 " + t("years"),
                plan: {
                    name: t("drawings"),
                    url: "https://voltamp.ee/docs/tigo_tap_paigaldus.pdf"
                }
            },

            images: [
                thirdProduct1,
                thirdProduct2,
                thirdProduct3,
                thirdProduct4,
                thirdProduct5,
                thirdProduct6,
                thirdProduct7,
            ]

        },

        {
            id: 4,
            name: t("fourth-project.name"),
            text: t("fourth-project.text"),
            main_image: fourhProduct1,

            charasteristic: {
                area: "76 m²",
                living: "61 m²",
                dimensions: "7.45 x 10.27 m",
                height: "3.95 m",
                rooms_amount: "4",
                loft: "-",
                documentation: t("included"),
                bathroom: t("included"),
                electricity: t("included"),
                structure: t("metal-frame"),
                construction: t("wooden-panels"),
                warranty: "5 " + t("years"),
                plan: {
                    name: t("drawings"),
                    url: "https://voltamp.ee/docs/tigo_tap_paigaldus.pdf"
                }
            },

            images: [
                fourhProduct1,
                fourhProduct2,
                fourhProduct3,
                fourhProduct4,
                fourhProduct5,
                fourhProduct6,
                fourhProduct7,
                fourhProduct8,
                fourhProduct9,
                fourhProduct10,
                fourhProduct11
            ]

        }
    ];
}
