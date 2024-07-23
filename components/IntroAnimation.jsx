"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import CourseSection from "./CourseSection";
import Lenis from "lenis";
import dynamic from "next/dynamic";

const DynamicBentoBoxes = dynamic(() => import("./PilaresSection.jsx"), {
	ssr: false,
});

const IntroAnimation = () => {
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		document
	// 			.getElementById("courses-container")
	// 			.scrollIntoView({ behavior: "smooth" });
	// 	}, 10000);

	// 	return () => clearTimeout(timer);
	// }, []);

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
			)
			.to(".slogan", {
				display: "none",
			});
	}, []);

	return (
		<>
			<div className="main-container w-full h-screen bg-[var(--zen-analog)] gSans fixed top-0 left-0 z-[4]"></div>
			<div className="hero-container w-full h-screen relative bg-[var(--zen-comp)]">
				<div className="slogan absolute z-[4] top-[65%] left-[5%] translate-y-[-50%] 2xl:text-[100px] xl:text-[80px] text-[40px] gSansLight font-bold text-[var(--zen-analog)] mix-blend-plus-lighter">
					<p className="first-text opacity-0">Tu Yo</p>
					<p className="first-text opacity-0">
						Del <span className="gSansMedium">Futuro</span>
					</p>
					<p className="second-text opacity-0">Te Espera</p>
					<p className="second-text opacity-0">
						En este <span className="gSansMedium">Presente</span>
					</p>
				</div>
				<div className="gSans absolute z-[3] w-full h-full flex items-center justify-center 2xl:p-[80px] xl:p-[50px] p-[20px]">
					<div className="relative top-0 left-0 third-text w-full h-full flex flex-col md:flex-row items-center justify-center 2xl:gap-[80px] xl:gap-[100px] gap-[10px] bg-[#00000080] backdrop-blur-sm rounded-xl opacity-0">
						<Image
							src="/Assets/Logo-Azul-Texto.webp"
							alt="logo"
							width={300}
							height={400}
							className="logo 2xl:w-[250px] md:w-[200px] w-[120px] opacity-0"
						/>
						<p className="third-text md:w-[700px] w-[360px] 2xl:text-[26px] text-[18px] text-center font-semibold text-[var(--zen-white)] px-[60px] opacity-0">
							La primera escuela completamente enfocada en la realización
							espiritual, basada en los ocho pilares primordiales de la flor
							dorada según la filosofía del tao y las escuelas ancestrales fang
							shi del yin-yang.
						</p>
					</div>
				</div>
				<div className="w-full h-full absolute">
					<video autoPlay muted loop className="w-full h-full object-cover">
						<source src="/Assets/background1.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div id="courses-container" className="courses-container w-full h-screen">
				<CourseSection />
			</div>
			<div className="w-full h-screen">
				<DynamicBentoBoxes />
			</div>
			<div className="w-full h-[500px] bg-[var(--zen-comp)]"></div>
		</>
	);
};

export default IntroAnimation;
