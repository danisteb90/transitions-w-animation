"use client";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = ({
	background = "bg-[var(--zen-pilaresanim)]",
	marginLeft = "ml-[125px]",
}) => {
	return (
		<>
			<section
				className={`relative w-full h-full flex items-start justify-end pt-[50px] ${background} overflow-hidden z-[2]`}
			>
				<div className="relative xl:bottom-0 bottom-[52px] w-[315px] xl:w-[450px] flex flex-col items-start justify-start gap-2 ">
					<div className="flex items-center justify-center">
						<a
							href="https://wa.me/34684408835"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center"
						>
							<FaWhatsapp className="text-white w-[30px] h-[30px] mr-3" />
							<p className="gSans text-[20px] 2xl:text-[30px] text-[var(--zen-white)]">
								+34 684 408 835
							</p>
						</a>
					</div>
					<div className="flex items-center justify-center">
						<a
							href="mailto:teconchen@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center"
						>
							<MdEmail className="text-white w-[30px] h-[30px] mr-3" />
							<p className="gSans text-[20px] 2xl:text-[30px] text-[var(--zen-white)]">
								teconchen@gmail.com
							</p>
						</a>
					</div>
				</div>
				<div
					className={`absolute xl:bottom-0 bottom-[140px] left-0 w-full h-[50px] text-[var(--zen-white)] xl:text-[16px] text-[11px] ${marginLeft} xl:z-0 xl:p-0 p-[15px]`}
				>
					<p
						className="italic text-[var(--zen-pilaresanim)] hover:underline hover:cursor-pointer"
						onClick={() => window.open("/politica-cookies", "_blank")}
					>
						Este sitio web no utiliza cookies.
					</p>
					<p className="italic">
						Integra Creative Agency en colaboración con Tao Mentoring Digital
						Lab © Todos los derechos reservados 2024.
					</p>
				</div>
			</section>
		</>
	);
};

export default Footer;
