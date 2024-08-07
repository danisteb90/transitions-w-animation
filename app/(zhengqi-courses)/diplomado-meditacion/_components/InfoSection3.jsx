import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
});

const InfoSection3 = () => {
	return (
		<div
			className={`${lato.className} w-full h-full flex flex-col justify-center items-center xl:pl-[120px] gap-[30px] mt-[50px]`}
		>
			<h2 className="gSansMedium font-bold xl:text-[40px] text-[28px] text-center text-[var(--zen-analog)]">
				¿A quién está dirigido este Diplomado en Meditación?
			</h2>
			<div className="w-full grid xl:grid-cols-3 grid-cols-1 gap-4 p-6">
				<div className="relative overflow-hidden bg-gray-200 p-4 xl:h-[450px] h-[300px] rounded-xl flex items-center justify-center hover:text-white xl:text-[26px] text-[20px] text-center shadow-md shadow-[var(--zen-pilaresanim)]">
					<div className="absolute top-0 left-0 w-full h-full z-0 bg-[var(--zen-base)]"></div>
					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 z-[2] hover:bg-[var(--zen-analog2)] transition-all duration-700 ease-in-out">
						<p className="font-semibold z-[2] text-[var(--zen-white)]">
							A todas las personas que buscan un cambio en su vida y desean
							realizar un proceso de transformación.
						</p>
					</div>
				</div>
				<div className="relative overflow-hidden bg-gray-200 p-4 xl:h-[450px] h-[300px] rounded-xl flex items-center justify-center hover:text-white xl:text-[26px] text-[20px] text-center shadow-md shadow-[var(--zen-pilaresanim)]">
					<div className="absolute top-0 left-0 w-full h-full z-0 bg-[var(--zen-base)]"></div>
					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 z-[2] hover:bg-[var(--zen-analog)] transition-all duration-700 ease-in-out">
						<p className="font-semibold z-[2] text-[var(--zen-white)]">
							A terapeutas, profesionales de la salud y practicantes de
							cualquier disciplina que quieran incrementar su sensibilidad y
							autodisciplina, potenciar sus capacidades de sanación y empatía,
							y/o adquirir mayor profundidad en sus prácticas diarias.
						</p>
					</div>
				</div>
				<div className="relative overflow-hidden bg-gray-200 p-4 xl:h-[450px] h-[300px] rounded-xl flex items-center justify-center hover:text-white xl:text-[26px] text-[20px] text-center shadow-md shadow-[var(--zen-pilaresanim)]">
					<div className="absolute top-0 left-0 w-full h-full z-0 bg-[var(--zen-base)]"></div>
					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 z-[2] hover:bg-[var(--zen-analog2)] transition-all duration-700 ease-in-out">
						<p className="font-semibold z-[2] text-[var(--zen-white)]">
							A quienes sienten aprender una profesión sana y gratificante con
							la que guiar a otros en su camino de evolución espiritual.
						</p>
					</div>
				</div>
			</div>
			<h2 className="gSans xl:text-[26px] text-[21px] text-center mt-[-20px]">
				Aprende a vaciarte y la Plenitud de la existencia colmará tu Sed.
			</h2>
			<div className="xl:w-[250px] w-[140px] h-[60px] bg-[var(--zen-analog)] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[var(--zen-lightorange)] transition-all duration-600 shadow-md shadow-[var(--zen-pilaresanim)] mt-[-18px]">
				<a
					href="https://buy.stripe.com/14kcPefJ895B6xGeUU"
					target="_blank"
					className="gSans xl:text-[24px] text-[16px] text-[var(--zen-white)]"
				>
					Inscríbete Ahora
				</a>
			</div>
		</div>
	);
};

export default InfoSection3;
