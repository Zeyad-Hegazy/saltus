import contract from "../assets/images/contract.webp";
import conditioner from "../assets/images/conditioner.webp";
import food from "../assets/images/food.webp";
import travelling from "../assets/images/Travelling.webp";

const Card = ({ title, icon, description, gradient }) => {
	return (
		<div
			className={`${
				gradient ? "gradient" : "bg-white"
			} shadow-2xl m-4 sm:m-1 p-4 sm:p-8 w-full md:w-[46%] rounded-[15px] sm:mb-[3rem]`}
		>
			<div className="flex w-full justify-between items-start">
				<h3
					className={`${
						gradient ? " text-[#FFFFFF]" : "text-[#128C76]"
					} text-[22px] xl:text-[45px] font-semibold`}
				>
					{title}
				</h3>
				<img
					src={icon}
					alt="contract"
					className="w-16 h-16 md:w-18 md:h-18 xl:w-24 xl:h-24"
				/>
			</div>
			<div className="w-full mt-4">
				<p
					className={`${
						gradient ? " text-[#FFFFFF]" : "text-[#818181]"
					} text-[17px] sm:text-[24px] leading-[30px] sm:leading-[40px]`}
				>س
					{description}
				</p>
			</div>
		</div>
	);
};

const Services = () => {
	return (
		<section
			className="section_settings mt-20 flex flex-col justify-center items-start"
			id="services"
		>
			<div className="text-center sm:text-left pt-16 md:pt-[12rem] xl:p-0">
				<h1 className="mb-[3rem] text-[50px] text-[#000000] leading-[24px] font-semibold">
					Services
				</h1>
				<p className="leading-[45px] sm:leading-[24px] text-[30px] text-[#818181]">
					Saltus Integrated Holding Company is working on four main sectors
				</p>
			</div>
			<div className="h-full w-full flex flex-wrap justify-between items-start mt-[4rem]">
				<Card
					title="CONTRACTING"
					icon={contract}
					description="Contracting services refer to various services that Saltus Integrated holding company contracts from external vendors, suppliers, or subsidiaries within the corporate group.These services can range from construction and maintenance to consulting and technology services."
					gradient
				/>
				<Card
					title="AIRCONDITIONING"
					icon={conditioner}
					description="Contracting services refer to various services that Saltus Integrated holding company contracts from external vendors, suppliers, or subsidiaries within the corporate group.These services can range from construction and maintenance to consulting and technology services."
				/>
				<Card
					title="FOOD TRADING"
					icon={food}
					description="Contracting services refer to various services that Saltus Integrated holding company contracts from external vendors, suppliers, or subsidiaries within the corporate group.These services can range from construction and maintenance to consulting and technology services."
				/>
				<Card
					title="TRAVEL AGENCY"
					icon={travelling}
					description="Contracting services refer to various services that Saltus Integrated holding company contracts from external vendors, suppliers, or subsidiaries within the corporate group.These services can range from construction and maintenance to consulting and technology services."
				/>
			</div>
		</section>
	);
};

export default Services;
