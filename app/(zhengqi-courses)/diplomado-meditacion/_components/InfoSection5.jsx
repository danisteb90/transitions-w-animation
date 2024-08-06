"use client";
import Image from "next/image";
import { Lato } from "next/font/google";
import AccordeonItem from "./AccordeonItem";
import { useState } from "react";

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
});

const InfoSection5 = () => {
	const [open, setOpen] = useState(null);

	const toggle = (index) => {
		if (open === index) {
			return setOpen(null);
		}
		setOpen(index);
	};

	const formacionCheng = [
		{
			title: "Entre sus formaciones: ",
			lessons: [
				"Profesor en Meditación y Yoga Supramental por International Yoga Federation I.Y.F.",
				"Instructor en Meditación y Terapeuta en Medicina Tibetana por Thubten Dhargye Ling.",
				"Profesor de Hasya Yoga por Laughter Yoga International.",
				"Profesor de Filosofía China y Maestro de I Ching y Meditación Taoísta Linaje Fang Shi.",
				"Maestro de Reiki Usui Japonés, Karuna-Prakriti, Sekhem-Seichim, Tibetano-Tántrico y Komyo por Alianza Española de Reiki.",
				"Aze Shiatsu Practitioner por Escuela Japonesa de Shiatsu.",
				"Humanismo Sanador por Escuela Neijing.",
				"PNL Practitioner por Instituto Holístico Internacional.",
				"Autohipnosis Practitioner (Reprogramación Mental REM) por Centro de Estudios Internacionales.",
				"Spiritual & Life Coach desde 2011 a través de un método propio llamado “Training Change”.",
				"Practicante de Goju Ryu Karate-Do y Hunyuan Tai Chi.",
			],
		},
	];

	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<div className="w-full h-full flex flex-col xl:flex-row items-center justify-center">
				<div className="w-full h-full xl:p-10 p-4 flex items-center justify-center xl:ml-[120px] ml-0">
					<Image
						src={"/Assets/ChenTuanLi.webp"}
						alt="instructor-bg"
						width={1024}
						height={1024}
						className="w-[95%] h-[95%] object-cover rounded-2xl shadow-2xl shadow-black scale-x-[-1]"
					/>
				</div>
				<div className="w-full h-[80%] xl:p-12 p-8 flex flex-col items-center justify-center">
					<h2 className="gSansMedium font-bold xl:text-[45px] text-[24px]">
						Conoce a tu Facilitador
					</h2>
					<h3 className="gSans xl:text-[26px] text-[21px] text-center">
						Chen Tuan Li
					</h3>
					<div className="w-full h-full flex flex-col items-start justify-start gap-[20px] mt-[30px]">
						<p
							className={`${lato.className} 2xl:text-[21px] xl:text-[16px] text-[14px]`}
						>
							Hace ya 30 años que tuve mi primer contacto con la meditación a
							raíz de un accidente que me hubiera llevado a un implante de
							rodilla si no cambiaba todo mi estilo de vida junto con mi sistema
							de creencias.
						</p>
						<p
							className={`${lato.className} 2xl:text-[21px] xl:text-[16px] text-[14px]`}
						>
							Desde aquel entonces, me adentré en el mundo de las terapias
							naturales y alternativas, conocí una mirada distinta del ser
							humano y de la vida y, poco a poco, conocí una realidad paralela
							que está ahí esperando a ser descubierta por aquellos que buscan
							algo diferente, que no encajan, que necesitan sanar y dejar salir
							algo que habita en su interior y que aún se mantiene cautivo por
							los estándares, estereotipos y prejuicios sociales.
						</p>
						<p
							className={`${lato.className} 2xl:text-[21px] xl:text-[16px] text-[14px]`}
						>
							Y así fue, como desde hace más de 25 años, comencé a compartir mi
							experiencia, mis conocimientos y, sobre todo, el amor hacia el ser
							humano y la vida a través de una dedicación que me ha permitido
							unir mi vocación con mi profesión.
						</p>
						<p
							className={`${lato.className} 2xl:text-[21px] xl:text-[16px] text-[14px]`}
						>
							Aquí, ahora, tú tienes la oportunidad de vivir tu propia
							transformación, de profundizar en ti y encontrar tu propia
							Naturaleza, y adquirir todo lo necesario para guiar a otr@s en su
							propio viaje. Y para ello, ¡qué hermosa manera de hacerlo a través
							del Bello Arte de la Meditación!
						</p>
						<p
							className={`${lato.className} 2xl:text-[21px] xl:text-[16px] text-[14px] font-bold italic`}
						>
							Déjame entregarte todo lo que tengo para ti, ¡otra vida es
							posible!
						</p>
						<div>
							<Image
								src={"/Assets/firmaChen.png"}
								alt="instructor-firma"
								width={500}
								height={500}
								className="object-cover w-[70%] ml-[-10px]"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="xl:w-[90%] w-full h-full flex flex-col items-start justify-start xl:ml-[120px] ml-0">
				{formacionCheng.map((data, index) => {
					return (
						<AccordeonItem
							key={index}
							open={index === open}
							title={data.title}
							lessons={data.lessons}
							toggle={() => toggle(index)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default InfoSection5;
