import Link from "next/link";

const DiplomadoSonoterapia = () => {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<h1>Diplomado Sonoterapia</h1>
			<Link
				href="/#main-course-container"
				className="bg-slate-400 p-[10px] rounded-md"
			>
				Atras
			</Link>
		</div>
	);
};

export default DiplomadoSonoterapia;
