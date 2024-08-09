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
				"No es un programa auto-guiado. Nuestro Facilitador, Chen Tuan Li, brinda las clases en directo y acompaña el proceso vía grupo privado en Telegram durante todo el Diplomado más tres meses adicionales luego de finalizar.",
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
			<div className="w-full h-full flex flex-col items-center justify-center flex-1 mb-[20px]">
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
			<div className="xl:w-[250px] w-[180px] h-[60px] bg-[var(--zen-base)] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[var(--zen-lightorange)] transition-all duration-600 z-[2] mb-[50px]">
				<a
					href="https://wa.me/34684408835"
					target="_blank"
					className="gSans xl:text-[24px] text-[16px] text-[var(--zen-white)]"
				>
					Tengo otra pregunta
				</a>
			</div>
			<div className="w-full h-full mt-[130px] mb-[50px] relative">
				<InfoModal />
			</div>
			<h2 className="gSans xl:text-[26px] text-[21px] text-center mb-[30px]">
				¡Otra Vida es Posible!
			</h2>
		</div>
	);
};

export default InfoSection8;
