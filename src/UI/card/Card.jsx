/* eslint-disable react/prop-types */
const Card = ({ image, title, description, onClick, className }) => {
	return (
		<div
			className={`h-auto w-[320px] rounded-[15px] shadow-2xl transition-all duration-100 hover:translate-y-[-10px] ${className}`}
		>
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

export default Card;
