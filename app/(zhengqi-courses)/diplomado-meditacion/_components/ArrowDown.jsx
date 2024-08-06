import TransitionLink from "@/components/TransitionLink";
import { BsArrowDown } from "react-icons/bs";

const ArrowDown = () => {
	return (
		<div className="fixed right-[20px] xl:bottom-[20px] bottom-[120px] bg-[var(--zen-base)] w-[50px] h-[50px] rounded-full flex items-center justify-center hover:rotate-90 transition-all duration-500 ease-in-out z-[2]">
			<TransitionLink
				href="/#courses-container"
				label=""
				background="#00000000"
			/>
			<BsArrowDown className="absolute top-[-20px] left-[50%] translate-x-[-50%] text-[var(--zen-comp)] text-[55px] z-[-1]" />
		</div>
	);
};

export default ArrowDown;
