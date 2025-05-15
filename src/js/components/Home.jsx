import React from "react";
import { Jumbotron } from "./Jumbotron";
import Cards from "../components/Cards";
//include images into your bundle

import { Navbar } from "./Navbar.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
       <Jumbotron/>
	   <Cards title="Hombre con sombrero"/>
	   <Cards title="Señorita invierno"/>
	   
        
			
		</div>
	);
};

export default Home;