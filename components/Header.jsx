"use client";
import { useEffect } from "react";

const Header = () => {
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
							<a
								href="#hero-container"
								className="nav-link"
								onClick={(e) => handleNavigation(e, "hero-container")}
							>
								Inicio
							</a>
						</li>
						<li className="nav-li">
							<a
								href="#courses-container"
								className="nav-link"
								onClick={(e) => handleNavigation(e, "courses-container")}
							>
								Formaciones y Talleres
							</a>
						</li>
						<li className="nav-li">
							<a
								href="#pilares-container"
								className="nav-link"
								onClick={(e) => handleNavigation(e, "pilares-container")}
							>
								La Escuela
							</a>
						</li>
						<li className="nav-li">
							<a
								href="#footer-container"
								className="nav-link"
								onClick={(e) => handleNavigation(e, "footer-container")}
							>
								Contáctanos
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
