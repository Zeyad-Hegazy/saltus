import { useParams } from "react-router-dom";
import { allComps } from "../data/companies";

const Company = () => {
	const { company } = useParams();

	const comp = allComps.find((comp) => comp.id === company);

	return (
		<section className="flex flex-col justify-center items-center gap-8 my-[2rem] px-[1rem] lg:px-[7rem]">
			<div className="h-[15rem] w-[15rem] xl:self-start">
				<img
					src={comp.image}
					alt={comp.title}
					className="w-full h-full object-contain"
				/>
			</div>
			<div className="mt-[-5rem]">
				<h1 className="text-[#128C76] main-font text-[30px] md:text-[50px]">
					{comp.title}
				</h1>
			</div>
			<div className="py-4 px-2 md:p-4 border-2 border-dashed border-[#128C76] rounded-[10px]">
				<p className="text-[#818181] text-[15px] md:text-[20px] text-justify sm:text-center">
					{comp.full_description}
				</p>
			</div>
			{comp.role && (
				<div className="flex flex-col md:self-end">
					<p className="text-[#818181]">Role</p>
					<p className="text-[#313131]">{comp.role}</p>
				</div>
			)}
		</section>
	);
};

export default Company;
