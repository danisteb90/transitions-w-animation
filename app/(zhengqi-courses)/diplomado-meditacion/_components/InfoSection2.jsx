import Image from "next/image";

const InfoSection2 = () => {
	return (
		<div className="h-full w-full xl:pl-[120px] flex justify-center items-center">
			<div className="w-full grid xl:grid-cols-4 grid-cols-1 xl:grid-rows-2 grid-rows-8 xl:gap-4 gap-0 xl:p-6 px-2">
				<div className="rounded-lg h-[325px]">
					<Image
						src={"/Assets/Icon1.png"}
						alt="icons"
						width={525}
						height={375}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="rounded-lg h-[325px]">
					<Image
						src={"/Assets/Icon2.png"}
						alt="icons"
						width={525}
						height={375}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="rounded-lg h-[325px]">
					<Image
						src={"/Assets/Icon3.png"}
						alt="icons"
						width={525}
						height={375}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="rounded-lg h-[325px]">
					<Image
						src={"/Assets/Icon4.png"}
						alt="icons"
						width={525}
						height={375}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="rounded-lg h-[325px]">
					<Image
						src={"/Assets/Icon5.png"}
						alt="icons"
						width={525}
						height={375}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="rounded-lg h-[325px]">
					<Image
						src={"/Assets/Icon6.png"}
						alt="icons"
						width={525}
						height={375}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="rounded-lg h-[325px]">
					<Image
						src={"/Assets/Icon7.png"}
						alt="icons"
						width={525}
						height={375}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="rounded-lg h-[325px]">
					<Image
						src={"/Assets/Icon8.png"}
						alt="icons"
						width={525}
						height={375}
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default InfoSection2;
