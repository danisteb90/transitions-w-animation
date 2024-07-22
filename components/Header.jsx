const Header = () => {
	return (
		<div className="w-full fixed top-0 left-0 flex items-center justify-center lg:gap-10 gap-5 p-4 z-[4] backdrop-blur-lg shadow-md">
			<button className="gSansMedium text-[18px] text-[var(--zen-analog)] hover:text-[var(--zen-analog2)]">
				Inicio
			</button>
			<button className="gSansMedium text-[18px] text-[var(--zen-analog)] hover:text-[var(--zen-analog2)]">
				Contáctanos
			</button>
		</div>
	);
};

export default Header;
