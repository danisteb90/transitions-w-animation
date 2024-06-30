"use client";

const { animatePageOut } = require("@/app/utils/animation");
const { useRouter, usePathname } = require("next/navigation");

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
			className="text-lg text-neutral-900 hover:text-neutral-700"
			onClick={handleClick}
		>
			{label}
		</button>
	);
};

export default TransitionLink;
