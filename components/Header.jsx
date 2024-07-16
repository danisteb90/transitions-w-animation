import Link from "next/link";
import TransitionLink from "./TransitionLink";

const Header = () => {
	return (
		<div className="w-full fixed top-0 left-0 flex items-center justify-center lg:gap-10 gap-5 p-5 z-[4] backdrop-blur-lg shadow-md">
			<TransitionLink href="/" label="Inicio" />
			<TransitionLink href="/about" label="Formaciones y Talleres" />
			<TransitionLink href="/contact" label="Contáctanos" />
		</div>
	);
};

export default Header;
