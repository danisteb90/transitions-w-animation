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

		gsap.timeline({
			scrollTrigger: {
				trigger: ".bento",
				start: "-30% center",
				end: "bottom center",
				// markers: true,
				onEnter: init,
				once: true,
			},
		});

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
			bentoBoxes.forEach((box) => {
				box.addEventListener("mouseenter", (e) => {
					const dataSpan = e.target.children[0].children[0];

					e.target.classList.add("active");
					animateInnerText(dataSpan);
				});
			});
			bentoBoxes.forEach((box) => {
				box.addEventListener("mouseleave", (e) => {
					e.target.classList.remove("active");
				});
			});
		};
	}, []);

	return (
		<div className="app">
			<div className="bento" id="bento">
				<div className="bento_container">
					<Link
						href="/entorno-habitat"
						className="bento_box bg-[var(--zen-base)]"
					>
						<div>
							<Image
								src="/Assets/sanacion.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text">
								<span>Entorno, Hábitat</span>
							</div>
						</div>
					</Link>
					<Link
						href="/entorno-habitat"
						className="bento_box bg-[var(--zen-comp)]"
					>
						<div>
							<Image
								src="/Assets/ching1.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text">
								<span>Consciencia Corporal, Manejo de Atención</span>
							</div>
						</div>
					</Link>
					<Link
						href="/entorno-habitat"
						className="bento_box bg-[var(--zen-triadic)]"
					>
						<div>
							<Image
								src="/Assets/meditacion.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text text-black">
								<span>Alimetación Nutrición</span>
							</div>
						</div>
					</Link>
					<Link
						href="/entorno-habitat"
						className="bento_box bg-[var(--zen-analog2)]"
					>
						<div>
							<Image
								src="/Assets/sonoterapia.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text text-black">
								<span>Psique, Pensamiento</span>
							</div>
						</div>
					</Link>
					<Link
						href="/entorno-habitat"
						className="bento_box bg-[var(--zen-analog)]"
					>
						<div>
							<Image
								src="/Assets/meditacion.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text text-black">
								<span>Inconsciente Colectivo, Historia Personal</span>
							</div>
						</div>
					</Link>
					<Link
						href="/entorno-habitat"
						className="bento_box bg-[var(--zen-comp)]"
					>
						<div>
							<Image
								src="/Assets/ching1.avif"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text text-black">
								<span>Escencia Vital, Energía Sexual</span>
							</div>
						</div>
					</Link>
					<Link
						href="/entorno-habitat"
						className="bento_box bg-[var(--zen-triadic)]"
					>
						<div>
							<Image
								src="/Assets/viaje-koi.webp"
								alt="box-image"
								width={500}
								height={500}
								className="box_image"
							/>
							<div className="bento_box_text text-black">
								<span>Parapsicología, Realidad Extrasensorial</span>
							</div>
						</div>
					</Link>
				</div>

				<div className="bento_intro">
					<div className="bento_intro_row">
						<h1>
							Pilares <span>De</span>
							<span>La</span>
						</h1>
					</div>
					<div className="bento_intro_row">
						<h1>Flor</h1>
					</div>
					<div className="bento_intro_row">
						<h1>Dorada</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PilaresSection;
