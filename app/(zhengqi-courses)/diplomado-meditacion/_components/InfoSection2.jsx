import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
});

const InfoSection2 = () => {
	return (
		<div
			className={`${lato.className} h-full w-full xl:pl-[120px] flex flex-col justify-center items-center `}
		>
			<h2 className="gSansMedium font-bold w-full mb-[80px] flex items-center justify-center text-center xl:text-[40px] text-[24px] text-[var(--zen-analog)]">
				¿Qué vas a aprender en este Diplomado en Meditación?
			</h2>
			<div className="w-full grid xl:grid-cols-4 grid-cols-1 xl:grid-rows-2 grid-rows-8 xl:gap-4 xl:p-6 px-2">
				<div className="relative w-full h-[380px] border-[8px] border-[var(--zen-analog2)] rounded-lg">
					<Image
						src={"/Assets/Icon1.png"}
						alt="icons"
						width={525}
						height={375}
						className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[57%] h-[57%] object-contain"
					/>
					<p className="w-full h-full flex items-center justify-start text-center text-[22px] p-[15px] pt-[30px]">
						Formación basada en las ocho etapas de una experiencia cúlmine, con
						las cuales, identificarás el proceso en el que se encuentra tu
						futuro Alumno/a.
					</p>
				</div>
				<div className="relative w-full h-[380px] border-[8px] border-[var(--zen-base)] rounded-lg">
					<Image
						src={"/Assets/Icon2.png"}
						alt="icons"
						width={525}
						height={375}
						className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[57%] h-[57%] object-contain"
					/>
					<p className="w-full h-full flex items-center justify-start text-center text-[22px] p-[15px] pt-[30px]">
						Aprendizaje de múltiples técnicas de meditación para avanzar en cada
						una de las etapas, y con las que guiar el proceso de tu futuro
						Alumno/a.
					</p>
				</div>
				<div className="relative w-full h-[380px] border-[8px] border-[var(--zen-analog2)] rounded-lg">
					<Image
						src={"/Assets/Icon3.png"}
						alt="icons"
						width={525}
						height={375}
						className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[57%] h-[57%] object-contain"
					/>
					<p className="w-full h-full flex items-center justify-start text-center text-[22px] p-[15px] pt-[30px]">
						Instrucción que, además de equilibrar lo teórico y lo práctico, te
						brinda el conocimiento filosófico de las principales Escuelas
						Espirituales.
					</p>
				</div>
				<div className="relative w-full h-[380px] border-[8px] border-[var(--zen-base)] rounded-lg">
					<Image
						src={"/Assets/Icon4.png"}
						alt="icons"
						width={525}
						height={375}
						className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[57%] h-[57%] object-contain"
					/>
					<p className="w-full h-full flex items-center justify-start text-center text-[22px] p-[15px] pt-[30px]">
						Incluye un programa complementario de Autocuidado para tu propia
						preparación como Instructor/a de Meditación.
					</p>
				</div>
				<div className="relative w-full h-[380px] border-[8px] border-[var(--zen-base)] rounded-lg">
					<Image
						src={"/Assets/Icon6.png"}
						alt="icons"
						width={525}
						height={375}
						className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[57%] h-[57%] object-contain"
					/>
					<p className="w-full h-full flex items-center justify-start text-center text-[22px] p-[15px] pt-[30px]">
						Seminarios intensivos presenciales y Retiro de Consolidación en un
						entorno natural al término del Diplomado (opcionales en España).
					</p>
				</div>
				<div className="relative w-full h-[380px] border-[8px] border-[var(--zen-analog2)] rounded-lg">
					<Image
						src={"/Assets/Icon5.png"}
						alt="icons"
						width={525}
						height={375}
						className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[57%] h-[57%] object-contain"
					/>
					<p className="w-full h-full flex items-center justify-start text-center text-[22px] p-[15px] pt-[30px]">
						Acompañamiento grupal gratuito durante el Diplomado y tres meses
						adicionales al término del mismo.
					</p>
				</div>
				<div className="relative w-full h-[380px] border-[8px] border-[var(--zen-base)] rounded-lg">
					<Image
						src={"/Assets/Icon7.png"}
						alt="icons"
						width={525}
						height={375}
						className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[57%] h-[57%] object-contain"
					/>
					<p className="w-full h-full flex items-center justify-start text-center text-[22px] p-[15px] pt-[30px]">
						Acceso opcional a asesorías individuales de coaching a precio
						especial.
					</p>
				</div>
				<div className="relative w-full h-[380px] border-[8px] border-[var(--zen-analog2)] rounded-lg">
					<Image
						src={"/Assets/Icon8.png"}
						alt="icons"
						width={525}
						height={375}
						className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[57%] h-[57%] object-contain"
					/>
					<p className="w-full h-full flex items-center justify-start text-center text-[22px] p-[15px] pt-[30px]">
						Todo ello entregado por Chen Tuan Li, Facilitador acreditado con más
						de 25 años de experiencia y práctica.
					</p>
				</div>
			</div>
		</div>
	);
};

export default InfoSection2;
