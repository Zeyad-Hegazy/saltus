import Hero from "../components/Hero";
import SisComps from "../components/SisComps";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Subsidiaries from "./../components/Subsidiaries";

const Home = () => {
	return (
		<>
			<Hero />
			<Subsidiaries />
			<SisComps />
			<Services />
			<Contact />
		</>
	);
};

export default Home;
