"use client";

import { animatePageOut } from "@/app/utils/animation";
import { useRouter, usePathname } from "next/navigation";

const TransitionLink = ({ href, label }) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		if (pathname !== href) {
			animatePageOut(href, router);
		}
	};

	return (
		<button
			className="gSans lg:text-sm text-[15px] p-[12px] bg-[#00000080] rounded-[10px] flex items-center justify-center text-[var(--zen-white)]"
			onClick={handleClick}
		>
			{label}
		</button>
	);
};

export default TransitionLink;
