import LeftMenu from "./_components/LeftMenu";
import ContactButton from "./_components/ContactButton";
import ArrowDown from "./_components/ArrowDown";
import DHeroSection from "./_components/DHeroSection";
import InfoSection1 from "./_components/InfoSection1";
import InfoSection2 from "./_components/InfoSection2";
import InfoSection3 from "./_components/InfoSection3";
import InfoSection4 from "./_components/InfoSection4";
import InfoSection5 from "./_components/InfoSection5";
import InfoSection6 from "./_components/InfoSection6";
import InfoSection7 from "./_components/InfoSection7";
import InfoSection8 from "./_components/InfoSection8";
import FooterMarquee from "@/components/FooterMarquee";
import Footer from "@/components/Footer";
import InfoModal from "./_components/InfoModal";

const DiplomadoMeditacion = () => {
	return (
		<div className="w-full h-screen">
			<InfoModal />
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
			<div className="w-full h-auto mt-[50px]">
				<InfoSection5 />
			</div>
			<div className="w-full h-auto ">
				<InfoSection6 />
			</div>
			<div className="w-full h-auto ">
				<InfoSection7 />
			</div>
			<div className="w-full h-auto ">
				<InfoSection8 />
			</div>
			<div className="w-full h-[250px] bg-[var(--zen-analog2)]">
				<FooterMarquee />
				<Footer background="bg-[var(--zen-analog2)]" />
			</div>
		</div>
	);
};

export default DiplomadoMeditacion;
