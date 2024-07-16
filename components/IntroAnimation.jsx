"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import CourseSection from "./CourseSection";

const IntroAnimation = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
			document
				.getElementById("courses-container")
				.scrollIntoView({ behavior: "smooth" });
		}, 10000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const tl = gsap.timeline();
		const text = document.querySelectorAll(".slogan p");
		const mediaQuery = window.matchMedia("(min-width: 1270px)");

		tl.to(text, {
			duration: 1.5,
			yPercent: -80,
			opacity: 1,
			ease: "power4.inOut",
			stagger: 0.2,
		}).to(".main-container", {
			duration: 1,
			yPercent: -100,
			ease: "power4.out",
		});

		if (mediaQuery.matches) {
			tl.to(
				".second-text",
				{
					duration: 1,
					xPercent: 60,
					ease: "power4.inOut",
				},
				"-=1.5"
			);
		}
		tl.to(".first-text", {
			duration: 2,
			opacity: 0,
			ease: "power4.out",
			delay: 2,
		})
			.to(
				".second-text",
				{
					duration: 2,
					opacity: 0,
					ease: "power4.out",
				},
				"<"
			)
			.to(
				[".third-text", ".logo"],
				{
					duration: 1,
					opacity: 1,
					ease: "power4.in",
				},
				"-=0.5"
			);
	}, []);

	return (
		<>
			<div className="main-container w-full h-screen bg-[var(--zen-yellow)] gSans fixed top-0 left-0 z-[4]"></div>
			<div className="hero-container w-full h-screen relative bg-yellow-700">
				<div className="slogan absolute z-[4] top-[60%] left-[5%] translate-y-[-50%] 2xl:text-[100px] xl:text-[60px] text-[40px] gSansLight font-bold text-[var(--zen-blue)] mix-blend-plus-lighter">
					<p className="first-text opacity-0">Tu Yo</p>
					<p className="first-text opacity-0">
						Del <span className="gSansMedium">Futuro</span>
					</p>
					<p className="second-text opacity-0">Te Espera</p>
					<p className="second-text opacity-0">
						En este <span className="gSansMedium">Presente</span>
					</p>
				</div>
				<div className="absolute z-[3] w-full h-full flex flex-col md:flex-row items-center justify-center 2xl:gap-[280px] xl:gap-[100px] gap-[10px]">
					<Image
						src="/Assets/Logo-Azul-Texto.webp"
						alt="logo"
						width={300}
						height={400}
						className="logo 2xl:w-[400px] md:w-[280px] w-[120px] opacity-0"
					/>
					<p className="third-text md:w-[700px] w-[360px] 2xl:text-[30px] text-[20px] text-center font-semibold text-[var(--zen-white)] p-[30px] opacity-0">
						La primera escuela completamente enfocada en la realización
						espiritual, basada en los ocho pilares primordiales de la flor
						dorada según la filosofía del tao y las escuelas ancestrales fang
						shi del yin-yang.
					</p>
				</div>
				<div className="w-full h-full absolute">
					<video autoPlay muted loop className="w-full h-full object-cover">
						<source src="Assets/background1.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div
				id="courses-container"
				className="courses-container w-full h-screen bg-slate-600"
			>
				<CourseSection />
			</div>
		</>
	);
};

export default IntroAnimation;
