import { useState, useEffect } from "react";
import imgPath from "../assets/images/ceoBG.png";

const CeoMessage = () => {
	const [bgLoaded, setBgLoaded] = useState(false);

	useEffect(() => {
		const image = new Image();
		image.src = imgPath;
		image.onload = () => {
			setBgLoaded(true);
		};
	}, []);

	return (
		<>
			<link rel="preload" as="image" href={imgPath} />
			<section className={`p-0 sm:p-[4rem] ${bgLoaded ? "ceoBg" : ""}`}>
				<div className="text-center lg:text-left mt-[-2rem]">
					<h1 className="mb-[1rem] main-font mt-[2rem] pt-[2rem] text-[25px] lg:text-[40px] text-[#FFFFFF]  font-semibold">
						CEO Message
					</h1>
					<p className="px-[1rem] lg:px-0 text-[18px] lg:text-[25px]  text-[#FFFFFF] text-justify">
						With the faith that we feel in the role assigned to us as one of the
						promising companies, and by constantly keeping pace with the rapid
						pace towards which the Kingdom’s Vision 2030 is heading, it was
						necessary for us to anticipate the future and work with all our
						energies to contribute to achieving the goals of that vision.
						Believing in our vision and capabilities, we will continue to
						develop and improve to achieve sustainability by monitoring and
						measuring the quality of performance, so that we can be an effective
						tool in achieving the best gains and the highest standards of
						success in our various sectors. In alignment with our principles,
						which are based on the belief that innovation has no limits, and
						that the passion for excellence and leadership is an obsession that
						always pushes us to soar to new horizons, our ideas raced to choose
						the best business sectors to ensure sustainability in investment,
						which encourages us to provide more effort, always strive for the
						best, and provide investment opportunities. To make these sectors
						more developed and prosperous. Today, we look forward to achieving
						our ambitions to enhance our capabilities, strengthen our
						partnerships, and develop our resources, through diligent work,
						professional teams, a clear vision, and thoughtful future plans that
						will achieve leadership in our field of expertise, so that we can
						truly be partners in success.
					</p>
				</div>
			</section>
		</>
	);
};

export default CeoMessage;
