import HeroMain from "@/components/shared/hero";
import Stats from "@/components/ui/Stats";
import Steps from "@/components/ui/Steps";

import BeautifulResponsiveForm from "@/components/shared/contact";
import MainSecondBlock from "@/components/shared/secondBlock";

export default function Home() {
    return (
        <>
            <HeroMain />
            <Stats />
            <MainSecondBlock />
            <Steps />
            <BeautifulResponsiveForm />
        </>

    );
}
