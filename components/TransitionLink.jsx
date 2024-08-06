"use client";

import { animatePageOut } from "@/app/utils/animation";
import { useRouter, usePathname } from "next/navigation";

const TransitionLink = ({ href, label, background = "bg-[#00000099]" }) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		if (pathname !== href) {
			animatePageOut(href, router);
		}
	};

	return (
		<button
			className={`gSans xl:text-[18px] text-[12px] xl:p-[11px] p-[3px] xl:w-[150px] w-[100px] ${background} xl:rounded-[10px] rounded-[6px] flex items-center justify-center text-[var(--zen-white)]`}
			onClick={handleClick}
		>
			<p className="hover:text-[var(--zen-lightorange)]">{label}</p>
		</button>
	);
};

export default TransitionLink;
