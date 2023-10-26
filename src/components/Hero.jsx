import logo from "../assets/images/logo.webp";

const Hero = () => {
	return (
		<section className="h-[90vh] bghero bg-cover bg-no-repeat flex justify-start items-center sm:items-start">
			<div className="flex flex-col h-full justify-start items-center lg:items-start lg:flex-row w-full lg:w-[80%] xl:w-[60%] lg:justify-center gap-4">
				<div className="mt-[2rem]">
					<img src={logo} alt="logo" className="h-36 w-36" />
				</div>
				<div className="ml-[-1rem] lg:mt-[2rem] lg:ml-[10rem] h-[15rem] w-[15rem] sm:h-[20rem] xl:h-[30rem] sm:w-[20rem] xl:w-[30rem] rounded-full bg-[rgba(139,116,68,0.4)] overflow-visible relative">
					<div className="absolute top-[4rem] right-[-2rem] md:right-[-10rem] xl:top-[8rem] xl:right-[-17rem]">
						<h1 className="text-[25px] sm:text-[40px] main-font xl:text-[60px] xl:leading-[80px] text-[#FFFFFF] font-semibold">
							Meaningful in <br /> Main Street businesses
						</h1>
						<p className="text-[15px] xl:text-[20px] xl:leading-[32px] text-[#FFFFFF] mt-[1rem] sm:mt-[2rem]">
							Browse vetted investment offerings
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
