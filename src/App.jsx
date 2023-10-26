import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Loading from "./UI/loader/Loading";

const Home = lazy(() => import("./pages/Home.jsx"));
const Company = lazy(() => import("./pages/Company"));
const Governance = lazy(() => import("./pages/Governance.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const ContactForm = lazy(() => import("./pages/ContactForm.jsx"));
const CeoMessage = lazy(() => import("./pages/CeoMessage.jsx"));

const App = () => {
	return (
		<>
			<Navbar />
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:company" element={<Company />} />
					<Route path="/governance" element={<Governance />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<ContactForm />} />
					<Route path="/ceo-message" element={<CeoMessage />} />
				</Routes>
			</Suspense>
			<Footer />
		</>
	);
};

export default App;
