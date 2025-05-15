import React from "react";
import { Jumbotron } from "./Jumbotron";
import Cards from "../components/Cards";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
       <Jumbotron/>
	   <div className="container mt-4">
				<div className="row">
					<Cards
						title="Primera card"
						text="Primera descripcion."
						image="https://static.wikia.nocookie.net/the-blacklist/images/3/3b/Raymond_Reddington.png/revision/latest/scale-to-width-down/1000?cb=20161116015625&path-prefix=es"
					/>
					<Cards
						title="Segunda card"
						text="Segunda descripcion."
						image="https://static.wikia.nocookie.net/the-blacklist/images/4/4d/Elizabeth_Keen.jpg/revision/latest/scale-to-width-down/250?cb=20140131145520&path-prefix=es"
					/>
					<Cards
						title="Tercera card"
						text="Tercera descripcion."
						image="https://static.wikia.nocookie.net/the-blacklist/images/1/17/Donald_Ressler.jpg/revision/latest/scale-to-width-down/250?cb=20140131151937&path-prefix=es"
					/>
					<Cards
						title="Cuarta card"
						text="Cuarta descripcion."
						image="https://static.wikia.nocookie.net/the-blacklist/images/a/a3/Harold_Cooper.jpg/revision/latest/scale-to-width-down/1000?cb=20140131150425&path-prefix=es"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;