"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useState } from "react";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);

const PilaresSection = () => {
	const [activeModal, setActiveModal] = useState(null);

	useEffect(() => {
		const bento = document.getElementById("bento"),
			bentoBoxes = bento.querySelectorAll(".bento_box"),
			bentoBoxesSpan = bento.querySelectorAll(".bento_box_text > span"),
			bentoIntro = bento.querySelectorAll(
				".bento_intro > .bento_intro_row > h1"
			);

		const init = () => {
			gsap.set(bentoBoxes, {
				scaleY: 0,
				transformOrigin: "bottom",
			});
			gsap.set(bentoBoxesSpan, {
				yPercent: 110,
			});
			splitText();
		};

		gsap.timeline(
			{
				scrollTrigger: {
					trigger: ".bento",
					start: "-40% center",
					end: "bottom center",
					onEnter: init,
					once: true,
				},
			},
			"-=0.9"
		);

		const splitText = () => {
			Splitting({
				target: bentoIntro,
				by: "chars",
				key: null,
			});

			gsap.set(".bento_intro .char", {
				yPercent: 150,
			});

			animateIntro();
		};

		const animateIntro = () => {
			gsap
				.timeline({
					defaults: {
						duration: 1.2,
						ease: "expo.inOut",
						stagger: 0.02,
					},
				})
				.to(".bento_intro_row", {
					opacity: 1,
				})
				.to(".bento_intro .char", {
					yPercent: 0,
				})
				.to(".bento_intro .char", {
					yPercent: -150,
					delay: 1,
					onComplete: () => {
						animateBoxes();
						const bentoIntro = document.querySelector(".bento_intro");
						if (bentoIntro) {
							bentoIntro.remove();
						}
					},
				});
		};

		const animateBoxes = () => {
			gsap
				.timeline()
				.to(
					bentoBoxes,
					{
						duration: 1.6,
						opacity: 1,
						scaleY: "100%",
						ease: "expo.inOut",
						stagger: 0.05,
						onComplete: () => {
							addEventListeners();
						},
					},
					"-=0.6"
				)
				.to(bentoBoxesSpan, {
					duration: 1.6,
					yPercent: 0,
					ease: "expo.out",
				});
		};

		const animateInnerText = (data) => {
			gsap
				.timeline({
					defaults: {
						duration: 0.35,
					},
				})
				.to(data, {
					yPercent: -100,
					ease: "expo.in",
					overwrite: true,
				})
				.set(data, {
					yPercent: 100,
				})
				.to(data, {
					yPercent: 0,
					ease: "expo.out",
				});
		};

		const addEventListeners = () => {
			const tlModal = gsap.timeline();
			bentoBoxes.forEach((box, index) => {
				box.addEventListener("mouseenter", (e) => {
					const dataSpan = e.target.children[0].children[0];
					e.target.classList.add("active");
					animateInnerText(dataSpan);
				});
				box.addEventListener("mouseleave", (e) => {
					e.target.classList.remove("active");
				});
				box.addEventListener("click", () => {
					setActiveModal(`.bento_modal${index + 1}`);
					const modal = document.querySelector(`.bento_modal${index + 1}`);
					if (modal) {
						modal.classList.add("active");
						tlModal
							.to(".box_modal_image", {
								width: "50%",
								duration: 1,
								delay: 0.5,
								ease: "power4.inOut",
							})
							.to(
								".bento_modal_content",
								{
									opacity: 1,
									duration: 0.5,
									ease: "power4.inOut",
								},
								"-=0.5"
							);
					}
				});
			});

			const closeModal = document.querySelectorAll(".bento_modal_close");
			closeModal.forEach((close) => {
				close.addEventListener("click", () => {
					setActiveModal(null);
					const modal = close.parentElement;
					modal.classList.remove("active");
					tlModal
						.to(".box_modal_image", {
							width: "100%",
							duration: 0.2,
						})
						.to(".bento_modal_content", {
							opacity: 0,
							duration: 0.5,
						});
				});
			});
		};
	}, []);

	return (
		<div className="app">
			<div className="bento" id="bento">
				<div className="bento_container">
					<div className="bento_box bg-[var(--zen-base)]">
						<div>
							<Image
								src="/Assets/entorno.png"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text">
								<span>Entorno, Hábitat</span>
							</div>
						</div>
					</div>
					<div className="bento_box bg-[var(--zen-lightorange)]">
						<div className="bento_box_content">
							<Image
								src="/Assets/consciencia-corporal.png"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text">
								<span>Consciencia Corporal, Manejo de la Atención</span>
							</div>
						</div>
					</div>
					<div className="bento_box bg-[var(--zen-sky)]">
						<div className="bento_box_content">
							<Image
								src="/Assets/alimentacion.png"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text">
								<span>Alimentación, Nutrición</span>
							</div>
						</div>
					</div>
					<div className="bento_box bg-[var(--zen-analog2)]">
						<div className="bento_box_content">
							<Image
								src="/Assets/psique.png"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text text-black">
								<span>Psique, Pensamiento</span>
							</div>
						</div>
					</div>
					<div className="bento_box bg-[var(--zen-analog)]">
						<div className="bento_box_content">
							<Image
								src="/Assets/inconsciente-colectiva.png"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text text-black">
								<span>Inconsciente Colectivo, Historia Personal</span>
							</div>
						</div>
					</div>
					<div className="bento_box bg-[var(--zen-lightorange)]">
						<div className="bento_box_content">
							<Image
								src="/Assets/energia-vital.png"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text text-black">
								<span>Esencia Vital, Energía Sexual</span>
							</div>
						</div>
					</div>
					<div className="bento_box bg-[var(--zen-triadic)]">
						<div className="bento_box_content">
							<Image
								src="/Assets/parapsicologia.png"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text text-black">
								<span>Parapsicología, Realidad Extrasensorial</span>
							</div>
						</div>
					</div>
					<div className="bento_box bg-[var(--zen-triadic)]">
						<div className="bento_box_content">
							<Image
								src="/Assets/atencion-plena.png"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text text-black">
								<span>Manejo de la Atención, Atención Plena</span>
							</div>
						</div>
					</div>
				</div>

				<div className={`bento_overlay ${activeModal ? "active" : ""}`}></div>

				<div className="bento_modals">
					<div
						className={`bento_modal1 ${
							activeModal === "bento_modal1" ? "active" : ""
						}`}
					>
						<div className="bento_modal_close">X</div>
						<div className="bento_modal_container">
							<div className="bento_modal_content">
								<h2>Entorno, hábitat</h2>
								<p>
									<span className="underline mr-2">
										Un Retorno a Nuestro Primer Hogar.{" "}
									</span>{" "}
									La comprensión del entorno en lo macro: las condiciones
									externas (naturaleza, vínculos, hogar), y en lo micro: el
									cuerpo que cada Ser habita, es importante para experimentar la
									Unidad, una liberación de la sensación de separación que nos
									permita adentrarnos y profundizar en las relaciones que
									establecen las leyes naturales en el entorno donde
									desarrollamos nuestra vida.
								</p>
							</div>
						</div>
						<div className="bento_modal_image">
							<Image
								src="/Assets/entorno-big.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_modal_image"
							/>
						</div>
					</div>
					<div
						className={`bento_modal2 ${
							activeModal === ".bento_modal2" ? "active" : ""
						}`}
					>
						<div className="bento_modal_close">X</div>
						<div className="bento_modal_container">
							<div className="bento_modal_content">
								<h2>Consciencia Corporal, Manejo de la Atención</h2>
								<p>
									<span className="underline mr-2">
										Una Presencia en Libertad.{" "}
									</span>{" "}
									La atención va más allá de nuestro pensamiento y de nuestro
									movimiento, es la presencia de nuestro Ser que atestigua el
									constante cambio de los acontecimientos que transitamos. Para
									desarrollarla, es necesario aprender a relacionarnos con los
									demás desde la espontaneidad, reconocer la brújula de nuestra
									intuición para fluir con la vida y valorar nuestras
									sensaciones corporales en la toma de decisiones.
								</p>
							</div>
						</div>
						<div className="bento_modal_image">
							<Image
								src="/Assets/entorno-big.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_modal_image"
							/>
						</div>
					</div>
					<div className="bento_modal3">
						<div className="bento_modal_close">X</div>
						<div className="bento_modal_container">
							<div className="bento_modal_content">
								<h2>Alimentación, Nutrición</h2>
								<p>
									<span className="underline mr-2">
										Una Epigenética Armónica e Integral.{" "}
									</span>{" "}
									Nos estamos alimentando en todo momento por medio de los
									vínculos que forjamos, las actividades que realizamos, los
									alimentos que ingerimos, en fin, de alguna manera, cualquier
									excitación externa nos deja una impresión con su energía, la
									cual, genera un estímulo y una influencia en nuestro estado
									interno. En este sentido, es esencial saber identificar qué es
									lo que realmente nutre nuestro Ser y, por ende, qué favorece
									nuestro proceso de realización espiritual.
								</p>
							</div>
						</div>
						<div className="bento_modal_image">
							<Image
								src="/Assets/alimentacion.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_modal_image"
							/>
						</div>
					</div>
					<div className="bento_modal4">
						<div className="bento_modal_close">X</div>
						<div className="bento_modal_container">
							<div className="bento_modal_content">
								<h2>Psique, Pensamiento</h2>
								<p>
									<span className="underline mr-2">
										Un Psicoprograma de Libertad.{" "}
									</span>{" "}
									Las creencias, los marcos conceptuales, las experiencias y los
									aprendizajes de vida, constituyen el entendimiento de nuestra
									realidad y, en todos los casos, vivimos nuestras experiencias
									en función de estos “programas mentales”. Independientemente
									de estas ideas, mediante la aplicación de diversas técnicas,
									aspiramos a generar en nuestro estado mental, una actitud
									psíquica libre de todas las proyecciones disonantes y
									limitantes.
								</p>
							</div>
						</div>
						<div className="bento_modal_image">
							<Image
								src="/Assets/psique.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_modal_image"
							/>
						</div>
					</div>
					<div className="bento_modal5">
						<div className="bento_modal_close">X</div>
						<div className="bento_modal_container">
							<div className="bento_modal_content">
								<h2>Inconsciente Colectivo, Historia Personal</h2>
								<p>
									<span className="underline mr-2">
										El Encuentro con la Semilla Primordial.{" "}
									</span>{" "}
									La historia, la cultura, la educación y la religión del
									colectivo con el cual nos identificamos, crean memorias en
									nuestro inconsciente que determinan nuestras experiencias.
									Nuestro propósito es liberarnos de esas memorias y procurar
									que, desde nuestra auténtica naturaleza, exploremos la vida en
									plenitud, sin miedos ni prejuicios, libres de toda proyección
									emanada de nuestra historia personal y colectiva.
								</p>
							</div>
						</div>
						<div className="bento_modal_image">
							<Image
								src="/Assets/inconsciente-colectivo.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_modal_image"
							/>
						</div>
					</div>
					<div className="bento_modal6">
						<div className="bento_modal_close">X</div>
						<div className="bento_modal_container">
							<div className="bento_modal_content">
								<h2>Esencia Vital, Energía Sexual</h2>
								<p>
									<span className="underline mr-2">
										Activando el Vehículo de Luz.{" "}
									</span>{" "}
									A partir de diferentes técnicas de autoconocimiento,
									autosanación y autorrealización, buscamos que nuestra vida sea
									un proceso consciente que nos permita reconocer hacia dónde
									direccionar nuestra energía y en qué momento hacerlo. Y, de
									esta forma, lograr que nuestro recorrido hacia el “Último
									Viaje” sea ligero, sosegado y dichoso, viviéndolo desde la
									integración de nuestra esencia vital.
								</p>
							</div>
						</div>
						<div className="bento_modal_image">
							<Image
								src="/Assets/esencia-vital.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_modal_image"
							/>
						</div>
					</div>
					<div className="bento_modal7">
						<div className="bento_modal_close">X</div>
						<div className="bento_modal_container">
							<div className="bento_modal_content">
								<h2>Parapsicología, Realidad Extrasensorial</h2>
								<p>
									<span className="underline mr-2">
										Al Otro Lado del Espejo.{" "}
									</span>{" "}
									Nuestra realidad humana se desarrolla en diversas dimensiones
									como la emocional, la psíquica, la corporal, la social… Y,
									también, la energética y sutil, donde la intuición, la
									clarividencia, los desdoblamientos o las cualidades
									mediúmnicas se manifiestan y adquieren relevancia dentro de
									nuestro proceso de autoconocimiento. Tomar consciencia de esta
									dimensión e integrarla de forma natural, sin prejuicios, nos
									brinda la posibilidad de acceder a los dones místicos que
									habitan en nuestro interior.
								</p>
							</div>
						</div>
						<div className="bento_modal_image">
							<Image
								src="/Assets/parapsicologia.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_modal_image"
							/>
						</div>
					</div>
					<div className="bento_modal8">
						<div className="bento_modal_close">X</div>
						<div className="bento_modal_container">
							<div className="bento_modal_content">
								<h2>Manejo de la Atención, Atención Plena</h2>
								<p>
									<span className="underline mr-2">
										La Liberación de Nuestra Presencia.{" "}
									</span>{" "}
									La atención va más allá de nuestro pensamiento o de nuestro
									movimiento, es la presencia de nuestro Ser que atestigua el
									constante cambio de los acontecimientos que transitamos.
									Adquirir una Atención Plena, más allá de lo convencional, nos
									brinda la posibilidad de presenciar la Belleza que nos rodea y
									tomar consciencia del sincrodestino que todos compartimos.
								</p>
							</div>
						</div>
						<div className="bento_modal_image">
							<Image
								src="/Assets/atencion-plena.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_modal_image"
							/>
						</div>
					</div>
				</div>

				<div className="bento_intro">
					<div className="bento_intro_row">
						<h1>
							Ocho<span>Pilares</span>
							<span>De</span>
						</h1>
					</div>
					<div className="bento_intro_row">
						<h1>Transformación</h1>
					</div>
					<div className="bento_intro_row">
						<h1>Existencial</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PilaresSection;
