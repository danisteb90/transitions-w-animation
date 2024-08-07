"use client";
import { useState } from "react";
import AccordeonItem from "./AccordeonItem";

const InfoSection4 = () => {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);

	const toggle = (index) => {
		if (open === index) {
			return setOpen(null);
		}
		setOpen(index);
	};

	const toggle2 = (index) => {
		if (open2 === index) {
			return setOpen2(null);
		}
		setOpen2(index);
	};

	const meditacionList = [
		{
			title: "Módulo I",
			lessons: [
				"Qué es la meditación",
				"Tipos de meditación",
				"Posturas de meditación",
				"Niveles de consciencia y frecuencias cerebrales",
				"Los obstáculos de la meditación",
				"Relajación y respiración",
				"Beneficios de la meditación",
				"Técnicas de meditación",
			],
		},
		{
			title: "Módulo II",
			lessons: [
				"Consciencia Emocional",
				"Fases del Proceso Curativo",
				"Fases de la Experiencia Cúlmine",
				"Técnicas de meditación",
			],
		},
		{
			title: "Módulo III",
			lessons: [
				"Corrientes Espirituales de Occidente",
				"Las Fuerzas Ocultas de la Vida",
				"Técnicas de meditación",
			],
		},
		{
			title: "Módulo IV",
			lessons: [
				"Corrientes Espirituales de Oriente",
				"Yo Objetivo & Yo Subjetivo",
				"Técnicas de meditación",
			],
		},
		{
			title: "Módulo V (presencial opcional)",
			lessons: [
				"Seminarios intensivos presenciales de un día",
				"Retiro Consolidación: Geometría Sagrada, El Tiempo Cíclico, La Muerte, manejo de grupos, técnicas de meditación.",
			],
		},
	];

	const autoCuidadoList = [
		{
			title: "Módulo I",
			lessons: ["Consciencia Corporal"],
		},
		{
			title: "Módulo II",
			lessons: ["Alimentación Consciente"],
		},
		{
			title: "Módulo III",
			lessons: ["Ayuno y Reset Nutricional"],
		},
		{
			title: "Módulo IV",
			lessons: ["La Salud y las Estaciones"],
		},
		{
			title: "Módulo V (presencial opcional)",
			lessons: ["Healing Sounds, Shinrin Yoku, Sincrodestino y No-Dualidad"],
		},
	];

	return (
		<div className="w-full h-full xl:pl-[120px] pl-0 flex flex-col justify-center items-center">
			<h2 className="gSansMedium font-bold w-full h-[150px] flex items-center justify-center text-center xl:text-[40px] text-[24px] text-[var(--zen-analog)]">
				¿Qué vas a aprender en este Diplomado en Meditación?
			</h2>
			<div className="w-full h-full flex xl:flex-row flex-col justify-center items-center">
				<div className="w-full h-full flex flex-col items-center justify-center flex-1 xl:border-r-2 xl:border-b-0 border-b-2 xl:border-r-[var(--zen-analog)] border-b-[var(--zen-analog)] mb-[20px]">
					<h3 className="w-full text-center gSansMedium text-[26px] font-bold mb-[30px]">
						Programa Meditación
					</h3>
					{meditacionList.map((data, index) => {
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
				<div className="w-full h-full flex flex-col items-center justify-start flex-1">
					<h3 className="w-full text-center gSansMedium text-[26px] font-bold mb-[30px]">
						Programa Autocuidado Consciente
					</h3>
					{autoCuidadoList.map((data, index) => {
						return (
							<AccordeonItem
								key={index}
								open={index === open2}
								title={data.title}
								lessons={data.lessons}
								toggle={() => toggle2(index)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default InfoSection4;
