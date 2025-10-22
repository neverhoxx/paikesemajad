import { Container } from "@/components/shared/container";

import { FaArrowDown } from "react-icons/fa6";

import Link from "next/link";

import HeroImage from "@/images/hero-bg.jpg";

export default function HeroProjects() {
    return (
        <div
            className='hero bg-center bg-cover bg-no-repeat'
            style={{
                backgroundImage: `
    linear-gradient(90deg, rgba(48, 79, 254, 0.6) 0%, rgba(25, 25, 25, 0) 88%, rgba(16, 16, 16, 0) 100%),
    linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
    url(${HeroImage.src})
  `,

            }}

        >
            <Container className="hero flex flex-col justify-center pt-[90px]">
                <div className="max-w-[500px]">
                    <h1 className="md:text-5xl text-3xl font-bold mb-6 text-white">
                        Meie projektide kataloog
                    </h1>
                    <p className="text-[16px] font-semibold md:opacity-80 mb-6 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, neque placeat corporis sit eos dicta est et nemo possimus saepe, voluptatem quaerat architecto cum aut nostrum necessitatibus officia. Quisquam, aperiam?
                    </p>

                    <Link href="" className="flex gap-2 items-center select-none font-extrabold text-white">
                        Vaata meie projekte <FaArrowDown />
                    </Link>
                </div>

            </Container>
        </div>
    );
}