const InfoModal = () => {
	return (
		<>
			<div className="absolute xl:bottom-[10px] bottom-[-30px] left-[50%] translate-x-[-50%] flex items-center justify-center z-[1]">
				<div className="bg-[var(--zen-analog2)] p-[20px] rounded-lg shadow-lg flex xl:flex-row flex-col items-center justify-around xl:w-[600px] w-[300px] xl:h-[100px] h-[190px]">
					<h2 className="gSansMedium text-[26px] font-bold text-center">
						¿Aún no te has inscrito?
					</h2>
					<div className="xl:w-[170px] w-[140px] xl:h-[50px] h-[80px] xl:p-0 px-[35px] bg-[var(--zen-base)] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[var(--zen-lightorange)] transition-all duration-600 z-[2]">
						<a
							href="https://buy.stripe.com/6oE5mM54u81xcW45kl"
							target="_blank"
							className="gSans xl:text-[20px] text-[13px] text-center text-[var(--zen-white)]"
						>
							Empieza Ahora
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default InfoModal;
