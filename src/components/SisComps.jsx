import { useState } from "react";

import shape from "../assets/images/Shape.png";
import nextComp from "../assets/images/nextComp.png";
import lazarComp from "../assets/images/lazarComp.png";
import admsComp from "../assets/images/admsComp.png";
import graph from "../assets/images/Graph.png";
import CardModal from "../UI/card-portal/CardPortal";

const Card = ({ image, title, description, onClick }) => {
	return (
		<div className="h-auto w-[320px] rounded-[15px] shadow-2xl">
			<div className="h-[12rem] w-full flex justify-center items-center mb-4">
				<img src={image} alt={title} className="h-full w-full object-contain" />
			</div>
			<div className="px-4 mb-2">
				<h3 className="mb-4 text-[24px] font-bold text-[#128c76]">{title}</h3>
				<p className="text-[16px] text-[#333333]">{description}</p>
			</div>
			<button
				className="w-full text-center py-4 mainBg text-[#FFFFFF] rounded-br-[15px] rounded-bl-[15px]"
				onClick={onClick}
			>
				View More
			</button>
		</div>
	);
};

const SisComps = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalData, setModalData] = useState({
		image: "",
		role: "",
		description: "",
	});

	return (
		<>
			{modalIsOpen && (
				<CardModal cardObj={modalData} onClick={setModalIsOpen} />
			)}
			<section
				className="section_settings flex flex-col justify-center items-center relative"
				id="siscomps"
			>
				<div className="hidden sm:block absolute top-16 left-16 w-[12rem] h-[12rem]">
					<img src={shape} alt="shape" />
				</div>
				<div className="text-center pt-8 md:pt-[12rem] xl:p-0">
					<h1 className="mb-8 text-[48px] text-[#333333] leading-[64px] font-semibold">
						Sister Companies
					</h1>
					<p className="leading-[32px] text-[24px] w-auto md:w-[700px] text-[#999999]">
						A network of trusted partners that complement our offerings and
						expand our capabilities. Together, we deliver unparalleled solutions
						and exceptional value.
					</p>
				</div>
				<div className="h-full flex flex-wrap justify-center items-start md:mt-[3rem] gap-8 m-4">
					<Card
						title="Next Milleniun"
						image={nextComp}
						description="The goals and objectives of these companies with the best standards of work in the field of public relations and marketing."
						onClick={() => {
							setModalData({
								image: nextComp,
								role: "Marketing & Event Managment",
								description:
									"Next Millennium Company aims to provide its distinguished services to major companies and clients in the Saudi and Gulf society in all areas of common interest so that we can be an effective support tool in reaching the goals of these companies, bodies, and governmental, semi-governmental and private institutions. We have a wide range of experience in the field of marketing that enables us to reach. The goals and objectives of these companies with the best standards of work in the field of public relations and marketing. Next Millennium has been able to build bridges of communication with major companies working in the field of marketing in all its channels, and through these bridges we have taken an advanced seat among the best options for companies looking for success partners who have the ability to achieve the best elements of success in the field of marketing and public relations.",
							});
							setModalIsOpen(true);
						}}
					/>
					<Card
						title="Lazar"
						image={lazarComp}
						description="Lazar has occupied a prominent position and was able to build a long-standing name in the world of ceramics and sanitary ware and tiles that combines quality and luxury."
						onClick={() => {
							setModalData({
								image: lazarComp,
								role: "Sanitary Ware , ceramics and Tiles",
								description:
									"Lazar has occupied a prominent position and was able to build a long-standing name in the world of ceramics and sanitary ware and tiles that combines quality and luxury. We meet the needs and desires of our customers who have refined taste by providing the largest selection of ceramic and porcelain products with the finest materials and the latest international designs, with our commitment to providing distinguished services to gain the trust of our customers. All of this stems from our vision, through which we seek to elevate the customer’s taste and to be the symbol of the high-end decorations and designs of our products. Because we believe in the importance of our customers, whom we consider success partners, we have been keen since our inception on pre- and after-sales services.",
							});
							setModalIsOpen(true);
						}}
					/>
					<Card
						title="Adms"
						image={admsComp}
						description="Adams provides its distinguished services that are compatible with the standards of advertising, marketing and public relations technology, as we work on managing events and occasions and preparing publications and advertising gifts."
						onClick={() => {
							setModalData({
								image: admsComp,
								role: "Advertising and Marketing Solutions",
								description:
									"Adams provides its distinguished services that are compatible with the standards of advertising, marketing and public relations technology, as we work on managing events and occasions and preparing publications and advertising gifts. At Adams, we have sufficient experience to find innovative advertising solutions that give our clients a competitive advantage in their specialized markets, based on our vision to be the most dynamic and reliable advertising and marketing platform through our team of experienced specialists who strive to achieve the company’s goals.",
							});
							setModalIsOpen(true);
						}}
					/>
				</div>
			</section>
			<div className="h-[90vh] hidden xl:block mt-[6rem]">
				<img src={graph} alt="graph" />
			</div>
		</>
	);
};

export default SisComps;
