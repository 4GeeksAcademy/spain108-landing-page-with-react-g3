import React from "react";
import { Jumbotron } from "./Jumbotron";
import Cards from "../components/Cards";
import { Footer } from "./Footer";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
			<div className="d-flex flex-column min-vh-100 text-center ">
				<Jumbotron />
				<Cards title="Hombre con sombrero" />
				<Cards title="Señorita invierno" />
				<footer />
			</div>
			<Footer/>
		</>
	);
};

export default Home;