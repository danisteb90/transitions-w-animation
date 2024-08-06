"use client";

import { animatePageOut } from "@/app/utils/animation";
import { useRouter, usePathname } from "next/navigation";

const TransitionLink = ({ href, label, background = "#00000099" }) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		if (pathname !== href) {
			animatePageOut(href, router);
		}
	};

	return (
		<button
			className={`gSans 2xl:text-[18px] text-[16px] p-[11px] bg-[${background}] rounded-[10px] flex items-center justify-center text-[var(--zen-white)]`}
			onClick={handleClick}
		>
			<p className="hover:text-[var(--zen-lightorange)]">{label}</p>
		</button>
	);
};

export default TransitionLink;
