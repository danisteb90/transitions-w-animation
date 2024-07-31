"use client";
import { useEffect } from "react";

const Header = () => {
	useEffect(() => {
		function moveMenu() {
			const menuBubble = document.querySelector(".menu-bubble");
			const navItems = document.querySelectorAll(".nav-li");

			function moveMenuBubble() {
				const activeItem = document.querySelector(".nav-li.active");
				if (activeItem) {
					const rect = activeItem.getBoundingClientRect();
					const navUlRect = activeItem.parentElement.getBoundingClientRect();
					menuBubble.style.left = rect.left - navUlRect.left + "px";
					menuBubble.style.width = rect.width + "px";
					menuBubble.style.opacity = "1";
				} else {
					menuBubble.style.opacity = "0";
				}
			}

			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.attributeName === "class") {
						moveMenuBubble();
					}
				});
			});

			navItems.forEach((item) => {
				observer.observe(item, {
					attributes: true,
				});
			});

			navItems.forEach((item) => {
				item.addEventListener("click", () => {
					navItems.forEach((el) => el.classList.remove("active"));
					item.classList.add("active");
				});
			});

			moveMenuBubble();
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
						<div className="menu-bubble"></div>
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
								Cursos y Formaciones
							</a>
						</li>
						<li className="nav-li">
							<a
								href="#pilares-container"
								className="nav-link"
								onClick={(e) => handleNavigation(e, "pilares-container")}
							>
								Pilares
							</a>
						</li>
						<li className="nav-li">
							<a
								href="#footer-container"
								className="nav-link"
								onClick={(e) => handleNavigation(e, "footer-container")}
							>
								Contácto
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
