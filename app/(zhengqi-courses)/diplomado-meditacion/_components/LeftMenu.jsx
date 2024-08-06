"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const LeftMenu = () => {
	useEffect(() => {
		const inscriptionButton = document.querySelector(".inscription-button");

		let animationRight = gsap.to(".inscription-right", {
			paused: true,
			translateX: -8,
			duration: 0.5,
		});

		let animationLeft = gsap.to(".inscription-left", {
			paused: true,
			translateX: 8,
			duration: 0.5,
		});

		inscriptionButton.addEventListener("mouseenter", () =>
			animationRight.play()
		);
		inscriptionButton.addEventListener("mouseleave", () =>
			animationRight.reverse()
		);
		inscriptionButton.addEventListener("mouseenter", () =>
			animationLeft.play()
		);
		inscriptionButton.addEventListener("mouseleave", () =>
			animationLeft.reverse()
		);
	}, []);

	return (
		<section className="fixed xl:top-0 bottom-0 left-0 xl:w-[120px] w-full h-[100px] bg-[var(--zen-base)] xl:h-screen flex xl:flex-col justify-between items-center shadow-lg shadow-black px-3 z-[2]">
			<div className="w-full flex items-center justify-start xl:mt-5 mt-0">
				<Image
					src={"/Assets/Logo-Azul.png"}
					alt="logo"
					width={768}
					height={1024}
					className="xl:w-[80px] w-[50px]"
				/>
			</div>
			<div className="inscription-button gSansMedium xl:-rotate-90 xl:mb-[120px] xl:w-[380px] w-full flex items-center justify-center">
				<FaArrowRight className="inscription-right text-[var(--zen-white)] text-[16px] mr-1" />
				<a
					href="https://buy.stripe.com/14kcPefJ895B6xGeUU"
					target="_blank"
					className="text-[var(--zen-white)] xl:text-[26px] text-[16px] cursor-pointer hover:text-[var(--zen-lightorange)]"
				>
					Inscríbete Aquí
				</a>
				<FaArrowLeft className="inscription-left text-[var(--zen-white)] text-[16px] ml-1" />
			</div>
		</section>
	);
};

export default LeftMenu;
