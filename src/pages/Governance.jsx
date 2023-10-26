import flagIcon from "../assets/icons/Diplomacy.png";
import people from "../assets/icons/People.png";
import audit from "../assets/icons/Audit.png";
import cyber from "../assets/icons/CyberSecurity.png";
import community from "../assets/icons/Community.png";

const Governance = () => {
	return (
		<section className="px-4 lg:py-[2rem] lg:px-[6rem]">
			<div className="text-center sm:text-left">
				<div className="flex flex-col md:flex-row items-center gap-4 mb-[1rem] mt-[1rem] ">
					<img
						src={flagIcon}
						alt="flag icon"
						className="h-14 w-14 object-contain"
					/>
					<h1 className="text-[40px] main-font text-[#000000] font-semibold">
						Governance
					</h1>
				</div>
				<p className="text-[20px] md:text-[30px] text-[#818181] text-center md:text-justify">
					Saltus sets its policies in accordance with the rules and standards
					regulating corporate governance and ensuring adherence to the best
					corporate governance practices that ensure the protection of the
					rights of the holding company, subsidiaries, sister companies, and
					stakeholders. A set of laws, regulations, procedures, and policies has
					been put in place to ensure the required governance is achieved,
					ensuring that subsidiaries and sister companies operate efficiently
					and transparently in accordance with the approved policies through the
					following:
				</p>
			</div>
			<section>
				<div className="mt-[3rem] text-center sm:text-left gradient rounded-[15px] text-white px-[1.5rem] py-[2rem]">
					<div className="flex flex-col md:flex-row justify-between md:justify-start items-center gap-4">
						<img
							src={people}
							alt="people icon"
							className="h-14 w-14 object-contain"
						/>
						<h1 className="text-[20px] main-font md:text-[30px] font-[700]">
							1. BOARD MEMBERS
						</h1>
					</div>
					<p className="text-[15px] md:text-[20px] mt-2 text-center md:text-justify">
						An effective Board of members has been formed at Saltus to ensure
						that wise and informed decisions are made that serve the activities
						of the subsidiaries and sister companies.
					</p>
				</div>
				<div className="mt-[3rem] text-center sm:text-left reverse-gradient rounded-[15px] text-white px-[1.5rem] py-[2rem]">
					<div className="flex flex-col md:flex-row justify-between md:justify-start items-center gap-4">
						<img
							src={audit}
							alt="people icon"
							className="h-14 w-14 object-contain"
						/>
						<h1 className="text-[20px] main-font md:text-[30px] font-[700]">
							2. INTERNAL AUDIT
						</h1>
					</div>
					<p className="text-[15px] md:text-[20px] mt-2 text-center md:text-justify">
						Strong internal control systems are in place to monitor financial
						operations and ensure that they are conducted fairly and
						effectively.
					</p>
				</div>
				<div className="mt-[3rem] text-center sm:text-left gradient rounded-[15px] text-white px-[1.5rem] py-[2rem]">
					<div className="flex flex-col md:flex-row justify-between md:justify-start items-center gap-4">
						<img
							src={cyber}
							alt="people icon"
							className="h-14 w-14 object-contain"
						/>
						<h1 className="text-[20px] main-font md:text-[30px] font-[700]">
							3. TRANSPARENCY AND DISCLOSURE
						</h1>
					</div>
					<p className="text-[15px] md:text-[20px] mt-2 text-center md:text-justify">
						Saltus periodically discloses the financial and performance
						information of its subsidiaries and sister companies to ensure the
						highest standards of transparency, disclosure, and no conflicts of
						interest.
					</p>
				</div>
				<div className="mt-[3rem] text-center sm:text-left reverse-gradient rounded-[15px] text-white px-[1.5rem] py-[2rem]">
					<div className="flex flex-col md:flex-row justify-between md:justify-start items-center gap-4">
						<img
							src={community}
							alt="people icon"
							className="h-14 w-14 object-contain"
						/>
						<h1 className="text-[20px] main-font md:text-[30px] font-[700]">
							4. SOCIAL RESPONSIBILITY
						</h1>
					</div>
					<p className="text-[15px] md:text-[20px] mt-2 text-center md:text-justify">
						Saltus takes social responsibility into consideration and seeks to
						contribute to society positively.
					</p>
				</div>
			</section>
		</section>
	);
};

export default Governance;
