import Card from "../UI/card/Card";
import { SubsidObjs } from "../data/companies";

const Subsidiaries = () => {
	return (
		<section className="px-4 lg:py-[2rem] lg:px-[6rem]">
			<div className="text-left pt-8 md:pt-[12rem] xl:p-0">
				<h1 className="mb-8 text-[48px] text-[#333333] leading-[64px] font-semibold">
					Subsidiaries
				</h1>
			</div>
			<div className="h-full flex flex-wrap justify-center items-start md:mt-[3rem] gap-8 m-4">
				{SubsidObjs.map((comp) => (
					<Card
						key={comp.id}
						className="lg:w-[40%] h-[32rem] overflow-hidden"
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

export default Subsidiaries;
