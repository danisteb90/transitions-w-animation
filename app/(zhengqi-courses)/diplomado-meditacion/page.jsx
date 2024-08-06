import TransitionLink from "@/components/TransitionLink";
import { Great_Vibes } from "next/font/google";
import LeftMenu from "./_components/LeftMenu";
import ContactButton from "./_components/ContactButton";
import ArrowDown from "./_components/ArrowDown";
import DHeroSection from "./_components/DHeroSection";
import InfoSection1 from "./_components/InfoSection1";
import InfoSection2 from "./_components/InfoSection2";
import InfoSection3 from "./_components/InfoSection3";
import InfoSection4 from "./_components/InfoSection4";

const greatVibes = Great_Vibes({
	subsets: ["latin"],
	weight: ["400"],
});

const DiplomadoMeditacion = () => {
	return (
		<div className="w-full h-screen">
			<LeftMenu />
			<ContactButton text="Contáctanos" />
			<ArrowDown />
			<div className="w-full xl:h-screen h-[800px]">
				<DHeroSection />
			</div>
			<div className="w-full h-screen">
				<InfoSection1 />
			</div>
			<div className="w-full h-auto">
				<InfoSection2 />
			</div>
			<div className="w-full xl:h-screen h-auto xl:mt-0 mt-10">
				<InfoSection3 />
			</div>
			<div className="w-full h-auto">
				<InfoSection4 />
			</div>
		</div>
	);
};

export default DiplomadoMeditacion;
