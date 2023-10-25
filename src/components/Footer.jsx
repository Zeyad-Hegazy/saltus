import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import backToTop from "../assets/images/Backtotop.webp";
import facebook from "../assets/images/facebook.webp";
import twitter from "../assets/images/twitter.webp";
import instagram from "../assets/images/instagram.webp";
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
									<p className="font-medium text-center">Ceo Message</p>
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
					<div className="w-full flex flex-col lg:flex-row justify-between items-center gap-[3rem] xl:gap-0 px-0 lg:px-[100px]">
						<div className="flex items-center gap-6 w-24 ml-0 lg:ml-[4rem]">
							<img
								src={facebook}
								alt="facebook icon"
								className="w-[24px] h-[24px]"
							/>
							<img
								src={twitter}
								alt="twitter icon"
								className="w-[24px] h-[24px]"
							/>
							<img
								src={instagram}
								alt="instagram icon"
								className="w-[24px] h-[24px]"
							/>
						</div>
						<Link
							to="/contact-us"
							className="w-full order-[-1] lg:order-none flex justify-center items-center"
							onClick={() => window.scrollTo(0, 0)}
						>
							<button className="ml-0 lg:ml-[70px] w-full sm:w-[60%] xl:w-[40%] px-[4rem] py-2 bg-[#0c5f50] text-white font-semibold rounded-[15px]">
								Contact us
							</button>
						</Link>
						<div className="text-[#333333] mb-[5rem] lg:mb-0">
							<p className="w-full flex items-center gap-4 text-[#0c5f50]">
								<img
									src={location}
									alt="location icon"
									className="w-6 h-6 object-contain"
								/>
								Olaya Street, Riyadh , Saudi Arabia
							</p>
							<p className="w-full flex items-center gap-4 mt-4 text-[#0c5f50]">
								<img
									src={sms}
									alt="sms icon"
									className="w-6 h-6 object-contain"
								/>
								info@saltusintgrated.com
							</p>
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
