"use client";
import gsap from "gsap";
import { useEffect } from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
});

const DHeroSection = () => {
	useEffect(() => {
		const button = document.querySelector(".hero-button-container");

		let animation = gsap.to(".hero-arrow-right", {
			paused: true,
			translateX: 12,
			duration: 0.3,
		});

		button.addEventListener("mouseenter", () => animation.play());
		button.addEventListener("mouseleave", () => animation.reverse());
	}, []);
	return (
		<section className="w-full h-full bg-[var(--zen-analog2)] flex items-center justify-center">
			<div className="w-full h-full ">
				<Image
					src="/Assets/diplomado-bg2.webp"
					alt="diplomado-bg"
					width={2048}
					height={2048}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute top-[50%] translate-y-[-50%] md:right-[4%] right-[50%] md:translate-x-0 translate-x-[50%] bg-[#000000ab] xl:w-6/12 w-5/6 xl:h-[65%] h-[80%] rounded-2xl backdrop-blur-lg z-0 md:p-8 p-4">
				<h2 className="gSansMedium 2xl:text-[36px] md:text-[30px] text-[20px] text-[var(--zen-white)] font-bold">
					DIPLOMADO EN MEDITACIÓN
				</h2>
				<h3 className="gSans 2xl:text-[28px] xl:text-[20px] text-[16px] text-[var(--zen-white)] font-bold 2xl:mb-6 mb-4">
					Formación en línea para Instructores en Meditación
				</h3>
				<div className={`${lato.className} flex flex-col 2xl:gap-7 gap-5`}>
					<p className="2xl:text-[19px] md:text-[16px] text-[14px] text-[var(--zen-white)]">
						Te ofrecemos un programa de formación holística que potencia tu
						desarrollo personal y te brinda la posibilidad de guiar a otr@s en
						su proceso de autosuperación a través del Bello Arte de la
						Meditación.
					</p>
					<p className="2xl:text-[19px] md:text-[16px] text-[14px] text-[var(--zen-white)]">
						Mediante una combinación de teoría, ejercicios prácticos y el
						desarrollo de un programa de autocuidado, experimentarás una
						formación integral, reflexiva y contemplativa. Este enfoque te
						proporcionará las herramientas clave para enriquecer tu camino de
						realización espiritual y contribuir de manera valiosa a la evolución
						de otr@s.
					</p>
					<p className="2xl:text-[19px] md:text-[16px] text-[14px] text-[var(--zen-white)]">
						¡Inscríbete hoy y comienza el Camino hacia Tu Auto Maestría!
					</p>
				</div>
				<div className="hero-button-container gSans xl:mt-8 mt-4 2xl:w-[240px] w-[180px] h-[60px] bg-[var(--zen-white)] rounded-xl flex items-center justify-start cursor-pointer pl-3 gap-3">
					<a
						href="https://buy.stripe.com/14kcPefJ895B6xGeUU"
						target="_blank"
						className="gSans 2xl:text-[22px] text-[16px] text-[var(--zen-pilaresanim)]"
					>
						Inscríbete Ahora
					</a>
					<FaArrowRight className="hero-arrow-right text-[var(--zen-pilaresanim)] 2xl:text-[20px] text-[16px]" />
				</div>
			</div>
		</section>
	);
};

export default DHeroSection;
