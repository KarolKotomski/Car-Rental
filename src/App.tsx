import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import Testimonials from "./components/Testimonials";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NoMatch from "./components/NoMatch";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='About' element={<About />} />
				<Route path='Vehicles' element={<Vehicles />} />
				<Route path='Testimonials' element={<Testimonials />} />
				<Route path='Team' element={<Team />} />
				<Route path='Contact' element={<Contact />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
