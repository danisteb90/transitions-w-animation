const ContactButton = () => {
	return (
		<div className="button-container fixed z-[1] top-[20px] right-[20px] xl:w-[170px] w-[140px] h-[50px] bg-[var(--zen-base)] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[var(--zen-lightorange)] transition-all duration-600">
			<a
				href="https://wa.me/34684408835"
				target="_blank"
				className="gSans xl:text-[20px] text-[16px] text-[var(--zen-white)]"
			>
				Contáctanos
			</a>
		</div>
	);
};

export default ContactButton;
