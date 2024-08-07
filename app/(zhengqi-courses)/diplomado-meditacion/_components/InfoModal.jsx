const InfoModal = () => {
	return (
		<>
			<div className="absolute bottom-[10px] left-[50%] translate-x-[-50%] flex items-center justify-center z-[3]">
				<div className="bg-[var(--zen-analog2)] p-[20px] rounded-lg shadow-lg flex items-center justify-around w-[600px] h-[100px]">
					<h2 className="gSansMedium text-[26px] font-bold text-center">
						¿Aún no te has inscrito?
					</h2>
					<div className="xl:w-[170px] w-[140px] h-[50px] bg-[var(--zen-base)] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[var(--zen-lightorange)] transition-all duration-600 z-[2]">
						<a
							href="https://buy.stripe.com/14kcPefJ895B6xGeUU"
							target="_blank"
							className="gSans xl:text-[20px] text-[16px] text-[var(--zen-white)]"
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
