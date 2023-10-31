import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import backToTop from "../assets/images/Backtotop.webp";
import location from "../assets/icons/location.png";
import sms from "../assets/icons/sms.png";

const Footer = () => {
	return (
		<footer className="bg-[#8B75441A] py-6 text-white mt-[7rem] xl:mt-0 w-full h-auto lg:h-[55vh] relative">
			<div className="h-full w-full mx-auto px-4">
				<div className="h-full w-full flex flex-col flex-wrap items-center justify-between gap-[4rem] lg:gap-1">
					<div className="w-full flex flex-col lg:flex-row justify-around items-center gap-6 xl:gap-0">
						<img src={logo} alt="logo" className="w-24 h-24" />
						<div className="flex flex-col sm:flex-row justify-center sm:gap-[10rem] mt-4 text-[#333333]">
							<div className="flex flex-col gap-4">
								<Link to="/" onClick={() => window.scrollTo(0, 0)}>
									<p className="font-medium text-center">Home</p>
								</Link>
								<Link to="/governance" onClick={() => window.scrollTo(0, 0)}>
									<p className="font-medium text-center">Governance</p>
								</Link>
								<Link to="/about" onClick={() => window.scrollTo(0, 0)}>
									<p className="font-medium text-center">About us</p>
								</Link>
								<Link to="/ceo-message" onClick={() => window.scrollTo(0, 0)}>
									<p className="font-medium text-center">CEO Message</p>
								</Link>
								<Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
									<p className="font-medium text-center">Contact Us</p>
								</Link>
							</div>
							<div className="flex flex-col gap-4">
								<p className="font-medium text-center">Services</p>
								<p className="text-center">Contracting</p>
								<p className="text-center">Airconditioning</p>
								<p className="text-center">Food Training</p>
								<p>Travel Agency</p>
							</div>
						</div>
						<img
							src={backToTop}
							alt="back to top image"
							className="w-16 h-16 cursor-pointer absolute bottom-[5rem] left-[50%] translate-x-[-50%] lg:static"
							onClick={() => window.scrollTo(0, 0)}
						/>
					</div>
					<div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[3rem] xl:gap-0 lg:px-[3rem]">
						<div className="text-[#333333] mb-[5rem] lg:mb-0 flex flex-col lg:flex-row w-full  justify-center items-center gap-[2rem]">
							<p className="w-fit flex items-center gap-4 text-[#0c5f50]">
								<img
									src={location}
									alt="location icon"
									className="w-6 h-6 object-contain"
								/>
								Olaya Street, Riyadh , Saudi Arabia
							</p>
							<a href="mailto:jamal@saltusintgrated.com">
								<p className="w-fit flex items-center gap-4 text-[#0c5f50]">
									<img
										src={sms}
										alt="sms icon"
										className="w-6 h-6 object-contain"
									/>
									jamal@saltusintgrated.com
								</p>
							</a>
						</div>
					</div>
					<div className="text-[#333333] mb-[-20px]">
						<p>&copy; saltusintgrated || All Rights Reserved </p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
