import { useState } from "react";
import Card from "../UI/card/Card";
import CardModal from "../UI/card-portal/CardPortal";
import img_1 from "../assets/images/Img.png";
import img_2 from "../assets/images/Img-1.png";
import img_3 from "../assets/images/Img-2.png";
import img_4 from "../assets/images/Img-3.png";

const Subsidiaries = () => {
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
			<section className="px-4 lg:py-[2rem] lg:px-[6rem]">
				<div className="text-left pt-8 md:pt-[12rem] xl:p-0">
					<h1 className="mb-8 text-[48px] text-[#333333] leading-[64px] font-semibold">
						Subsidiaries
					</h1>
				</div>
				<div className="h-full flex flex-wrap justify-center items-start md:mt-[3rem] gap-8 m-4">
					<Card
						className="lg:w-[40%]"
						title="Gulf Minds Contracting Company"
						image={img_1}
						description="Gulf Minds Contracting Company has taken it upon itself to actively participate in building a strong, sustainable economy that meets the needs of national development and the aspirations of the local community through its commitment to creating urban projects in accordance with the quality standards required in the implementation of work, which reflects the company’s ambition."
						onClick={() => {
							setModalData({
								image: img_1,
								description:
									"Gulf Minds Contracting Company has taken it upon itself to actively participate in building a strong, sustainable economy that meets the needs of national development and the aspirations of the local community through its commitment to creating urban projects in accordance with the quality standards required in the implementation of work, which reflects the company’s ambition. We are committed to continuous improvement and modernization of the building and construction industry and the application of innovative solutions and technologies. New and automated company operations to achieve high quality, operational efficiency and sustainability in its business.",
							});
							setModalIsOpen(true);
						}}
					/>
					<Card
						className="lg:w-[40%]"
						title="House Carriage Company"
						image={img_2}
						description="House Carriage is considered one of the companies that import and distribute foodstuffs in the Kingdom of Saudi Arabia.
It aims to import food supplies of all kinds and distribute them within the Kingdom of Saudi Arabia and the Arab Gulf countries. It also works in the field of importing fresh and frozen fruits and vegetables of all kinds."
						onClick={() => {
							setModalData({
								image: img_2,
								description:
									"House Carriage is considered one of the companies that import and distribute foodstuffs in the Kingdom of Saudi Arabia. It aims to import food supplies of all kinds and distribute them within the Kingdom o Saudi Arabia and the Arab Gulf countries. It also works in the field of importing fres and frozen fruits and vegetables of all kinds The company is interested in selecting products with great care to meet the needs of th local market, as high-quality products are selected. The company also has an experience and efficient sales team and marketing researchers that are consistent with the needs o the market and consumers and their aspirations to continuously raise the company’ efficiency The company is working to build strategic relationships with major logistics companies t cover all regions of the Kingdom and distribute the food products it imports.",
							});
							setModalIsOpen(true);
						}}
					/>
					<Card
						className="lg:w-[40%]"
						title="Dimensions Travel and Tourism Agency"
						image={img_3}
						description="Dimensions Travel and Tourism Agency plays a vital role in the tourism industry, promoting tourist destinations, and providing distinctive travel experiences to its clients from all over the world through the best travel solutions for business, leisure, and treatment."
						onClick={() => {
							setModalData({
								image: img_3,
								description:
									"Dimensions Travel and Tourism Agency plays a vital role in the tourism industry, promoting tourist destinations, and providing distinctive travel experiences to its clients from all over the world through the best travel solutions for business, leisure, and treatment that combine high-quality services with thoughtful costs, and include travel and tourism services, organizing tourist and medical trips, and reservations. Hotels, restaurants, car rental, organizing sea and air trips, and arranging other recreational and tourist activities.",
							});
							setModalIsOpen(true);
						}}
					/>
					<Card
						className="lg:w-[40%]"
						title="Athmar Company Brooklyn, NY"
						image={img_4}
						description="Athmar Company provides integrated engineering solutions to the general contracting sector in the field of air using modern technologies and high-quality materials to ensure the provision of air conditioning systems that meet the needs of the local community with efficiency and quality through a work team that has sufficient experience in integrated engineering solutions for air conditioning systems for homes, towers and commercial."
						onClick={() => {
							setModalData({
								image: img_4,
								description:
									"Athmar Company provides integrated engineering solutions to the general contracting sector in the field of air using modern technologies and high-quality materials to ensure the provision of air conditioning systems that meet the needs of the local community with efficiency and quality through a work team that has sufficient experience in integrated engineering solutions for air conditioning systems for homes, towers and commercial complexes, private and government buildings. The company undertakes the design, installation and maintenance of cooling and ai conditioning systems in homes, commercial and industrial buildings and corporat headquarters. Our services also include installation, maintenance, repair and improvemen of cooling, ventilation and air conditioning systems and providing environmenta solutions to increase energy efficiency.",
							});
							setModalIsOpen(true);
						}}
					/>
				</div>
			</section>
		</>
	);
};

export default Subsidiaries;
