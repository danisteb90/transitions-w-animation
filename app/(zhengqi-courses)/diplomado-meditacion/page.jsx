import Link from "next/link";

const DiplomadoMeditacion = () => {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<h1>Diplomado Meditación</h1>
			<Link href="/" className="bg-slate-400 p-[10px] rounded-md">
				Atras
			</Link>
		</div>
	);
};

export default DiplomadoMeditacion;
