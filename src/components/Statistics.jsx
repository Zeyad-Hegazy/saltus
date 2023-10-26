const Statistics = () => {
	return (
		<section className="my-[4rem]">
			<h1 className="main-font text-center text-[35px] mb-[4rem]">Number Of</h1>
			<div className="flex justify-center items-center gap-4 flex-wrap px-4 md:px-0">
				<div className="gradient h-fit w-full md:w-[45%] xl:w-[20%] p-[3rem] flex flex-col justify-center items-center rounded-[10px] gap-2">
					<h5 className="text-white main-font">Subsidiaries</h5>
					<p className="text-white">4</p>
				</div>
				<div className="reverse-gradient h-fit w-full md:w-[45%] xl:w-[20%] p-[3rem] flex flex-col justify-center items-center rounded-[10px] gap-2">
					<h5 className="text-white main-font">Sister Companies</h5>
					<p className="text-white">3</p>
				</div>
				<div className="gradient h-fit w-full md:w-[45%] xl:w-[20%] p-[3rem] flex flex-col justify-center items-center rounded-[10px] gap-2">
					<h5 className="text-white main-font">Complated Projects</h5>
					<p className="text-white">63</p>
				</div>
				<div className="reverse-gradient h-fit w-full md:w-[45%] xl:w-[20%] p-[3rem] flex flex-col justify-center items-center rounded-[10px] gap-2">
					<h5 className="text-white main-font">Projects In Progress</h5>
					<p className="text-white">4</p>
				</div>
			</div>
		</section>
	);
};

export default Statistics;
