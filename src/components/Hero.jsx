import { useState, useEffect } from "react";
import logo from "../assets/images/logo.webp";
import imgPath from "../assets/images/newHero.png";

const Hero = () => {
	const [bgLoaded, setBgLoaded] = useState(false);

	useEffect(() => {
		const image = new Image();
		image.src = imgPath;
		image.onload = () => {
			setBgLoaded(true);
		};
	}, []);

	return (
		<section
			className={`h-[90vh] ${
				bgLoaded ? "bghero" : ""
			} bg-cover bg-no-repeat flex justify-start items-center sm:items-start`}
		>
			<div className="flex flex-col h-full justify-start items-center lg:items-start lg:flex-row w-full lg:w-[80%] xl:w-[60%] lg:justify-center gap-4 lg:ml-[-4rem]">
				<div className="mt-[2rem]">
					<img src={logo} alt="logo" className="h-36 w-36" />
				</div>
				<div className="ml-[-1rem] lg:mt-[2rem] lg:ml-[4rem] h-[15rem] w-[15rem] sm:h-[20rem] xl:h-[30rem] sm:w-[20rem] xl:w-[30rem] rounded-full bg-[rgba(139,116,68,0.4)] overflow-visible relative">
					<div className="absolute top-[4rem] right-[-2rem] md:right-[-10rem] xl:top-[8rem] xl:right-[-14rem]">
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
