import Hero from "../components/Hero";
import SisComps from "../components/SisComps";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Subsidiaries from "./../components/Subsidiaries";
import Statistics from "../components/Statistics";

const Home = () => {
	return (
		<>
			<Hero />
			<Subsidiaries />
			<Statistics />
			<SisComps />
			<Services />
			<Contact />
		</>
	);
};

export default Home;
