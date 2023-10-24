import shape from "../assets/images/Shape.png";
import nextComp from "../assets/images/nextComp.png";
import lazarComp from "../assets/images/lazarComp.png";
import admsComp from "../assets/images/admsComp.png";
import graph from "../assets/images/Graph.png";

const Card = ({ image, title, description }) => {
	return (
		<div className="h-auto w-[320px] rounded-[15px] shadow-2xl">
			<div className="h-[12rem] w-full flex justify-center items-center mb-4">
				<img src={image} alt={title} className="h-full w-full object-contain" />
			</div>
			<div className="px-4 mb-2">
				<h3 className="mb-4 text-[24px] font-bold text-[#128c76]">{title}</h3>
				<p className="text-[16px] text-[#333333]">{description}</p>
			</div>
			<button className="w-full text-center py-4 mainBg text-[#FFFFFF] rounded-br-[15px] rounded-bl-[15px]">
				View More
			</button>
		</div>
	);
};

const SisComps = () => {
	return (
		<>
			<section
				className="section_settings flex flex-col justify-center items-center relative"
				id="siscomps"
			>
				<div className="hidden sm:block absolute top-16 left-16 w-[12rem]">
					<img src={shape} alt="shape" />
				</div>
				<div className="text-center pt-8 md:pt-[12rem] xl:p-0">
					<h1 className="mb-8 text-[48px] text-[#333333] leading-[64px] font-semibold">
						Sister Companies
					</h1>
					<p className="leading-[32px] text-[24px] w-auto md:w-[700px] text-[#999999]">
						A network of trusted partners that complement our offerings and
						expand our capabilities. Together, we deliver unparalleled solutions
						and exceptional value.
					</p>
				</div>
				<div className="h-full flex flex-wrap justify-center items-start md:mt-[3rem] gap-8 m-4">
					<Card
						title="Next Milleniun"
						image={nextComp}
						description="The goals and objectives of these companies with the best standards of work in the field of public relations and marketing."
					/>
					<Card
						title="Lazar"
						image={lazarComp}
						description="Lazar has occupied a prominent position and was able to build a long-standing name in the world of ceramics and sanitary ware and tiles that combines quality and luxury."
					/>
					<Card
						title="Adms"
						image={admsComp}
						description="Adams provides its distinguished services that are compatible with the standards of advertising, marketing and public relations technology, as we work on managing events and occasions and preparing publications and advertising gifts."
					/>
				</div>
			</section>
			<div className="h-[90vh] hidden xl:block mt-[6rem]">
				<img src={graph} alt="graph" />
			</div>
		</>
	);
};

export default SisComps;
