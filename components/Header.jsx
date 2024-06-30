import Link from "next/link";
import TransitionLink from "./TransitionLink";

const Header = () => {
	return (
		<div className="w-full flex items-center gap-10 p-10">
			<TransitionLink href="/" label="Inicio" />
			<TransitionLink href="/about" label="Nosotros" />
			<TransitionLink href="/contact" label="Contacto" />
		</div>
	);
};

export default Header;
