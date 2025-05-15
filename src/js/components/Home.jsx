import { Jumbotron } from "./Jumbotron";
import Cards from "../components/Cards";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar.jsx";
//create your first component
const Home = () => {
	return (
		
		<div className="d-flex flex-column min-vh-100 text-center ">
			<Navbar />
			<Jumbotron />
			<Cards title="Hombre con sombrero" />
			<Cards title="Señorita invierno" />
			<Footer />
		</div>


	);
};

export default Home;