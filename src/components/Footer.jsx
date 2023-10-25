import logo from "../assets/images/logo.webp";
import backToTop from "../assets/images/Backtotop.webp";
import facebook from "../assets/images/facebook.webp";
import twitter from "../assets/images/twitter.webp";
import instagram from "../assets/images/instagram.webp";
import shape from "../assets/images/Shape.webp";

const Footer = () => {
	return (
		<footer className="mt-[7rem] xl:mt-0 w-full h-[150vh] md:h-[50vh] flex flex-col justify-center items-start bg-[#8B75441A] relative">
			<div className="hidden sm:block absolute top-8 right-6 w-[12rem]">
				<img src={shape} alt="shape" />
			</div>
			<div className="w-full flex flex-col mb-[4rem] justify-center items-center gap-[2rem] md:gap-[12rem] md:flex-row">
				<img src={logo} alt="logo" className="w-24 h-24" />
				<div className="w-[30%] flex flex-col md:flex-row justify-center gap-[3rem] md:gap-[10rem] mt-4">
					<div className="flex flex-col gap-4">
						<p className="font-medium">Home</p>
						<p className="font-medium">Services</p>
						<p className="font-medium">Governance</p>
						<p className="font-medium">About us</p>
						<p className="font-medium">Contact Us</p>
					</div>
					<div className="flex flex-col gap-4">
						<p className="font-medium">Services</p>
						<p>Contracting</p>
						<p>Airconditioning</p>
						<p>Food Training</p>
						<p>Travel Agency</p>
					</div>
				</div>
				<a href="#hero">
					<img src={backToTop} alt="back to top button" className="w-16 h-16" />
				</a>
			</div>
			<div className="w-full flex justify-start items-center gap-[2rem] md:gap-[15rem] p-6 md:pl-[16rem]">
				<div className="flex items-center gap-6">
					<img
						src={facebook}
						alt="facebook icon"
						className="w-[12px] h-[12px]"
					/>
					<img src={twitter} alt="twitter icon" className="w-[12px] h-[12px]" />
					<img
						src={instagram}
						alt="instagram icon"
						className="w-[12px] h-[12px]"
					/>
				</div>
				<button className="w-[50%] md:w-[30%] py-4 mainBg hover:bg-[#0c5f50] text-white font-semibold rounded-[15px]">
					Contact us
				</button>
			</div>
		</footer>
	);
};

export default Footer;
