import { useState } from "react";

const InvesCard = ({ gradient, p }) => {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<div
			className={`${
				hovered
					? gradient
						? "bg-[white]"
						: "gradient"
					: gradient
					? "gradient"
					: "bg-[white]"
			} flex justify-center items-center py-6 w-full sm:w-[45%] lg:w-[30%] h-[409px] my-8 lg:m-0 text-center rounded-[15px] shadow-2xl px-4 transition-all duration-500`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<p
				className={`text-[30px] leading-[50px] ${
					hovered
						? gradient
							? "text-[#128C76]"
							: "text-white"
						: gradient
						? "text-white"
						: "text-[#128C76]"
				}  font-[400] transition-all duration-500`}
			>
				{p}
			</p>
		</div>
	);
};

const About = () => {
	return (
		<div className="py-[2rem] px-2 lg:px-[6rem] h-auto">
			<div className="text-center sm:text-left">
				<h1 className="mb-[3rem] mt-[2rem] text-[50px] text-[#000000] font-semibold">
					About Us
				</h1>
				<p className="text-[30px] text-[#818181]">
					Saltus Integrated Holding Company manages and owns a group of
					subsidiaries working in the fields of contracting, tradeing, tourism,
					travel, marketing, and food. These subsidiaries are linked to each
					other through financing, administrative, and strategic relationships.
					The main objective of Saltus Integrated Holding Company is to achieve
					diversification and financial sustainability through its investments
					in a variety of businesses and commercial sectors. Saltus Integrated
					Holding Company provides its subsidiaries and sister companies with
					advantages such as directing general strategies, sharing experiences
					and skills with subsidiaries and sister companies, and achieving
					growth from the diversity of operational and investment activites in
					targeted sectors and fields. The company also provides financial and
					administrative support to subsidiaries and sister companies, and
					facilitates mergers and acquisitions between companies.
				</p>
			</div>
			<div className="flex justify-between items-center flex-wrap mt-[8rem]">
				<div className="gradient flex flex-col justify-center items-center px-4 py-6 w-full sm:w-[45%] lg:w-[30%] h-[409px] text-center rounded-[15px]">
					<h3 className="text-[35px] md:text-[20px] xl:text-[35px] leading-[24px] text-white mb-[3rem] font-[700]">
						MISSION
					</h3>
					<p className="text-[30px] md:text-[20px] xl:text-[30px] leading-[50px] text-white font-[400]">
						To be one of the leading companies in the Saudi market in the field
						of finance and business.
					</p>
				</div>
				<div className="gradient flex flex-col justify-center items-center px-4 py-6 w-full sm:w-[45%] lg:w-[30%] h-[409px] text-center rounded-[15px] my-8 lg:m-0 lg:translate-y-[-4rem]">
					<h3 className="text-[35px] md:text-[20px] xl:text-[35px] leading-[24px] text-white mb-[3rem] font-[700]">
						VISION
					</h3>
					<p className="text-[30px] md:text-[20px] xl:text-[30px] leading-[50px] text-white font-[400]">
						Enhancing local content in the fields of industry and trade.
					</p>
				</div>
				<div className="gradient flex flex-col justify-center items-center px-4 py-6 w-full sm:w-[45%] lg:w-[30%] h-[409px] text-center rounded-[15px]">
					<h3 className="text-[35px] md:text-[20px] xl:text-[35px] leading-[24px] text-white mb-[3rem] font-[700]">
						CORE VALUES
					</h3>
					<p className="text-[30px] md:text-[20px] xl:text-[30px] leading-[50px] text-white font-[400]">
						Diversity and integration , Partnership and Trust , Transparency and
						Integrity , Responsibility
					</p>
				</div>
			</div>

			<div className="mt-[8rem]">
				<h2 className="text-center text-[30px] sm:text-[50px] leading-[24px] text-[#000000] font-[700]">
					INVESTMENTS
				</h2>
				<div className="mt-[6rem]">
					<h3 className="text-center lg:text-left text-[#128C76] text-[35px] leading-[24px] font-[700]">
						PRIVATE EQUITY
					</h3>
					<div className="flex justify-between items-center flex-wrap mt-[4rem]">
						<InvesCard
							gradient={true}
							p="Target industries and sectors where there is direct expertise and experience."
						/>
						<InvesCard
							gradient={false}
							p="Driven by risk/reward portfolio composition."
						/>
						<InvesCard
							gradient={true}
							p="Best practices in strategic planning and financial management."
						/>
					</div>
				</div>
				<div className="mt-[6rem]">
					<h3 className="text-center lg:text-left text-[#128C76] text-[35px] leading-[24px] font-[700]">
						DIRECT INVESTMENTS
					</h3>
					<div className="flex justify-between items-center flex-wrap mt-[4rem]">
						<InvesCard
							gradient={false}
							p="Direct stakes in diferent entities. Majority control in operating companies."
						/>
						<InvesCard
							gradient={true}
							p="Aim to develop top and bottom lines, introduce new markets and new market segments."
						/>
						<InvesCard
							gradient={false}
							p="Providing support at executive, investment, compensatory & auditory levels."
						/>
					</div>
				</div>
				<div className="mt-[6rem] mb-[6rem]">
					<h3 className="text-center lg:text-left text-[#128C76] text-[35px] leading-[24px] font-[700]">
						PUBLIC EQUITY
					</h3>
					<div className="flex justify-between items-center flex-wrap mt-[4rem]">
						<InvesCard
							gradient={true}
							p="Limited exposure to local, regional and global equities."
						/>
						<InvesCard gradient={false} p="Streamlined execution process" />
						<InvesCard
							gradient={true}
							p="Continual assessment and improvement based on micro and macro economic news."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
