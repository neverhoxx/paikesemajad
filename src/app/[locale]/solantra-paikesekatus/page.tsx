import Link from "next/link";
import Image from "next/image";

import { Container } from '@/components/shared/container';
import HeroCarousel from "./hero-carousel";

import pic2 from "@/images/main-pic-3.jpeg";

import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';

import { FaArrowRight } from "react-icons/fa";

import type { ReactNode } from "react";

/*
<p className="mt-3 max-w-lg text-sm text-slate-500 text-center mx-auto">
            {t("näidisandmed")}
          </p>
          <dl className="mt-8 mx-auto divide-y divide-slate-200 border-t border-slate-200 sm:max-w-2xl">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between py-4"
              >
                <dt className="text-sm text-slate-600">{spec.label}</dt>
                <dd className="font-semibold text-slate-900">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
*/

type Feature = {
  title: string;
  description: ReactNode;
};

type Step = {
  title: string;
  description: string;
};

type Spec = {
  label: string;
  value: string;
};


type Doc = {
  title: string;
  description: string;
  href: string;
  fileType: string; 
  fileSize?: string;
};

export default function SolarRoofPage() {
  const t = useTranslations("Solantraroof");
  const nav_t = useTranslations("Navigations");
  
  const locale = useLocale();
  
  const availableLocales = ['et', 'en'];
  const currentLocale = availableLocales.includes(locale) ? locale : 'et';

  const contactHref = `/${currentLocale}/${nav_t("contact")}`;

  const FEATURES: Feature[] = [
    {
      title: t("features.title1"),
      description: t("features.text1"),
    },
    {
      title: t("features.title2"),
      description: t("features.text2"),
    },
    {
      title: t("features.title3"),
      description: t("features.text3"),
    },
    {
      title: t("features.title4"),
      description:
        (
          <>
            <Link
              href="#docs"
              className="hover:text-blue-600 transition underline underline-offset-2"
            >
              {t("productWarranty")}
            </Link>{" "}
            {t("and")}{" "}
            <Link
              href="#docs"
              className="hover:text-blue-600 transition underline underline-offset-2"
            >
              {t("installationWarranty")}
            </Link>
          </> 
          )
    },
  ];

  const STEPS: Step[] = [
    {
      title: t("steps.title1"),
      description: t("steps.text1"),
    },
    {
      title: t("steps.title2"),
      description: t("steps.text2"),
    },
    {
      title: t("steps.title3"),
      description: t("steps.text3"),
    },
    {
      title: t("steps.title4"),
      description: t("steps.text4"),
    },
  ];

  const DOCS: Doc[] = [
    {
      title: t("docs.title1"),
      description: t("docs.text1"),
      href: "/documents/solantra-tootekirjeldus.pdf",
      fileType: "PDF",
      fileSize: "1.8 MB",
    },
    {
      title: t("docs.title3"),
      description: t("docs.text3"),
      href: "/documents/solantra-garantii.pdf",
      fileType: "PDF",
      fileSize: "640 KB",
    }
  ];

  return (
    <main className="hero">
      <section className="relative">
        <HeroCarousel>
          <Container>
            <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-4 max-w-[700px] text-sm leading-relaxed text-white/80 sm:text-base">
              {t("heroText")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 select-none ">
              <Link
                href={contactHref}
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {t("askPrice")}
              </Link>
              <a
                href="#kuidas-toimib"
                className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/70"
              >
                {t("howItWorks")}
              </a>
            </div>
          </Container>
        </HeroCarousel>
      </section>

      <Container>
        <div className="grid grid-cols-2 divide-x divide-slate-200 border-b border-slate-200 py-8 select-none">
          <div className="pr-4 text-center">
            <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
              12 {t("years")}
            </p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              {t("warranty")}
            </p>
          </div>
          <div className="px-4 text-center">
            <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
              ~21.3%
            </p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              {t("module")}
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {t("whatDo")}
          </h2>
          <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-8"
              >
                <dt className="font-semibold text-slate-900">
                  {feature.title}
                </dt>
                <dd className="max-w-xl text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <section id="kuidas-toimib" className="bg-slate-50">
        <Container>
          <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg sm:aspect-[4/3] lg:order-2">
              <Image
                src={pic2}
                alt="Solantra paigaldusmeeskond katusel töötamas"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover select-none "
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {t("howItWorks")}
              </h2>
              <p className="mt-3 max-w-md text-slate-600">
                {t("nelisammu")}
              </p>
              <ol className="mt-8 space-y-6">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="pt-0.5 text-sm font-semibold text-blue-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-center">
            {t("tehnilised")}
          </h2>
          
        </div>
      </Container>

      <Container>
        <div className="py-16 sm:py-20" id="docs">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {t("docsTitle")}
          </h2>
          <p className="mt-3 max-w-lg text-sm text-slate-500">
            {t("tootekirjeldused")}
          </p>

          <ul className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
            {DOCS.map((doc) => (
              <li key={doc.title}>
                <Link
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group  flex items-center gap-5 rounded-lg px-4 py-6 transition hover:bg-slate-50 sm:-mx-6 sm:gap-8 sm:px-6"
                >
                  <span className="select-none flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-[11px] font-bold uppercase tracking-wide text-slate-500 transition group-hover:border-blue-600 group-hover:text-blue-600">
                    {doc.fileType}
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="block truncate font-semibold text-slate-900">
                      {doc.title}
                    </span>
                    <span className="mt-0.5 block text-sm text-slate-500">
                      {doc.description}
                    </span>
                  </span>

                  {doc.fileSize && (
                    <span className="select-none hidden shrink-0 text-xs text-slate-400 sm:block">
                      {doc.fileSize}
                    </span>
                  )}

                  <span
                    aria-hidden
                    className="select-none flex shrink-0 items-center gap-1 text-sm font-semibold text-slate-400 transition group-hover:gap-2 group-hover:text-blue-600"
                  >
                    <span className="hidden sm:inline">{t("download")}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v11" />
                      <path d="M7 12l5 5 5-5" />
                      <path d="M5 20h14" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

    
      <Container>
        <div className="flex flex-col justify-between gap-6 border-t border-slate-200 py-16 sm:flex-row sm:items-end sm:py-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {t("ctaTitle")}
            </h2>
            <p className="mt-2 max-w-md text-slate-600">
              {t("ctaText")}
            </p>
          </div>
          <Link
            href={`/${currentLocale}/${contactHref}`}
            className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/30 select-none"
          >
            {t("ctaBtn")}
            <FaArrowRight
              size="13"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </main>
  );
}