import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section className="h-[90vh] bghero bg-cover xl:bg-contain bg-no-repeat flex justify-start items-center sm:items-start">
			<div className="m-0 sm:mt-[2rem] sm:ml-[3rem] h-[15rem] w-[15rem] sm:h-[20rem] xl:h-[30rem] sm:w-[20rem] xl:w-[30rem] rounded-full bg-[rgba(139,116,68,0.4)] overflow-visible relative">
				<div className="absolute top-[2rem] right-[-4rem] md:right-[-10rem] xl:top-[5rem] xl:right-[-17rem]">
					<h1 className="text-[25px] sm:text-[40px] xl:text-[60px] xl:leading-[80px] text-[#FFFFFF] font-semibold">
						Meaningful in <br /> Main Street businesses
					</h1>
					<p className="text-[15px] xl:text-[20px] xl:leading-[32px] text-[#FFFFFF] mt-[1rem] sm:mt-[2rem]">
						Browse vetted investment offerings
					</p>
					<Link to="/contact">
						<button className="h-auto w-auto py-2 px-6 md:px-[4rem] md:py-4 mainBg hover:bg-[#0c5f50] mt-[1rem] sm:mt-[2rem] rounded-[10px] text-[#FFFFFF] text-[16px] font-semibold">
							Contact Us
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
