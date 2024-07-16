import Link from "next/link";

const ViajePezKoi = () => {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<h1>El Gran Viaje del Pez Koi</h1>
			<Link
				href="/#main-course-container"
				className="bg-slate-400 p-[10px] rounded-md"
			>
				Atras
			</Link>
		</div>
	);
};

export default ViajePezKoi;
