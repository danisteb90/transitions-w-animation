"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import TransitionLink from "./TransitionLink";

export default function CourseSection() {
	useEffect(() => {
		let nextDom = document.getElementById("next");
		let prevDom = document.getElementById("prev");
		let carouselDom = document.querySelector(".carousel");
		let itemDom = document.querySelector(".carousel .list");
		let thumbnailDom = document.querySelector(".carousel .thumbnail");

		nextDom.onclick = () => {
			showSlider("next");
		};

		prevDom.onclick = () => {
			showSlider("prev");
		};

		//Cuenta para habilitar las flechas y ocultar la propiedad CSS "next"
		let timeRunning = 2200;
		let runTimeOut;

		//Cuenta para movimiento automatico
		// let timeAutoNext = 10000;
		// let runAutoNext;
		// let runAutoNext = setTimeout(() => {
		// 	nextDom.click();
		// }, timeAutoNext);

		const showSlider = (type) => {
			let itemSlider = document.querySelectorAll(".carousel .list .item");
			let itemThumbnail = document.querySelectorAll(
				".carousel .thumbnail .item"
			);

			if (type === "next") {
				if (itemSlider[0] instanceof Node && itemThumbnail[0] instanceof Node) {
					itemDom.appendChild(itemSlider[0]);
					thumbnailDom.appendChild(itemThumbnail[0]);
					carouselDom.classList.add("next");
				} else {
					console.error("Uno de los elementos no es un nodo válido");
				}
			} else {
				let lastItemPosition = itemSlider.length - 1;
				if (
					itemSlider[lastItemPosition] instanceof Node &&
					itemThumbnail[lastItemPosition] instanceof Node
				) {
					itemDom.prepend(itemSlider[lastItemPosition]);
					thumbnailDom.prepend(itemThumbnail[lastItemPosition]);
					carouselDom.classList.add("prev");
				} else {
					console.error("Uno de los elementos no es un nodo válido");
				}
			}

			clearTimeout(runTimeOut);
			runTimeOut = setTimeout(() => {
				carouselDom.classList.remove("next");
				carouselDom.classList.remove("prev");
			}, timeRunning);

			// clearTimeout(runAutoNext);
			// runAutoNext = setTimeout(() => {
			// 	nextDom.click();
			// }, timeAutoNext);
		};
	});

	return (
		<main id="main-course-container" className="main-course-container">
			{/* Carousel */}
			<div className="carousel">
				{/* <h2 className="courses-title">Cursos</h2> */}
				<div className="list">
					<div className="item">
						<Image
							src="/Assets/diplomado-meditacion.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title">
								DIPLOMADO EN<span className="topic"> MEDITACIÓN</span>
							</div>

							<div className="des">
								Tu tiempo es limitado, así que no lo malgastes viviendo la vida
								de alguien distinto de quien realmente eres. Aprende a vaciarte,
								y la Plenitud de la existencia colmará tu Ser. Para ello, te
								ofrecemos el primer Diplomado en Meditación basado en las ocho
								fases de una experiencia cúlmine descritas por los grandes
								sabios y avatares de todos los tiempos. Una oportunidad de
								crecer y adquirir múltiples técnicas y herramientas con las que
								avanzar en tu proceso de Autoconocimiento y Realización y,
								además, convertirte en instructor/a de meditación. <br />
								<br />
								Inscríbete ahora y prepárate para enseñar a otr@s el bello arte
								de la meditación.
							</div>
							<div className="buttons">
								<TransitionLink href="/diplomado-meditacion" label="Leer Más" />
								<Link
									href="https://drive.google.com/uc?export=download&id=1J-GWcqlYJco0o2W0CYoGqvh0k125Mjda"
									className="button"
								>
									Descargar PDF
								</Link>
								<Link href="#main-course-container" className="button">
									Inscríbete
								</Link>
							</div>
							<div className="gSansMedium text-[17px] 2xl:text-[16px] text-[var(--zen-white)] mt-[12px] w-[400px] xl:w-[650px]">
								Inscripciones abiertas hasta el 18 de septiembre. <br />
								Preinscripción con descuento hasta el 19 de agosto.
							</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/formacion-ching.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title">
								FORMACIÓN EN<span className="topic"> CHING I</span>
							</div>

							<div className="des">
								La tradición Fang Shi es un linaje ancestral que surge en las
								primeras escuelas del Yin-Yang. Estas escuelas fueron las que
								crearon lo que actualmente conocemos como I Ching. Para este
								linaje, esta disciplina universal es una vía de
								autoconocimiento, autosuperación y crecimiento espiritual. Un
								noble arte con el que acercarse a una experiencia mística de
								conexión con la Unidad. <br />
								<br /> Aquí tienes la oportunidad de acceder a la primera
								formación online perteneciente a este milenario linaje. Un viaje
								de autodescubrimiento, pero también, una oportunidad de aprender
								una metodología atávica con la que guiar y llevar Luz al Camino
								de otr@s.
								<br />
								<br />
								Inscríbete y adéntrate en esta fascinante experiencia de
								transformación que hará cambiar todo tu universo.
							</div>
							{/* <div className="buttons">
								<Link href="/formacion-ching-i" className="button">
									LEER MAS
								</Link>
								<Link
									href="https://drive.google.com/uc?export=download&id=1J-GWcqlYJco0o2W0CYoGqvh0k125Mjda"
									className="button"
								>
									Brochure
								</Link>
								<Link href="#main-course-container" className="button">
									Inscríbete
								</Link>
							</div> */}
							<div className="prox">
								<h2>
									Inicio octubre 2024. Inscripciones desde septiembre 2024.
								</h2>
							</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/realizacion-espiritual.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title">Formación en Realización Espiritual</div>
							<div className="topic">El Gran Viaje del Pez Koi</div>
							<div className="des">
								Hay dos maneras de entender y vivir la vida; una de ellas te
								lleva a una vida ordinaria con más o menos éxito y prosperidad,
								una vida que terminará con tu última exhalación. La otra, es una
								vida que requiere coherencia, impecabilidad y una chispa de
								magia y fantasía. Esta, te ofrece ir más allá de quien crees que
								eres, y te abre la posibilidad de acceder al otro lado del
								espejo para ver una realidad nunca antes soñada. La primera
								opción será disfrutada o aborrecida por tu yo egóico, por esa
								estructura de personalidad que definió tu familia, la sociedad y
								la cultura de la época en la que nos encontramos, y por todos y
								cada uno de los condicionamientos externos que ahora habitan en
								tu interior. <br />
								<br />
								Para la segunda opción, aquí tienes una formación creada y
								diseñada para encontrar la verdadera Libertad, más allá del
								engaño o la falsedad de las ideas, de tu propio cuerpo de
								conducta y de todas las directrices y estereotipos proyectados
								sobre tu auténtica naturaleza. Si eres de los que sienten que
								este mundo y esta vida es algo más de todo aquello que ves y
								escuchas, no dejes pasar la oportunidad de formar parte del Gran
								Viaje.
							</div>
							{/* <div className="buttons">
								<Link href="/formacion-ching-i" className="button">
									LEER MAS
								</Link>
								<Link
									href="https://drive.google.com/uc?export=download&id=1J-GWcqlYJco0o2W0CYoGqvh0k125Mjda"
									className="button"
								>
									Brochure
								</Link>
								<Link href="#main-course-container" className="button">
									Inscríbete
								</Link>
							</div> */}
							<div className="prox">
								<h2>Inicio febrero 2025. Inscripciones desde enero 2024.</h2>
							</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/sonoterapia.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title">
								DIPLOMADO EN<span className="topic"> SONOTERAPIA</span>
							</div>

							<div className="des">
								Cuando algo vive dentro de ti, no hay otra opción que
								expresarlo. Y para ello, los humanos hemos utilizado el sonido y
								la música desde hace miles de años para comunicar sentimientos y
								emociones, compartir sueños y hacer más cercano nuestro mundo
								interno con aquellos que escuchan el susurro del espíritu de
								aquel que hace cantar los instrumentos. <br />
								<br />
								Aquí tienes una formación con la que desarrollar tu
								sensibilidad, tu escucha y silencio interior. Un diplomado con
								el que adquirirás herramientas y técnicas teórico-prácticas con
								las que realizar sesiones individuales y grupales de Healing
								Sounds. Una forma sublime de mejorar y sanar la vida de otr@s y
								contribuir, al mismo tiempo, a la elevación vibracional del
								planeta.
							</div>
							{/* <div className="buttons">
								<Link href="/diplomado-sonoterapia" className="button">
									LEER MAS
								</Link>
								<Link
									href="https://drive.google.com/uc?export=download&id=1J-GWcqlYJco0o2W0CYoGqvh0k125Mjda"
									className="button"
								>
									Brochure
								</Link>
								<Link href="#main-course-container" className="button">
									Inscríbete
								</Link>
							</div> */}
							<div className="prox">
								<h2>Inicio enero 2025. Inscripciones desde noviembre 2024.</h2>
							</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/sanacion-espiritual.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title sanacion">
								Maestría en Sanación Espiritual
							</div>
							<div className="topic sanacion">La Luz del Cambio</div>
							<div className="des">
								Todos los seres humanos llegamos a este planeta con habilidades
								y capacidades vinculadas a la parasicología y lo paranormal. La
								sanación energética y espiritual a través de la imposición de
								manos se ha desarrollado desde los inicios de todas las culturas
								y, aunque algunos reniegan de su veracidad, todos los días
								aparecen nuevos casos de sanación espontánea que muestran lo
								mágico y milagroso que es el ser humano.
								<br />
								<br /> Aquí te ofrecemos una formación rigurosa con la que
								aprender y dominar técnicas y prácticas de las tradiciones
								espirituales del lejano oriente. En ella, obtendrás varias
								maestrías y diplomas que acreditarán tus conocimientos y tus
								capacidades, tanto para sanar a otr@s como para guiar sus
								procesos de evolución espiritual. Un equilibrio entre lo teórico
								y práctico que te llevará a un avance en tu propio proceso y que
								te otorgará lo necesario para desarrollarte como sanador/a
								espiritual.
							</div>
							{/* <div className="buttons">
								<Link href="/maestria-sanacion-espiritual" className="button">
									LEER MAS
								</Link>
								<Link
									href="https://drive.google.com/uc?export=download&id=1J-GWcqlYJco0o2W0CYoGqvh0k125Mjda"
									className="button"
								>
									Brochure
								</Link>
								<Link href="#main-course-container" className="button">
									Inscríbete
								</Link>
							</div> */}
							<div className="prox">
								<h2>Inicio 2025.</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Thumbnail */}
				<div className="thumbnail">
					<div className="item">
						<Image
							src="/Assets/formacion-ching.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title wText">Formación en I Ching,</div>
							<div className="des">Próximamente</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/realizacion-espiritual.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title wText">El Gran Viaje del Pez Koi</div>
							<div className="des">Próximamente</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/sonoterapia.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title wText">Diplomado en Sonoterapia</div>
							<div className="des">Próximamente</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/sanacion-espiritual.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title wText">Maestría en Sanación Espiritual</div>
							<div className="des">Próximamente</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/diplomado-meditacion.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title wText">Diplomado en Meditación</div>
							<div className="des">Inscripciones hasta el 18 de septiembre</div>
						</div>
					</div>
				</div>
				{/* Arrows */}
				<div className="arrows">
					<button id="prev">{"<"}</button>
					<button id="next">{">"}</button>
				</div>
				<div className="time"></div>
			</div>
		</main>
	);
}
