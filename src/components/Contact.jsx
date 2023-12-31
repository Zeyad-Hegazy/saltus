import { Link } from "react-router-dom";
import raise from "../assets/images/raise.png";

const Contact = () => {
	return (
		<section className="py-[2rem] lg:px-[6rem] gap-6 flex flex-col lg:flex-row justify-between items-center">
			<div className="flex flex-col gap-6 w-full md:w-[70%] xl:w-[45%] px-4 text-center lg:text-left">
				<h3 className="text-[25px] main-font sm:text-[35px] lg:text-[40px] text-[#333333] font-semibold">
					Looking to raise capital for your growing business?
				</h3>
				<p className="text-[24px] leading-[32px] text-[#999999]">
					Whether expanding or opening a brand-new concept, we make it easy to
					raise money from thousands of local investors.
				</p>
				<Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
					<button className="w-full mainBg hover:bg-[#0c5f50] py-4 text-white font-semibold rounded-[15px]">
						Keep In Touch
					</button>
				</Link>
			</div>
			<div className="order-[-1] lg:order-1 w-[70%] md:w-[40%] xl:pr-[1.5rem]">
				<img
					src={raise}
					alt="raise image"
					className="w-full h-full object-contain"
				/>
			</div>
		</section>
	);
};

export default Contact;
