import HeroMain from "@/components/shared/hero";
import Stats from "@/components/ui/Stats";
import Steps from "@/components/ui/Steps";

import BeautifulResponsiveForm from "@/components/shared/contact";
import MainSecondBlock from "@/components/shared/secondBlock";

import Kataloog from "@/components/shared/kataloog";

export default function Home() {
    return (
        <>
            <HeroMain />
            <Stats />
            <MainSecondBlock />
            <Kataloog />
            <Steps />
            <BeautifulResponsiveForm />
        </>

    );
}
