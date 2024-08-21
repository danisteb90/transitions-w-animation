"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import CourseSection from "./CourseSection";
import Lenis from "lenis";
import dynamic from "next/dynamic";
import Footer from "./Footer";
import FooterMarquee from "./FooterMarquee";
import Header from "./Header";

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

	useEffect(() => {
		const timer = setTimeout(() => {
			document
				.getElementById("courses-container")
				.scrollIntoView({ behavior: "smooth" });
		}, 15000);

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
			// .to(
			// 	".first-text",
			// 	{
			// 		duration: 0.5,
			// 		color: "var(--zen-orange)",
			// 		ease: "power4.inOut",
			// 	},
			// 	"<"
			// )
			// .to(
			// 	".second-text",
			// 	{
			// 		duration: 0.5,
			// 		color: "var(--zen-orange)",
			// 		ease: "power4.inOut",
			// 	},
			// 	"<"
			// );
		}
		tl.to(".first-text", {
			duration: 1.6,
			opacity: 0,
			ease: "power4.out",
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
			<Header />
			<div className="main-container w-full h-screen bg-gradient-to-r from-[var(--zen-base)] to-neutral-300 gSans fixed top-0 left-0 z-[4]"></div>
			<div
				id="hero-container"
				className="hero-container w-full h-screen relative bg-[var(--zen-comp)]"
			>
				<div className="slogan absolute z-[4] top-[69%] left-[5%] translate-y-[-50%] 2xl:text-[140px] xl:text-[100px] text-[40px] gSansLight font-bold text-[var(--zen-lightorange)] mix-blend-color-dodge leading-tight">
					<p className="first-text opacity-0">Tu Yo</p>
					<p className="first-text opacity-0">
						Del <span className="gSansMedium">Futuro</span>
					</p>
					<p className="second-text opacity-0">Te Espera</p>
					<p className="second-text opacity-0">
						En este <span className="gSansMedium">Presente</span>
					</p>
				</div>
				<div className="gSans absolute z-[3] w-full h-full flex items-center justify-center 2xl:p-[120px] xl:p-[50px] p-[20px]">
					<div className="relative top-0 left-0 third-text w-full h-full flex flex-col md:flex-row items-center justify-center 2xl:gap-[30px] xl:gap-[15px] gap-[10px] bg-[#0000009f] backdrop-blur-lg rounded-xl opacity-0">
						<Image
							src="/Assets/Logo-Azul-Texto.webp"
							alt="logo"
							width={300}
							height={400}
							className="logo xl:w-[290px] w-[160px] opacity-0"
						/>
						<p className="third-text xl:w-[850px] w-[360px] xl:text-[38px] text-[26px] text-center font-semibold text-[var(--zen-white)] px-[60px] opacity-0">
							La primera Escuela de realización espiritual, basada en los ocho
							pilares de transformación existencial descritos por las Escuelas
							Ancestrales del Yin-Yang.
						</p>
					</div>
				</div>
				<div className="w-full h-full absolute">
					<video autoPlay muted loop className="w-full h-full object-cover">
						<source src="/Assets/Background3.webm" type="video/mp4" />
					</video>
				</div>
			</div>
			<div
				id="courses-container"
				className="courses-container w-full xl:h-screen h-auto"
			>
				<CourseSection />
			</div>
			<div id="pilares-container" className="w-full h-screen">
				<DynamicBentoBoxes />
			</div>
			<div
				id="footer-container"
				className="w-full h-[250px] bg-[var(--zen-pilaresanim)]"
			>
				<FooterMarquee />
				<Footer marginLeft="ml-[10px]" />
			</div>
		</>
	);
};

export default IntroAnimation;
