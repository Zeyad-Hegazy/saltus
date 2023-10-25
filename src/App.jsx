import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import CeoMessage from "./pages/CeoMessage.jsx";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<ContactForm />} />
				<Route path="/ceo-message" element={<CeoMessage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
