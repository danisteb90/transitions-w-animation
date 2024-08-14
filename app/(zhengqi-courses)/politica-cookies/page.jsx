const PoliticaCookies = () => {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center p-[50px]">
			<h2 className="gSansMedium font-bold w-full mb-[40px] flex items-center justify-center xl:text-[40px] text-[24px] text-[var(--zen-analog)]">
				Política de Cookies
			</h2>
			<div className="mb-[40px]">
				<h3 className="gSansMedium font-bold w-full mb-[40px] flex xl:text-[26px] text-[20px] text-[var(--zen-pilaresanim)]">
					¿Qué son las cookies?
				</h3>
				<p className="gSans text-[16px] xl:text-[21px]">
					Las cookies son pequeños archivos de texto que se almacenan en tu
					dispositivo (ordenador, teléfono móvil, etc.) cuando visitas un sitio
					web. Se utilizan para mejorar la experiencia del usuario, recordando
					sus preferencias y ajustes, así como, para recopilar información sobre
					cómo usa el sitio.
				</p>
			</div>
			<div className="mb-[40px]">
				<h3 className="gSansMedium font-bold w-full mb-[40px] flex xl:text-[26px] text-[20px] text-[var(--zen-pilaresanim)]">
					Uso de cookies en nuestro sitio web
				</h3>
				<p className="gSans text-[16px] xl:text-[21px]">
					En escueladelibertad.es, actualmente no utilizamos cookies en nuestro
					sitio web. No almacenamos ninguna información en tu dispositivo a
					través de cookies y no realizamos seguimiento de tus actividades en el
					sitio.
				</p>
			</div>
			<div className="mb-[40px]">
				<h3 className="gSansMedium font-bold w-full mb-[40px] flex xl:text-[26px] text-[20px] text-[var(--zen-pilaresanim)]">
					Información adicional
				</h3>
				<p className="gSans text-[16px] xl:text-[21px]">
					Aunque hoy en día no utilizamos cookies, queremos mantenerte informado
					y ser transparentes sobre el uso de tecnologías similares en la web.
					Si en el futuro decidimos utilizar cookies u otras tecnologías de
					seguimiento, actualizaremos esta política y te informaremos
					adecuadamente.
				</p>
			</div>
			<div className="mb-[40px]">
				<h3 className="gSansMedium font-bold w-full mb-[40px] flex xl:text-[26px] text-[20px] text-[var(--zen-pilaresanim)]">
					Derechos y contacto
				</h3>
				<p className="gSans text-[16px] xl:text-[21px]">
					Tienes derecho a saber qué tecnologías se utilizan en los sitios web
					que visitas. Si tienes alguna inquietud sobre nuestra política de
					cookies o sobre cómo manejamos tu información, no dudes en ponerte en
					contacto con nosotros a través de:{" "}
					<a
						href="mailto:teconchen@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>teconchen@gmail.com.</span>
					</a>
				</p>
			</div>
			<div className="mb-[40px]">
				<h3 className="gSansMedium font-bold w-full mb-[40px] flex xl:text-[26px] text-[20px] text-[var(--zen-pilaresanim)]">
					Cambios en la Política de Cookies
				</h3>
				<p className="gSans text-[16px] xl:text-[21px]">
					Podemos actualizar esta Política cada cierto tiempo para reflejar
					cambios en nuestras prácticas y/o para dar cumplimiento a nuevas
					regulaciones. Te recomendamos que revises esta Política periódicamente
					para estar informado sobre cómo manejamos las cookies y otras
					tecnologías similares.
				</p>
			</div>
		</div>
	);
};

export default PoliticaCookies;
