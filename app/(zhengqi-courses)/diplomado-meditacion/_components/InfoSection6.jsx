"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Lato } from "next/font/google";

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
});

const InfoSection6 = () => {
	return (
		<section className={`${lato.className} py-12 xl:ml-[120px] ml-0`}>
			<h2 className="gSansMedium font-bold w-full mb-[20px] flex items-center justify-center text-center xl:text-[40px] text-[24px] text-[var(--zen-analog)]">
				Lo que dicen nuestros Alumn@s
			</h2>
			<div className="slider-container p-[50px]">
				<Swiper
					navigation
					modules={[Autoplay, Navigation, Pagination]}
					className="xl:h-[400px] h-[600px] w-full text-[var(--zen-base)] text-[20px] font-bold"
					slidesPerView={2}
					spaceBetween={50}
					autoplay={{ delay: 10000, disableOnInteraction: false }}
					loop={true}
					breakpoints={{
						350: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
					}}
				>
					<SwiperSlide>
						<div className="flex h-full w-full items-center justify-center bg-slate-300 rounded-2xl text-[var(--zen-white)] p-[40px] ">
							<div className="relative w-full h-full flex flex-col items-start justify-center bg-gradient-to-r from-sky-600 to-[var(--zen-analog)] rounded-2xl px-[15px] py-[30px] shadow-md shadow-[var(--zen-pilaresanim)]">
								<p className="xl:text-[16px] text-[13px] text-[var(--zen-white)] xl:text-left text-center xl:mb-[30px] mb-[10px] font-medium">
									Conocí a Chen Tuan Li hace un par de años buscando sobre
									taoísmo. Me adentré a descubrir lo que su mentoría entrega, y
									ha sido muy liberador. Respetando los procesos de cada un@
									pero manteniendo la franqueza y, a la vez, el afecto necesario
									para un@ poder dar saltos a conocerse-liberarse y poder fluir
									más livianamente. Es completamente recomendable, desde las
									prácticas de meditación, los talleres y, sobre todo, los
									retiros. ¡Se agradece siempre!
								</p>
								<div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
									<FaQuoteLeft className="text-[var(--zen-pilaresanim)] xl:text-[100px] text-[50px] mr-[10px] opacity-20" />
								</div>
								<h2 className="text-[var(--zen-white)] xl:text-left text-center flex items-center justify-center">
									Mariana L. (Chile)
								</h2>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex h-full w-full items-center justify-center bg-slate-300 rounded-2xl text-[var(--zen-white)] p-[40px]">
							<div className="relative w-full h-full flex flex-col items-start justify-center bg-gradient-to-r from-cyan-600 to-[var(--zen-analog2)] rounded-2xl px-[15px] py-[30px] shadow-md shadow-[var(--zen-pilaresanim)]">
								<p className="xl:text-[17px] text-[13px] text-[var(--zen-white)] xl:text-left text-center mb-[30px] font-medium">
									Chen Tuan Li es una persona que literalmente cambió mi vida.
									Un proceso de acompañamiento muy personal. Pocas personas
									conozco que trabajan a esos niveles y con tanta impecabilidad.
								</p>
								<div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
									<FaQuoteLeft className="text-[var(--zen-pilaresanim)] xl:text-[100px] text-[50px] mr-[10px] opacity-20" />
								</div>
								<h2 className="text-[var(--zen-white)] xl:text-left text-center flex items-center justify-center">
									Álvaro H. (España)
								</h2>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex h-full w-full items-center justify-center bg-slate-300 rounded-2xl text-[var(--zen-white)] p-[40px]">
							<div className="relative w-full h-full flex flex-col items-start justify-center bg-gradient-to-r from-sky-600 to-[var(--zen-analog)] rounded-2xl px-[15px] py-[30px] shadow-md shadow-[var(--zen-pilaresanim)]">
								<p className="xl:text-[17px] text-[13px] text-[var(--zen-white)] xl:text-left text-center mb-[30px] font-medium">
									Para todos quienes buscamos que nuestro viaje sea más liviano
									y darle un real sentido a la existencia, recomiendo a Chen
									Tuan Li. Con métodos tan simples pero certeros, aprendí
									técnicas de meditación y de conexión con el entorno. Y, de
									esta forma, descubrir los secretos sublimes que guarda la
									existencia misma, lo que me ha llevado a vivir de una forma
									más consciente y agradecida.
								</p>
								<div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
									<FaQuoteLeft className="text-[var(--zen-pilaresanim)] xl:text-[100px] text-[50px] mr-[10px] opacity-20" />
								</div>
								<h2 className="text-[var(--zen-white)] xl:text-left text-center flex items-center justify-center">
									Josefina M. (Chile)
								</h2>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex h-full w-full items-center justify-center bg-slate-300 rounded-2xl text-[var(--zen-white)] p-[40px]">
							<div className="relative w-full h-full flex flex-col items-start justify-center bg-gradient-to-r from-cyan-600 to-[var(--zen-analog2)] rounded-2xl px-[15px] py-[30px] shadow-md shadow-[var(--zen-pilaresanim)]">
								<p className="xl:text-[17px] text-[13px] text-[var(--zen-white)] xl:text-left text-center mb-[30px] font-medium">
									Chen Tuan Li llegó a mi vida para transformarla de manera
									bastante profunda. Emocionado de seguirlo y seguir
									aprendiendo. Si tienen oportunidad de conocerlo y tocar su
									puerta, seguro que les abrirá con su corazón lleno de luz y
									los ayudará a encontrarse a sí mism@s.
								</p>
								<div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
									<FaQuoteLeft className="text-[var(--zen-pilaresanim)] xl:text-[100px] text-[50px] mr-[10px] opacity-20" />
								</div>
								<h2 className="text-[var(--zen-white)] xl:text-left text-center flex items-center justify-center">
									Diego A. (Perú)
								</h2>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex h-full w-full items-center justify-center bg-slate-300 rounded-2xl text-[var(--zen-white)] p-[40px]">
							<div className="relative w-full h-full flex flex-col items-start justify-center bg-gradient-to-r from-sky-600 to-[var(--zen-analog)] rounded-2xl px-[15px] py-[30px] shadow-md shadow-[var(--zen-pilaresanim)]">
								<p className="xl:text-[17px] text-[13px] text-[var(--zen-white)] xl:text-left text-center mb-[30px] font-medium">
									Fuera de este planeta la experiencia con Chen Tuan Li, la
									verdad es que no he logrado experimentar nada parecido...
								</p>
								<div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
									<FaQuoteLeft className="text-[var(--zen-pilaresanim)] xl:text-[100px] text-[50px] mr-[10px] opacity-20" />
								</div>
								<h2 className="text-[var(--zen-white)] xl:text-left text-center flex items-center justify-center">
									Paola D. (Chile)
								</h2>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex h-full w-full items-center justify-center bg-slate-300 rounded-2xl text-[var(--zen-white)] p-[40px]">
							<div className="relative w-full h-full flex flex-col items-start justify-center bg-gradient-to-r from-cyan-600 to-[var(--zen-analog2)] rounded-2xl px-[15px] py-[30px] shadow-md shadow-[var(--zen-pilaresanim)]">
								<p className="xl:text-[17px] text-[13px] text-[var(--zen-white)] xl:text-left text-center mb-[30px] font-medium">
									Chen Tuan Li fue quien me acercó por primera vez a la práctica
									de meditación. Junto a él aprendí distintas herramientas para
									observar y adaptarme a mi entorno, para reconocer lo bondadoso
									que me rodea. Gracias a ese trabajo tuve la oportunidad de
									viajar y practicar la plenitud de consciencia en varios
									contextos, siempre manteniendo la base que Chen Tuan Li me
									proveyó en esos primeros años.
								</p>
								<div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
									<FaQuoteLeft className="text-[var(--zen-pilaresanim)] xl:text-[100px] text-[50px] mr-[10px] opacity-20" />
								</div>
								<h2 className="text-[var(--zen-white)] xl:text-left text-center flex items-center justify-center">
									Javier DLF. (Chile)
								</h2>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default InfoSection6;
