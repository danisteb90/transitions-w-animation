"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";
import Link from "next/link";
import ModalForm from "@/app/(zhengqi-courses)/meditacion/_components/ModalForm";

const CoursesSlider = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => {
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setIsOpenModal(false);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 600);
		};

		// Set initial value
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Clean up event listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		let items = document.querySelectorAll(".slider .list .item");
		let prev = document.getElementById("prev");
		let next = document.getElementById("next");
		let thumbnails = document.querySelectorAll(".thumbnail .item");

		//config params
		let countItem = items.length;
		let itemActive = 0;
		let intervalTimer = 998000;

		//next click event
		next.onclick = () => {
			itemActive = itemActive + 1;
			if (itemActive >= countItem) {
				itemActive = 0;
			}
			showSlider();
		};

		//prev click event
		prev.onclick = () => {
			itemActive = itemActive - 1;
			if (itemActive < 0) {
				itemActive = countItem - 1;
			}
			showSlider();
		};

		//auto run slider
		let refreshInterval = setInterval(() => {
			next.click();
		}, intervalTimer);

		const showSlider = () => {
			//remove old active and thumbnail active class
			let itemActiveOld = document.querySelector(".slider .list .item.active");
			let thumbnailActiveOld = document.querySelector(
				".thumbnail .item.active"
			);

			itemActiveOld.classList.remove("active");
			thumbnailActiveOld.classList.remove("active");

			// active new item
			items[itemActive].classList.add("active");
			thumbnails[itemActive].classList.add("active");
		};

		// clear referesh interval
		clearInterval(refreshInterval);
		refreshInterval = setInterval(() => {
			next.click();
		}, intervalTimer);

		// click on thumbnail
		thumbnails.forEach((thumbnail, index) => {
			thumbnail.addEventListener("click", () => {
				itemActive = index;
				showSlider();
			});
		});
	}, []);

	return (
		<section id="courses-container" className="main-course-container">
			{isOpenModal && (
				<div className="fixed inset-0 z-[10] flex items-center justify-center bg-black bg-opacity-80">
					<ModalForm
						onClose={closeModal}
						pdfLink={
							"https://drive.google.com/uc?export=download&id=1ji1W-LN20dRnj7zLU5WDRlSecuVYdxlI"
						}
					/>
				</div>
			)}
			{/* <!-- Slider --> */}
			<div className="slider">
				{/* <!-- list items --> */}
				<div className="list">
					<div className="item active">
						<Image
							alt="diplomado-meditacion"
							src={
								isMobile
									? "/Assets/mobile/meditacion.avif"
									: "/Assets/web/meditacion.avif"
							}
							width={720}
							height={720}
						/>
						<div className="content">
							<p className="title">DIPLOMADO EN MEDITACIÓN</p>
							<h2>El Camino Hacia Tu Automaestría</h2>
							{isMobile ? (
								<div className="text-content">
									<p>
										Aprende a vaciarte y la Plenitud de la existencia colmará tu
										Ser. Para ello, te ofrecemos el primer Diplomado basado en
										las ocho fases de una experiencia cúlmine descritas por los
										grandes sabios y avatares de todos los tiempos. Una
										oportunidad de avanzar en tu proceso de Autoconocimiento y
										Realización Espiritual, y de adquirir múltiples técnicas y
										herramientas con las que convertirte en Instructor/a para
										guiar y acompañar a otr@s en el arte de la Meditación.
									</p>
									<p>
										Inscripciones abiertas hasta el 18 de septiembre de 2024.
									</p>
								</div>
							) : (
								<div className="text-content">
									<p>
										Tu tiempo es limitado, no lo malgastes viviendo la vida de
										alguien distinto de quien realmente eres.
									</p>
									<p>
										Aprende a vaciarte y la Plenitud de la existencia colmará tu
										Ser. Para ello, te ofrecemos el primer Diplomado en
										Meditación basado en las ocho fases de una experiencia
										cúlmine descritas por los grandes sabios y avatares de todos
										los tiempos. Una oportunidad de crecer y avanzar en tu
										proceso de Autoconocimiento y Realización Espiritual, y de
										adquirir múltiples técnicas y herramientas con las que
										convertirte en Instructor/a de Meditación para guiar y
										acompañar a tus futur@s alumn@s.
									</p>
									<p>
										Inscríbete ahora y prepárate para enseñar a otr@s el bello
										arte de la meditación.
									</p>
									<p>
										Inscripciones abiertas hasta el 18 de septiembre de 2024.
									</p>
								</div>
							)}
							<div className="buttons">
								{/* <TransitionLink
									href="/diplomado-meditacion"
									label="Leer Más"
									background="bg-[#00000099]"
								/> */}
								<div className="flex items-center justify-center bg-[#00000099] rounded-[10px] p-[10px] cursor-pointer transition-all duration-600 z-[2] text-[var(--zen-white)] hover:bg-[var(--zen-white)] hover:text-black">
									<Link href="/meditacion">Leer Más</Link>
								</div>
								<div className="flex items-center justify-center bg-[#00000099] rounded-[10px] p-[10px] cursor-pointer transition-all duration-600 z-[2] text-[var(--zen-white)] hover:bg-[var(--zen-white)] hover:text-black">
									<p
										onClick={openModal}
										className="gSans xl:text-[18px] text-[16px]"
									>
										Descargar PDF
									</p>
								</div>

								<Link
									href="https://buy.stripe.com/6oE5mM54u81xcW45kl"
									target="_blank"
									className="button"
								>
									Inscríbete
								</Link>
							</div>
						</div>
					</div>
					<div className="item">
						<Image
							alt="formacion-ching"
							src={
								isMobile ? "/Assets/mobile/ching.avif" : "/Assets/web/ching.jpg"
							}
							width={720}
							height={720}
						/>
						<div className="content">
							<p className="title">
								FORMACIÓN EN I CHING SEGÚN EL LINAJE FANG SHI
							</p>
							<h2>El Poder Del Clarividente</h2>
							{isMobile ? (
								<div className="text-content">
									<p>
										Para el ancestral linaje Fang Shi, el I Ching es una vía de
										autoconocimiento, autosuperación y evolución espiritual. Un
										noble arte con el que acercarse a una experiencia mística de
										conexión con la Unidad. Aquí te presentamos la primera
										Formación en línea perteneciente a este milenario linaje. Un
										fabuloso viaje de autodescubrimiento que te brinda la
										oportunidad de aprender una metodología atávica con la que
										guiar y llevar Luz al Camino de otr@s.
									</p>
									<p>Inicio en octubre de 2024.</p>
								</div>
							) : (
								<div className="text-content">
									<p>
										La tradición Fang Shi es un linaje ancestral que surge en
										las primeras Escuelas del Yin-Yang, a quienes se consideran
										los fundadores de lo que actualmente conocemos como I Ching.
									</p>
									<p>
										Para este linaje, esta disciplina universal es una vía de
										autoconocimiento, autosuperación y evolución espiritual. Un
										noble arte con el que acercarse a una experiencia mística de
										conexión con la Unidad. Aquí te presentamos la primera
										Formación en línea perteneciente a este milenario linaje. Un
										fabuloso viaje de autodescubrimiento que te brinda la
										oportunidad de aprender una metodología atávica con la que
										guiar y llevar Luz al Camino de otr@s.
									</p>
									<p>Inicio en octubre de 2024.</p>
								</div>
							)}
							<div className="buttons">
								<Link href="mailto:teconchen@gmail.com" className="button-info">
									Solicita Información
								</Link>
							</div>
						</div>
					</div>
					<div className="item">
						<Image
							alt="realizacion-espiritual"
							src={
								isMobile
									? "/Assets/mobile/gran-viaje.avif"
									: "/Assets/web/gran-viaje.avif"
							}
							width={720}
							height={720}
						/>
						<div className="content">
							<p className="title">EL GRAN VIAJE: HACIA EL HOMBRE ESTELAR</p>
							<h2>Formación en Realización Espiritual</h2>
							{isMobile ? (
								<div className="text-content">
									<p>
										Hay dos maneras de entender y vivir la vida. Una de ellas,
										seguramente la que has conocido hasta ahora, te lleva a una
										vida ordinaria con más o menos éxito y prosperidad. La Otra,
										la que estás a punto de conocer, te abre la posibilidad de
										acceder al otro lado del espejo para ver una realidad nunca
										antes soñada. Si eres de los que sienten que esta vida es
										algo más de todo aquello que ves y escuchas, aquí tienes una
										formación diseñada para encontrar la verdadera Libertad. No
										dejes pasar la oportunidad de formar parte de El Gran Viaje.
										¡Tu Yo del futuro te espera en este Presente!
									</p>
									<p>Inicio en febrero de 2025.</p>
								</div>
							) : (
								<div className="text-content">
									<p>
										Hay dos maneras de entender y vivir la vida. Una de ellas,
										seguramente la que has conocido hasta ahora, te lleva a una
										vida ordinaria con más o menos éxito y prosperidad. La Otra,
										la que estás a punto de conocer, te abre la posibilidad de
										acceder al otro lado del espejo para ver una realidad nunca
										antes soñada.
									</p>
									<p>
										Aquí tienes una formación creada y diseñada para encontrar
										la verdadera Libertad, más allá del engaño o la falsedad de
										las ideas, de tu propio cuerpo de conducta y de todas las
										directrices y estereotipos proyectados sobre tu auténtica
										naturaleza. Si eres de los que sienten que este mundo y esta
										vida es algo más de todo aquello que ves y escuchas, no
										dejes pasar la oportunidad de formar parte de El Gran Viaje.
										¡Tu Yo del futuro te espera en este Presente!
									</p>
									<p>Inicio en febrero de 2025.</p>
								</div>
							)}
							<div className="buttons">
								<Link href="mailto:teconchen@gmail.com" className="button-info">
									Solicita Información
								</Link>
							</div>
						</div>
					</div>
					<div className="item">
						<Image
							alt="sonoterapia"
							src={
								isMobile
									? "/Assets/mobile/sonoterapia.avif"
									: "/Assets/web/sonoterapia.avif"
							}
							width={720}
							height={720}
						/>
						<div className="content">
							<p className="title">DIPLOMADO EN SONOTERAPIA</p>
							<h2>La Voz Del Espíritu</h2>
							{isMobile ? (
								<div className="text-content">
									<p>
										Desde hace miles de años, los humanos hemos utilizado el
										sonido y la música para comunicar sentimientos y emociones,
										compartir sueños, y hacer más cercano nuestro mundo interno
										con aquellos que escuchan el susurro del espíritu de aquel
										que hace vibrar los instrumentos. Aquí tienes un Diplomado
										para desarrollar tu sensibilidad, tu escucha y silencio
										interior; y, adquirir las herramientas y técnicas
										teórico-prácticas con las que realizar sesiones individuales
										y grupales de Healing Sounds.
									</p>
									<p>Inicio en enero de 2025.</p>
								</div>
							) : (
								<div className="text-content">
									<p>
										Desde hace miles de años, los humanos hemos utilizado el
										sonido y la música para comunicar sentimientos y emociones,
										compartir sueños, y hacer más cercano nuestro mundo interno
										con aquellos que escuchan el susurro del espíritu de aquel
										que hace vibrar los instrumentos.
									</p>
									<p>
										Aquí tienes un Diplomado para desarrollar tu sensibilidad,
										tu escucha y silencio interior; y, adquirir las herramientas
										y técnicas teórico-prácticas con las que realizar sesiones
										individuales y grupales de Healing Sounds. Una forma sublime
										de mejorar y sanar la vida de otr@s y contribuir, al mismo
										tiempo, a la elevación vibracional del planeta.
									</p>
									<p>Inicio en enero de 2025.</p>
								</div>
							)}
						</div>
					</div>
					<div className="item">
						<Image
							alt="sanacion"
							src={
								isMobile
									? "/Assets/mobile/sanacion.avif"
									: "/Assets/web/sanacion.avif"
							}
							width={720}
							height={720}
						/>
						<div className="content">
							<p className="title">MAESTRÍA EN SANACIÓN ESPIRITUAL</p>
							<h2>La Luz Del Cambio</h2>
							{isMobile ? (
								<div className="text-content">
									<p>
										Aunque algunos reniegan de la veracidad de la sanación
										energética y espiritual a través de la imposición de manos,
										todos los días aparecen nuevos casos de sanación espontánea
										que muestran lo mágico y milagroso que es el ser humano.
										Aquí te ofrecemos una Formación rigurosa con la que aprender
										y dominar técnicas y prácticas de las tradiciones
										espirituales del lejano oriente. Así, podrás desarrollarte
										como Sanador/a Espiritual, al mismo tiempo de incrementar
										tus habilidades extrasensoriales y avanzar en tu Realización
										Espiritual.
									</p>
									<p>Inicio en 2025.</p>
								</div>
							) : (
								<div className="text-content">
									<p>
										Aunque algunos reniegan de la veracidad de la sanación
										energética y espiritual a través de la imposición de manos,
										todos los días aparecen nuevos casos de sanación espontánea
										que muestran lo mágico y milagroso que es el ser humano.
									</p>
									<p>
										Aquí te ofrecemos una Formación rigurosa con la que aprender
										y dominar técnicas y prácticas de las tradiciones
										espirituales del lejano oriente. En ella, obtendrás varias
										maestrías y diplomas que acreditarán tus conocimientos y tus
										capacidades como Sanador/a Espiritual, al mismo tiempo de
										incrementar tus habilidades extrasensoriales y avanzar en tu
										Realización Espiritual. ¡Adéntrate en este Camino y
										experimenta el amor incondicional hacia todo ser viviente!
									</p>
									<p>Inicio en 2025.</p>
								</div>
							)}
						</div>
					</div>
				</div>
				{/* <!-- arrow buttons --> */}
				<div className="arrows">
					<button className="button-slider" id="prev">
						{"<"}
					</button>
					<button className="button-slider" id="next">
						{">"}
					</button>
				</div>
				{/* <!-- thumbnail --> */}
				<div className="thumbnail">
					<div className="item active">
						<Image
							alt="meditacion"
							src={
								isMobile
									? "/Assets/web/meditacion.avif"
									: "/Assets/web/meditacion.avif"
							}
							width={720}
							height={720}
						/>
						<div className="content">
							<h2>DIPLOMADO EN MEDITACIÓN</h2>
							<p>El Camino Hacia Tu Automaestría</p>
						</div>
					</div>
					<div className="item">
						<Image
							alt="ching"
							src={
								isMobile
									? "/Assets/mobile/ching.avif"
									: "/Assets/slides/ching.png"
							}
							width={720}
							height={720}
						/>
						<div className="content">
							<h2>FORMACIÓN EN I CHING</h2>
							<p>El Poder Del Clarividente</p>
						</div>
					</div>
					<div className="item">
						<Image
							alt="gran-viaje"
							src={
								isMobile
									? "/Assets/web/gran-viaje.avif"
									: "/Assets/web/gran-viaje.avif"
							}
							width={720}
							height={720}
						/>
						<div className="content">
							<h2>EL GRAN VIAJE</h2>
							<p>Formación en Realización Espiritual</p>
						</div>
					</div>
					<div className="item">
						<Image
							alt="sonoterapia"
							src={
								isMobile
									? "/Assets/mobile/sonoterapia.avif"
									: "/Assets/web/sonoterapia.avif"
							}
							width={720}
							height={720}
						/>
						<div className="content">
							<h2>DIPLOMADO EN SONOTERAPIA</h2>
							<p>La Voz Del Espíritu</p>
						</div>
					</div>
					<div className="item">
						<Image
							alt="sanacion"
							src={
								isMobile
									? "/Assets/mobile/sanacion.avif"
									: "/Assets/web/sanacion.avif"
							}
							width={720}
							height={720}
						/>
						<div className="content">
							<h2>MAESTRÍA EN SANACIÓN ESPIRITUAL</h2>
							<p>La Luz Del Cambio</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoursesSlider;
