import React from "react";
import { Jumbotron } from "./Jumbotron";
import Cards from "../components/Cards";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
       <Jumbotron/>
	   <Cards title="Hombre con sombrero"/>
	   <Cards title="Señorita invierno"/>
	   
		</div>
	);
};

export default Home;