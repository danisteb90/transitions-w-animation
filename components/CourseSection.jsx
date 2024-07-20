"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

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
		let timeAutoNext = 10000;
		let runAutoNext;
		// let runAutoNext = setTimeout(() => {
		// 	nextDom.click();
		// }, timeAutoNext);

		const showSlider = (type) => {
			let itemSlider = document.querySelectorAll(".carousel .list .item");
			let itemThumbnail = document.querySelectorAll(
				".carousel .thumbnail .item"
			);

			if (type === "next") {
				itemDom.appendChild(itemSlider[0]);
				thumbnailDom.appendChild(itemThumbnail[0]);
				carouselDom.classList.add("next");
			} else {
				let lastItemPosition = itemSlider.length - 1;
				itemDom.prepend(itemSlider[lastItemPosition]);
				thumbnailDom.prepend(itemThumbnail[lastItemPosition]);
				carouselDom.classList.add("prev");
			}

			clearTimeout(runTimeOut);
			runTimeOut = setTimeout(() => {
				carouselDom.classList.remove("next");
				carouselDom.classList.remove("prev");
			}, timeRunning);

			clearTimeout(runAutoNext);
			runAutoNext = setTimeout(() => {
				nextDom.click();
			}, timeAutoNext);
		};
	});

	return (
		<main id="main-course-container" className="main-course-container">
			{/* Carousel */}
			<div className="carousel">
				<h2 className="courses-title">Cursos</h2>
				<div className="list">
					<div className="item">
						<Image
							src="/Assets/meditacion.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="author">Cheng Tuan Li</div>
							<div className="title">DIPLOMADO EN</div>
							<div className="topic">MEDITACIÓN</div>
							<div className="des">
								Adipisicing pariatur amet consectetur ipsum ea. Magna incididunt
								nisi est aliqua excepteur enim voluptate occaecat ut consequat
								nisi. Veniam exercitation irure ullamco ullamco aute aliquip
								nostrud velit et minim. Sit voluptate deserunt consectetur
								eiusmod aute incididunt deserunt excepteur elit culpa tempor
								consectetur ut. Aliquip non dolor et sit excepteur ut dolor
								culpa sint deserunt irure sit anim dolore.
							</div>
							<div className="buttons">
								<Link href="/diplomado-meditacion" className="button">
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
							</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/ching1.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="author">Cheng Tuan Li</div>
							<div className="title">FORMACIÓN EN</div>
							<div className="topic">CHING I</div>
							<div className="des">
								Adipisicing pariatur amet consectetur ipsum ea. Magna incididunt
								nisi est aliqua excepteur enim voluptate occaecat ut consequat
								nisi. Veniam exercitation irure ullamco ullamco aute aliquip
								nostrud velit et minim. Sit voluptate deserunt consectetur
								eiusmod aute incididunt deserunt excepteur elit culpa tempor
								consectetur ut. Aliquip non dolor et sit excepteur ut dolor
								culpa sint deserunt irure sit anim dolore.
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
								<h2>Próximamente</h2>
							</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/viaje-koi.webp"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="author">Cheng Tuan Li</div>
							<div className="title">EL GAN VIAJE</div>
							<div className="topic">DEL PEZ KOI</div>
							<div className="des">
								Adipisicing pariatur amet consectetur ipsum ea. Magna incididunt
								nisi est aliqua excepteur enim voluptate occaecat ut consequat
								nisi. Veniam exercitation irure ullamco ullamco aute aliquip
								nostrud velit et minim. Sit voluptate deserunt consectetur
								eiusmod aute incididunt deserunt excepteur elit culpa tempor
								consectetur ut. Aliquip non dolor et sit excepteur ut dolor
								culpa sint deserunt irure sit anim dolore.
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
								<h2>Próximamente</h2>
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
							<div className="author">Cheng Tuan Li</div>
							<div className="title">DIMPLMADO EN</div>
							<div className="topic">SONOTERAPIA</div>
							<div className="des">
								Adipisicing pariatur amet consectetur ipsum ea. Magna incididunt
								nisi est aliqua excepteur enim voluptate occaecat ut consequat
								nisi. Veniam exercitation irure ullamco ullamco aute aliquip
								nostrud velit et minim. Sit voluptate deserunt consectetur
								eiusmod aute incididunt deserunt excepteur elit culpa tempor
								consectetur ut. Aliquip non dolor et sit excepteur ut dolor
								culpa sint deserunt irure sit anim dolore.
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
								<h2>Próximamente</h2>
							</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/sanacion.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="author">Cheng Tuan Li</div>
							<div className="title sanacion">MAESTRÍA EN</div>
							<div className="topic sanacion">SANACIÓN</div>
							<div className="des">
								Adipisicing pariatur amet consectetur ipsum ea. Magna incididunt
								nisi est aliqua excepteur enim voluptate occaecat ut consequat
								nisi. Veniam exercitation irure ullamco ullamco aute aliquip
								nostrud velit et minim. Sit voluptate deserunt consectetur
								eiusmod aute incididunt deserunt excepteur elit culpa tempor
								consectetur ut. Aliquip non dolor et sit excepteur ut dolor
								culpa sint deserunt irure sit anim dolore.
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
								<h2>Próximamente</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Thumbnail */}
				<div className="thumbnail">
					<div className="item">
						<Image
							src="/Assets/ching1.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title">Formación en I Ching,</div>
							<div className="des">Próximamente</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/viaje-koi.webp"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title">El Gran Viaje del Pez Koi</div>
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
							src="/Assets/sanacion.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title wText">Maestría en Sanación Espiritual</div>
							<div className="des wText">Próximamente</div>
						</div>
					</div>
					<div className="item">
						<Image
							src="/Assets/meditacion.avif"
							alt="back"
							width={1024}
							height={1024}
							className="img"
						/>
						<div className="content">
							<div className="title wText">Diplomado en Meditación</div>
							{/* <div className="des">Próximamente</div> */}
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
