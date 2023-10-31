import shape from "../assets/images/Shape.webp";
import Card from "../UI/card/Card";
import { SisCompsObjs } from "../data/companies";

const SisComps = () => {
	return (
		<section
			className="flex flex-col justify-center items-center relative"
			id="siscomps"
		>
			<div className="hidden sm:block absolute top-16 left-16 w-[12rem] h-[12rem]">
				<img src={shape} alt="shape" />
			</div>
			<div className="text-center pt-8 md:pt-[12rem] xl:p-0">
				<h1 className="mb-8 text-[35px] main-font text-[#333333] leading-[64px] font-semibold">
					Sister Companies
				</h1>
				<p className="leading-[32px] text-[24px] w-auto md:w-[700px] text-[#999999]">
					A network of trusted partners that complement our offerings and expand
					our capabilities. Together, we deliver unparalleled solutions and
					exceptional value.
				</p>
			</div>
			<div className="h-full flex flex-wrap justify-center items-start md:mt-[3rem] gap-8 m-4">
				{SisCompsObjs.map((comp) => (
					<Card
						key={comp.id}
						className="md:h-[28rem]"
						title={comp.title}
						image={comp.image}
						description={comp.mini_description}
						target={comp.id}
					/>
				))}
			</div>
		</section>
	);
};

export default SisComps;
