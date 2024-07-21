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
			className="lg:text-lg text-[15px] font-semibold text-[var(--zen-base)] hover:text-[var(--zen-analog2)]"
			onClick={handleClick}
		>
			{label}
		</button>
	);
};

export default TransitionLink;
