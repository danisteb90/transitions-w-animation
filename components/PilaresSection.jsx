"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);

const PilaresSection = () => {
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
					// markers: true,
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
						//Borra el elemento intro de la escena
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
					const modal = document.querySelector(`.bento_modal${index + 1}`);
					if (modal) {
						modal.classList.add("active");
					}
				});
			});

			const closeModal = document.querySelectorAll(".bento_modal_close");
			closeModal.forEach((close) => {
				close.addEventListener("click", () => {
					const modal = close.parentElement;
					modal.classList.remove("active");
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
								src="/Assets/entorno.avif"
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
								src="/Assets/consciencia-corporal.avif"
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
								src="/Assets/alimentacion.avif"
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
								src="/Assets/psique.avif"
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
								src="/Assets/inconsciente-colectivo.avif"
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
								src="/Assets/esencia-vital.avif"
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
								src="/Assets/parapsicologia.avif"
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
								src="/Assets/atencion-plena.avif"
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

				<div className="bento_modals">
					<div className="bento_modal1">
						<div className="bento_modal_close">X</div>
						<p>Modal 1</p>
					</div>
					<div className="bento_modal2">
						<div className="bento_modal_close">X</div>
						<p>Modal 2</p>
					</div>
					<div className="bento_modal3">
						<div className="bento_modal_close">X</div>
						<p>Modal 3</p>
					</div>
					<div className="bento_modal4">
						<div className="bento_modal_close">X</div>
						<p>Modal 4</p>
					</div>
					<div className="bento_modal5">
						<div className="bento_modal_close">X</div>
						<p>Modal 5</p>
					</div>
					<div className="bento_modal6">
						<div className="bento_modal_close">X</div>
						<p>Modal 6</p>
					</div>
					<div className="bento_modal7">
						<div className="bento_modal_close">X</div>
						<p>Modal 7</p>
					</div>
					<div className="bento_modal8">
						<div className="bento_modal_close">X</div>
						<p>Modal 8</p>
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
