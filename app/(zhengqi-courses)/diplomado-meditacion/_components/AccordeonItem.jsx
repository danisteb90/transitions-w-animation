import { Collapse } from "react-collapse";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Lato } from "next/font/google";

const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
});

const AccordeonItem = ({ open, toggle, title, lessons }) => {
	return (
		<div className={`${lato.className} w-full px-[30px] mb-[30px]`}>
			<div
				className="py-[25px] px-[50px] flex justify-between items-center cursor-pointer border-2 border-[var(--zen-analog2)] rounded-xl"
				onClick={toggle}
			>
				<p className="gSansMedium text-[24px] font-bold">{title}</p>
				<div className="gSans text-[24px]">
					{open ? <FaMinus /> : <FaPlus />}
				</div>
			</div>
			<Collapse isOpened={open}>
				<ul className="w-full px-[50px] ">
					{lessons.map((lesson, index) => (
						<li
							className="2xl:text-[21px] xl:text-[16px] text-[14px] list-disc"
							key={index}
						>
							{lesson}
						</li>
					))}
				</ul>
			</Collapse>
		</div>
	);
};

export default AccordeonItem;
