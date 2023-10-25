import { Link } from "react-router-dom";
import cuate from "../assets/images/cuate.webp";

const Contact = () => {
	return (
		<section className="section_settings mt-[6rem] sm:mt-[12rem] gap-6 flex flex-col sm:flex-row justify-between items-center">
			<div className="flex flex-col gap-6 w-full md:w-[70%] xl:w-[45%] px-4">
				<h3 className="text-[25px] sm:text-[48px] text-[#333333] font-semibold">
					Looking to raise capital for your growing business?
				</h3>
				<p className="text-[24px] leading-[32px] text-[#999999]">
					Whether expanding or opening a brand-new concept, we make it easy to
					raise money from thousands of local investors.
				</p>
				<Link to="/contact">
					<button className="w-full mainBg hover:bg-[#0c5f50] py-4 text-white font-semibold rounded-[15px]">
						Keep In Touch
					</button>
				</Link>
			</div>
			<div className="order-[-1] md:order-1 w-[70%] md:w-[30%]">
				<img src={cuate} alt="cuate" className="w-full h-full object-contain" />
			</div>
		</section>
	);
};

export default Contact;
