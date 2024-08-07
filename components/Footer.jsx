import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = ({
	background = "bg-[var(--zen-pilaresanim)]",
	marginLeft = "ml-[120px]",
}) => {
	return (
		<>
			<section
				className={`relative w-full h-full flex items-start justify-end pt-[50px] ${background} overflow-hidden`}
			>
				<div className="w-[480px] 2xl:w-[650px] flex flex-col items-start justify-start gap-2">
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
					className={`absolute bottom-0 left-0 w-full h-[50px] text-[var(--zen-white)] text-sm ${marginLeft}`}
				>
					<p className="pt-3 pl-3 italic">
						Integra Creative Agency en colaboración con Tao Mentoring Digital
						Lab © Todos los derechos reservados 2024
					</p>
				</div>
			</section>
		</>
	);
};

export default Footer;
