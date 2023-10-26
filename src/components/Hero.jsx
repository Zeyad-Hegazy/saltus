const Hero = () => {
	return (
		<section className="h-[90vh] bghero bg-cover bg-no-repeat flex justify-start items-center sm:items-start">
			<div className="m-0 sm:mt-[2rem] sm:ml-[3rem] h-[15rem] w-[15rem] sm:h-[20rem] xl:h-[30rem] sm:w-[20rem] xl:w-[30rem] rounded-full bg-[rgba(139,116,68,0.4)] overflow-visible relative">
				<div className="absolute top-[4rem] right-[-4rem] md:right-[-10rem] xl:top-[8rem] xl:right-[-17rem]">
					<h1 className="text-[25px] sm:text-[40px] xl:text-[60px] xl:leading-[80px] text-[#FFFFFF] font-semibold">
						Meaningful in <br /> Main Street businesses
					</h1>
					<p className="text-[15px] xl:text-[20px] xl:leading-[32px] text-[#FFFFFF] mt-[1rem] sm:mt-[2rem]">
						Browse vetted investment offerings
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
