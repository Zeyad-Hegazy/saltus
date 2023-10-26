import contract from "../assets/images/contract.webp";
import conditioner from "../assets/images/conditioner.webp";
import food from "../assets/images/food.webp";
import travelling from "../assets/images/Travelling.webp";

const Card = ({ title, icon, description, gradient }) => {
	return (
		<div
			className={`${
				gradient ? "gradient" : "bg-white"
			} shadow-2xl m-4 sm:m-1 p-4 sm:p-8 w-full lg:w-[46%] rounded-[15px] sm:mb-[3rem]`}
		>
			<div className="flex w-full justify-between items-start">
				<h3
					className={`${
						gradient ? " text-[#FFFFFF]" : "text-[#128C76]"
					} text-[22px] xl:text-[35px] font-semibold`}
				>
					{title}
				</h3>
				<img src={icon} alt="contract" className="w-16 h-16 md:w-14 md:h-14" />
			</div>
			<div className="w-full mt-4">
				<p
					className={`${
						gradient ? " text-[#FFFFFF]" : "text-[#818181]"
					} text-[17px] sm:text-[20px] leading-[30px] sm:leading-[40px]`}
				>
					{description}
				</p>
			</div>
		</div>
	);
};

const Services = () => {
	return (
		<section
			className="section_settings h-fit mt-20 flex flex-col justify-center items-start"
			id="services"
		>
			<div className="text-center pt-12 mx-auto">
				<h1 className="mb-8 text-[40px] text-[#333333] leading-[64px] font-semibold">
					Services
				</h1>
				<p className="leading-[32px] text-[24px] w-auto md:w-[700px] text-[#999999]">
					Saltus Integrated Holding Company is working on four main sectors
				</p>
			</div>
			<div className="h-full w-full flex flex-wrap justify-between items-start mt-[4rem] px-6">
				<Card
					title="CONTRACTING"
					icon={contract}
					description="Contracting services refer to various services that Saltus Integrated holding company contracts from external vendors, suppliers, or subsidiaries within the corporate group.These services can range from construction and maintenance to consulting and technology services."
					gradient
				/>
				<Card
					title="AIR CONDITIONING"
					icon={conditioner}
					description="Company provides integrated engineering solutions to the general contracting sector in the field of air using modern technologies and high-quality materials to ensure the provision of air conditioning systems that meet the needs of the local community with efficiency and quality."
				/>
				<Card
					title="FOOD TRADING"
					icon={food}
					description="Food Serveces that import and distribute foodstuffs in the Kingdom of Saudi Arabia.It aims to import food supplies of all kinds and distribute them within the Kingdom of Saudi Arabia and the Arab Gulf countries. It also works in the field of importing fresh and frozen fruits and vegetables."
				/>
				<Card
					title="TRAVEL AGENCY"
					icon={travelling}
					description="Travel servieces plays a vital role in the tourism industry, promoting tourist destinations, and providing distinctive travel experiences to its clients from all over the world through the best travel solutions for business, leisure, and treatment.	"
					gradient
				/>
			</div>
		</section>
	);
};

export default Services;
