"use client";
import gsap from "gsap";
import { useEffect } from "react";

const IntroAnimation = () => {
	useEffect(() => {
		const tl = gsap.timeline();
		const text = document.querySelectorAll("p");
		const mediaQuery = window.matchMedia("(min-width: 1270px)");

		tl.to(text, {
			duration: 1,
			yPercent: -80,
			ease: "power4.out",
			stagger: 0.2,
		})
			.to(".second-container", {
				duration: 0.5,
				opacity: 0,
			})
			.to(".main-container", {
				duration: 1,
				yPercent: -100,
				ease: "power4.out",
			});

		if (mediaQuery.matches) {
			tl.to(
				".second-text",
				{
					duration: 1,
					xPercent: -15,
					ease: "power4.inOut",
				},
				"-=1.5"
			);
		}
	}, []);

	return (
		<>
			<div className="main-container w-full h-screen bg-[var(--zen-yellow)] gSans fixed top-0 left-0 z-10"></div>
			<p className="w-full text-left xl:pl-52 pl-10 fixed bottom-[55%] lg:bottom-[55%] left-[50%] translate-x-[-50%] translate-y-[50%] z-[11] gSansLight text-[50px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] text-[var(--zen-blue)] font-bold mix-blend-plus-lighter">
				El Bello
			</p>
			<div className="second-container fixed bg-[var(--zen-yellow)] bottom-[55%] lg:bottom-[55%] left-[50%] translate-x-[-50%] translate-y-[50%] z-[12] w-full lg:h-[120px] h-[80px]"></div>
			<p className="w-full text-left xl:pl-52 pl-10 fixed bottom-[45%] lg:bottom-[40%] left-[50%] translate-x-[-50%] translate-y-[50%] z-[13] gSansLight text-[50px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] text-[var(--zen-blue)] font-bold mix-blend-plus-lighter">
				Arte de <span className="gSansMedium">Vivir</span>
			</p>
			<div className="second-container fixed bg-[var(--zen-yellow)] bottom-[45%] lg:bottom-[40%] left-[50%] translate-x-[-50%] translate-y-[50%] z-[14] w-full lg:h-[120px] h-[80px]"></div>
			<p className="second-text w-full text-left xl:pl-52 pl-10 fixed bottom-[35%] lg:bottom-[25%] left-[50%] translate-x-[-50%] translate-y-[50%] z-[15] gSansLight text-[50px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] text-[var(--zen-blue)] font-bold mix-blend-plus-lighter">
				Para un
			</p>
			<div className="second-container fixed bg-[var(--zen-yellow)] bottom-[35%] lg:bottom-[25%] left-[50%] translate-x-[-50%] translate-y-[50%] z-[16] w-full lg:h-[120px] h-[80px]"></div>
			<p className="second-text w-full text-left xl:pl-52 pl-10 fixed bottom-[25%] lg:bottom-[10%] left-[50%] translate-x-[-50%] translate-y-[50%] z-[17] gSansLight text-[50px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] text-[var(--zen-blue)] font-bold mix-blend-plus-lighter">
				Buen <span className="gSansMedium">Partir</span>
			</p>
			<div className="second-container fixed bg-[var(--zen-yellow)] bottom-[25%] lg:bottom-[10%] left-[50%] translate-x-[-50%] translate-y-[50%] z-[18] w-full lg:h-[120px] h-[80px]"></div>
			<div className="w-full h-screen fixed top-0 left-0 z-[9]">
				<video autoPlay muted loop className="w-full h-full object-cover">
					<source src="Assets/background1.mp4" type="video/mp4" />
				</video>
			</div>
		</>
	);
};

export default IntroAnimation;
