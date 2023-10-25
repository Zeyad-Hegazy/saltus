import ReactDOM from "react-dom";
import close from "../../assets/icons/close.png";

const Backdrop = ({ onClick, children }) => {
	return (
		<div
			className="fixed top-0 left-0 w-full h-full z-[20] bg-[#000000bf] overflow-hidden flex justify-center items-center"
			onClick={() => onClick(false)}
		>
			{children}
		</div>
	);
};

const CardOverlay = ({ card, onClick }) => {
	return (
		<div className="w-[80%] h-auto rounded-[15px] relative bg-white py-8">
			<img
				src={close}
				alt="close icon"
				className="w-6 h-6 absolute top-8 right-8 cursor-pointer"
				onClick={() => onClick(false)}
			/>
			<div className="w-full flex justify-between items-center px-2 sm:px-[6rem]">
				<img
					src={card.image}
					alt="image sister company"
					className="w-[6rem] h-[6rem] sm:mr-[60px] sm:w-[10rem] sm:h-[10rem] xl:w-[320px] xl:h-[12rem] rounded-[15px] shadow-lg"
				/>
				<div>
					<span className="block text-[#818181] text-[14px]">Role:</span>
					<p className="font-medium text-[10px] md:text-[17px] text-[#128C76]">
						{card.role}
					</p>
				</div>
			</div>
			<p className="px-4 md:px-[6rem] py-2 text-[#818181] text-[10px] sm:text-[17px] md:text-[20px] xl:text-[25px]">
				{card.description}
			</p>
		</div>
	);
};

const CardModal = ({ onClick, cardObj }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={onClick}>
					<CardOverlay card={cardObj} onClick={onClick} />,
				</Backdrop>,
				document.getElementById("backdrop-root")
			)}
		</>
	);
};

export default CardModal;
