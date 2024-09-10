"use client";
import { useState } from "react";
import QuestionsAccordeon from "./QuestionsAccordeon";
import InfoModal from "./InfoModal";

const InfoSection8 = () => {
	const [open, setOpen] = useState(false);

	const toggle = (index) => {
		if (open === index) {
			return setOpen(null);
		}
		setOpen(index);
	};

	const preguntasList = [
		{
			question: "¿Cuándo inicia y termina el Diplomado en Meditación?",
			answer: ["Inicia en septiembre de 2024 y termina en junio de 2025."],
		},
		{
			question:
				"¿Puedo inscribirme al Diplomado en Meditación sin formación previa?",
			answer: ["Sí. No se precisa ni conocimiento ni experiencia previa."],
		},
		{
			question: "¿Qué materiales requiero?",
			answer: [
				" Para las prácticas en clase requieres un lugar cómodo y tranquilo, una silla y donde tomar apuntes. Y, para tus prácticas diarias, te recomendamos tener un zafu o un banco de meditación.",
			],
		},
		{
			question: "¿Hay exámenes durante el Diplomado en Meditación?",
			answer: [
				"No exámenes pero sí evaluación y retroalimentación constante para asegurar tu progreso.",
			],
		},
		{
			question:
				"¿Hay interacción con el Facilitador o es un programa auto-guiado?",
			answer: [
				" No es un programa auto-guiado. Nuestro Facilitador, Chen Tuan Li, brinda las clases en directo vía Zoom y acompaña el proceso vía grupo privado en Telegram durante todo el Diplomado más tres meses adicionales luego de finalizar.",
			],
		},
		{
			question:
				"¿Qué tipo de meditación se enseña en el Diplomado en Meditación?",
			answer: [
				"Aprenderás múltiples técnicas de meditación, de las principales Escuelas Espirituales, para avanzar en cada una de las ocho etapas de una experiencia cúlmine. Así, identificarás el proceso en el que se encuentra tu futuro Alumno/a y sabrás guiarl@ con sabiduría. Ésto hace del Diplomado único en lo que brinda.",
			],
		},
		{
			question: "¿Qué sucede si no puedo asistir a una sesión en directo?",
			answer: [
				"No te preocupes si no puedes asistir a una sesión en directo. Todas nuestras sesiones en directo se graban y podrás acceder a las grabaciones en el momento que quieras durante el Diplomado. Además, podrás hacer preguntas y obtener retroalimentación en el grupo privado en Telegram y/o en las sesiones posteriores.",
			],
		},
		{
			question:
				"¿Las actividades presenciales están incluidas en el valor de inversión?",
			answer: [
				"No. El valor de tu inversión no incluye la reserva de plaza (€15 por seminario) ni la alimentación de los Seminarios Intensivos. Tampoco está incluido el alojamiento ni la alimentación del Retiro de Consolidación. Toma en cuenta que estas actividades presenciales son opcionales y se realizarán en España.",
			],
		},
		{
			question: "No tengo tarjeta de crédito, ¿puedo pagar con otro método?",
			answer: [
				"Sí. Mediante transferencia bancaria nacional o internacional y, si estás en España, por Bizum.",
			],
		},
		{
			question: "¿Existen facilidades de pago?",
			answer: ["Sí. Escríbenos para más información."],
		},
	];

	return (
		<div className="w-full h-full xl:pl-[120px] pl-0 flex flex-col justify-center items-center mt-[50px]">
			<div className="w-full h-full flex flex-col items-center justify-center flex-1">
				<h3 className="w-full text-center gSansMedium xl:text-[40px] text-[24px] font-bold mb-[30px] text-[var(--zen-analog)]">
					Preguntas Frecuentes
				</h3>
				{preguntasList.map((data, index) => {
					return (
						<QuestionsAccordeon
							key={index}
							open={index === open}
							title={data.question}
							lessons={data.answer}
							toggle={() => toggle(index)}
						/>
					);
				})}
			</div>
			<div className="xl:w-[250px] w-[180px] h-[60px] bg-[var(--zen-base)] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[var(--zen-lightorange)] transition-all duration-600 z-[2] mb-[80px] mt-[-10px]">
				<a
					href="https://wa.me/34684408835"
					target="_blank"
					className="gSans xl:text-[24px] text-[16px] text-[var(--zen-white)]"
				>
					Tengo otra pregunta
				</a>
			</div>
			<div className="w-full h-full mt-[130px] relative xl:mb-0 mb-[45px]">
				<InfoModal />
			</div>
			<div className="gSansMedium w-full flex items-center justify-center xl:flex-row flex-col text-center px-[10px] xl:text-[40px] text-[25px] text-[var(--zen-pilaresanim)] font-bold mt-[30px] mb-[-2px]">
				<p>
					Formación Completa por{" "}
					<span className="text-[var(--zen-analog)]">490€</span>
				</p>
			</div>
			<div className="gSansMedium w-full flex items-center justify-center text-center xl:text-[30px] text-[16px] text-[var(--zen-pilaresanim)] font-bold mt-[5px] mb-[40px]">
				Para facilidades de pago:{" "}
				<a
					href="mailto:teconchen@gmail.com"
					target="_blank"
					className="underline text-[var(--zen-analog)] xl:ml-[5px] ml-[3px]"
				>
					Escríbenos
				</a>
			</div>
			<h2 className="gSansMedium font-bold w-full mb-[40px] flex items-center justify-center text-center xl:text-[46px] text-[28px] text-[var(--zen-analog)]">
				¡Otra Vida es Posible!
			</h2>
		</div>
	);
};

export default InfoSection8;
