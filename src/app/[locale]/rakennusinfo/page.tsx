import EhitusinfoMain from "@/components/shared/ehitusinfo/hero";
import EhitusinfoFirstBlock from "@/components/shared/ehitusinfo/firstBlock";
import EhitusinfoSecondBlock from "@/components/shared/ehitusinfo/secondBlock";
import Kataloog from "@/components/shared/kataloog";

export default function EhitusInfoPage() {
    return (
        <>
            <EhitusinfoMain />
            <EhitusinfoFirstBlock />
            <Kataloog />
            <EhitusinfoSecondBlock />
        </>
    );
}