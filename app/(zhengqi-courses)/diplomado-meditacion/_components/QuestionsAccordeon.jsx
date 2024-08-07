import { Collapse } from "react-collapse";
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Lato } from "next/font/google";

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
});

const QuestionsAccordeon = ({ open, toggle, title, lessons }) => {
	return (
		<div className={`${lato.className} w-full px-[30px] mb-[30px]`}>
			<div
				className={`py-[25px] px-[50px] flex justify-between items-center cursor-pointer border-2 ${
					open ? "border-red-800" : "border-green-800"
				} rounded-xl`}
				onClick={toggle}
			>
				<p
					className={`gSansMedium xl:text-[24px] text-[18px] font-bold ${
						open ? "text-red-800" : "text-green-800"
					} `}
				>
					{title}
				</p>
				<div className="gSans xl:text-[24px] text-[16px]">
					{open ? (
						<RxCross1 className="text-red-800" />
					) : (
						<FaPlus className="text-green-800" />
					)}
				</div>
			</div>
			<Collapse isOpened={open}>
				<div className="w-full px-[50px]">
					{lessons.map((lesson, index) => (
						<p
							className="2xl:text-[22px] xl:text-[16px] text-[14px] list-disc leading-relaxed"
							key={index}
						>
							{lesson}
						</p>
					))}
				</div>
			</Collapse>
		</div>
	);
};

export default QuestionsAccordeon;
