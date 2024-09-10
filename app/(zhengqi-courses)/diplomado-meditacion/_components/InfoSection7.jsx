import { TiArrowRightThick } from "react-icons/ti";
import { Lato } from "next/font/google";

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
});

const InfoSection7 = () => {
	return (
		<div
			className={`${lato.className} w-full h-full flex flex-col xl:ml-[75px] ml-0 mt-[-20px]`}
		>
			<h2 className="gSansMedium font-bold w-full mb-[40px] flex items-center justify-center text-center xl:text-[40px] text-[24px] text-[var(--zen-analog)]">
				¿Listo para Comenzar?
			</h2>
			<div className="flex flex-col w-full items-center justify-center">
				<div className="xl:w-[850px] w-[320px] h-auto bg-gradient-to-b from-[var(--zen-analog)] to-[var(--zen-analog2)] rounded-3xl shadow-lg shadow-[var(--zen-pilaresanim)] p-[40px] flex flex-col items-center justify-center">
					<h2 className="gSansMedium xl:text-[40px] text-[20px] text-[var(--zen-white)] mb-[30px] font-bold">
						Diplomado en Meditación
					</h2>
					<h3 className="xl:text-[30px] text-[18px] text-[var(--zen-white)] font-bold mb-[30px]">
						Formación en línea para Instructores en Meditación
					</h3>
					<div className="w-full flex items-center justify-center gap-[10px] pb-[12px] mb-[16px] border-b-2 border-[var(--zen-white)]">
						<TiArrowRightThick className="w-1/12 text-[var(--zen-white)] xl:text-[45px] text-[35px]" />
						<p className="w-11/12 text-[var(--zen-white)] xl:text-[21px] text-[14px]">
							66 horas de formación teórico-práctica online mediante clases en
							directo vía Zoom.
						</p>
					</div>
					<div className="w-full flex items-center justify-center gap-[10px] pb-[12px] mb-[16px] border-b-2 border-[var(--zen-white)]">
						<TiArrowRightThick className="w-1/12 text-[var(--zen-white)] xl:text-[45px] text-[35px]" />
						<p className="w-11/12 text-[var(--zen-white)] xl:text-[21px] text-[14px]">
							34 horas de formación presencial (opcional para España) en dos
							Seminarios Intensivos de un día y un Retiro de Consolidación de
							fin de semana al término del Diplomado.
						</p>
					</div>
					<div className="w-full flex items-center justify-center gap-[10px] pb-[12px] mb-[16px] border-b-2 border-[var(--zen-white)]">
						<TiArrowRightThick className="w-1/12 text-[var(--zen-white)] xl:text-[45px] text-[35px]" />
						<p className="w-11/12 text-[var(--zen-white)] xl:text-[21px] text-[14px]">
							Tutoría inicial individual de bienvenida.
						</p>
					</div>
					<div className="w-full flex items-center justify-center gap-[10px] pb-[12px] mb-[16px] border-b-2 border-[var(--zen-white)]">
						<TiArrowRightThick className="w-1/12 text-[var(--zen-white)] xl:text-[45px] text-[35px]" />
						<p className="w-11/12 text-[var(--zen-white)] xl:text-[21px] text-[14px]">
							Acompañamiento grupal vía Telegram durante el Diplomado más 3
							meses gratis adicionales al término del mismo.
						</p>
					</div>
					<div className="w-full flex items-center justify-center gap-[10px] pb-[12px] mb-[16px] border-b-2 border-[var(--zen-white)]">
						<TiArrowRightThick className="w-1/12 text-[var(--zen-white)] xl:text-[45px] text-[35px]" />
						<p className="w-11/12 text-[var(--zen-white)] xl:text-[21px] text-[14px]">
							Material digital complementario.
						</p>
					</div>
					<div className="w-full flex items-center justify-center gap-[10px] pb-[12px] mb-[16px] border-b-2 border-[var(--zen-white)]">
						<TiArrowRightThick className="w-1/12 text-[var(--zen-white)] xl:text-[45px] text-[35px]" />
						<p className="w-11/12 text-[var(--zen-white)] xl:text-[21px] text-[14px]">
							Asesorías individuales complementarias (sesiones personalizadas de
							Life Coaching) a precio especial.
						</p>
					</div>
					<div className="w-full flex items-center justify-center gap-[10px] pb-[12px] mb-[16px] border-b-2 border-[var(--zen-white)]">
						<TiArrowRightThick className="w-1/12 text-[var(--zen-white)] xl:text-[45px] text-[35px]" />
						<p className="w-11/12 text-[var(--zen-white)] xl:text-[21px] text-[14px]">
							Aval de la Escuela de Libertad.
						</p>
					</div>
					<p className="text-[var(--zen-white)] xl:text-[21px] text-[14px] mb-[20px]">
						De esta manera nos aseguramos de que todos los contenidos, técnicas
						y herramientas entregadas durante el Diplomado en Meditación se
						quedan contig@ y puedas entregarlos a tus futuros Alumn@s con la
						seguridad y la claridad que tu liderazgo requiere.
					</p>
					<p className="text-[var(--zen-white)] xl:text-[24px] text-[16px] font-bold italic mb-[20px]">
						¡No esperes más!
					</p>
					<p className="gSansMedium font-bold w-full xl:text-[55px] text-[24px] flex items-center justify-center xl:flex-row flex-col xl:tracking-wider text-[var(--zen-white)] text-center xl:mb-[40px] mb-[18px]">
						Todo esto por tan solo{"  "}
						<span className="gSansMedium font-bold text-[var(--zen-base)] xl:ml-[4px] ml-[2px]">
							{" "}
							490€
						</span>
					</p>
					<div className="xl:w-[190px] w-[140px] h-[60px] bg-[var(--zen-base)] rounded-xl flex items-center justify-center xl:flex-row flex-col cursor-pointer hover:bg-[var(--zen-lightorange)] transition-all duration-600 z-[2]">
						<a
							href="https://buy.stripe.com/6oE5mM54u81xcW45kl"
							target="_blank"
							className="gSans xl:text-[24px] text-[16px] text-[var(--zen-white)]"
						>
							Inscríbete Aquí
						</a>
					</div>
					<div className="w-full text-center xl:text-[40px] text-[20px] text-[var(--zen-white)] font-bold xl:mt-[45px] mt-[20px]">
						Para facilidades de pago:{" "}
						<a
							href="mailto:teconchen@gmail.com"
							target="_blank"
							className="underline text-[var(--zen-base)]"
						>
							Escríbenos
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoSection7;
