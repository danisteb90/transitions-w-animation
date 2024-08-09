import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
});

const InfoSection1 = () => {
	return (
		<div className="w-full h-full flex flex-col xl:flex-row items-center justify-center mt-[75px]">
			<div className="w-full h-[80%] p-8 flex flex-col items-end justify-center gap-5 xl:ml-32 ml-0">
				<h2 className="gSansMedium xl:text-left text-center font-bold xl:text-[45px] text-[28px] text-[var(--zen-analog)] xl:leading-[50px] leading-0">
					¿Qué es el Diplomado en Meditación de la Escuela de Libertad?
				</h2>
				<p
					className={`${lato.className} xl:text-[21px] text-[16px] xl:leading-[30px] leading-0`}
				>
					Nuestro Diplomado en Meditación es una formación de transformación
					profunda para convertirte en Instructor/a de Meditación. Para ello,
					nos apoyaremos en cinco módulos que combinan lo teórico y lo práctico.
					Allí encontrarás, junto con el programa académico de Meditación, un
					programa específico de Autocuidado para tu propia preparación como
					futur@ Instructor/a.
				</p>
				<p
					className={`${lato.className} xl:text-[21px] text-[16px] xl:leading-[30px] leading-0`}
				>
					No importa si eres principiante o si ya tienes algo de experiencia,
					aquí tienes la oportunidad de unirte y participar en este viaje
					auténtico y significativo hacia un bienestar integral.
				</p>
			</div>
			<div className="w-full h-full flex items-center justify-center">
				<Image
					src={"/Assets/atencion-plena.avif"}
					alt="diplomado-bg"
					width={1024}
					height={1024}
					className="w-[80%] h-[80%] object-cover rounded-2xl shadow-2xl shadow-black"
				/>
			</div>
		</div>
	);
};

export default InfoSection1;
