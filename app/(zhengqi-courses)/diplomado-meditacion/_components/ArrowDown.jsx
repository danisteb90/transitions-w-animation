"use client";
import { BsArrowDown } from "react-icons/bs";

import { animatePageOut } from "@/app/utils/animation";
import { useRouter, usePathname } from "next/navigation";

const ArrowDown = ({ href }) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		if (pathname !== href) {
			animatePageOut(href, router);
		}
	};

	return (
		<div
			className="group fixed right-[20px] xl:bottom-[20px] bottom-[120px] bg-[var(--zen-base)] w-[50px] h-[50px] rounded-full flex items-center justify-center z-[2] cursor-pointer"
			onClick={handleClick}
		>
			<p className="absolute top-0 opacity-0 left-[50%] translate-x-[-50%] text-[var(--zen-comp)] text-[20px] font-bold gSans z-[-1] group-hover:top-[-30px] group-hover:opacity-100 transition-all duration-300">
				Regresar
			</p>
			<BsArrowDown className="absolute top-[-20px] left-[50%] translate-x-[-50%] text-[var(--zen-comp)] text-[55px] z-[-1] group-hover:top-[-3px] group-hover:rotate-90 transition-all duration-300" />
		</div>
	);
};

export default ArrowDown;
