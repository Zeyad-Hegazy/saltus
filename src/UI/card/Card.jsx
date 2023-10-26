import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Card = ({ image, title, description, className, target }) => {
  return (
    <div
      className={`h-auto w-[320px] rounded-[15px] shadow-2xl transition-all duration-100 hover:translate-y-[-10px] ${className} flex flex-col justify-between`}
    >
      <div className="h-[12rem] w-full flex justify-center items-center mb-4">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-4 mb-2">
        <h3 className="mb-2 text-[23px] font-bold text-[#128c76]">{title}</h3>
        <p className="text-[16px] text-[#333333]">{description}</p>
      </div>
      <Link
        to={`/${target}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <button className="w-full text-center py-4 mainBg text-[#FFFFFF] rounded-br-[15px] rounded-bl-[15px]">
          View More
        </button>
      </Link>
    </div>
  );
};

export default Card;
