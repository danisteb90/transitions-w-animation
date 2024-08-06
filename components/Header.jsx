"use client";
import { useEffect, useState } from "react";

import { IoHomeSharp, IoBook } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Header = () => {
	const [isMediaQuery, setIsMediaQuery] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 1270px)");
		const handleMediaQuery = (e) => {
			setIsMediaQuery(e.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQuery);
		handleMediaQuery(mediaQuery);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQuery);
		};
	}, []);

	useEffect(() => {
		function moveMenu() {
			const navItems = document.querySelectorAll(".nav-li");

			navItems.forEach((item) => {
				item.addEventListener("click", () => {
					navItems.forEach((el) => el.classList.remove("active"));
					item.classList.add("active");
				});
			});
		}
		moveMenu();
	}, []);
	// Smooth Scroll
	const handleNavigation = (e, targetId) => {
		e.preventDefault();
		document.getElementById(targetId).scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<div className="nav-container">
			<div className="nav">
				<div className="nav-menu">
					<ul className="nav-ul">
						<li className="nav-li">
							{isMediaQuery ? (
								<a
									href="#hero-container"
									className="nav-link"
									onClick={(e) => handleNavigation(e, "hero-container")}
								>
									Inicio
								</a>
							) : (
								<div className="icon-container">
									<IoHomeSharp
										className="nav-icon"
										onClick={(e) => handleNavigation(e, "hero-container")}
									/>
								</div>
							)}
						</li>
						<li className="nav-li">
							{isMediaQuery ? (
								<a
									href="#courses-container"
									className="nav-link"
									onClick={(e) => handleNavigation(e, "courses-container")}
								>
									Formaciones y Talleres
								</a>
							) : (
								<div className="icon-container">
									<IoBook
										className="nav-icon"
										onClick={(e) => handleNavigation(e, "courses-container")}
									/>
								</div>
							)}
						</li>
						<li className="nav-li">
							{isMediaQuery ? (
								<a
									href="#pilares-container"
									className="nav-link"
									onClick={(e) => handleNavigation(e, "pilares-container")}
								>
									La Escuela
								</a>
							) : (
								<div className="icon-container">
									<IoIosSchool
										className="nav-icon"
										onClick={(e) => handleNavigation(e, "pilares-container")}
									/>
								</div>
							)}
						</li>
						<li className="nav-li">
							{isMediaQuery ? (
								<a
									href="#footer-container"
									className="nav-link"
									onClick={(e) => handleNavigation(e, "footer-container")}
								>
									Contáctanos
								</a>
							) : (
								<div className="icon-container">
									<FaPhone
										className="nav-icon"
										onClick={(e) => handleNavigation(e, "footer-container")}
									/>
								</div>
							)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
