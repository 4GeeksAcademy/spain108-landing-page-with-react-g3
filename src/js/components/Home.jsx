// Home.jsx
import { Jumbotron } from "./Jumbotron";
import Cards from "../components/Cards";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar.jsx";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100 text-center">
      <Navbar />
      <Jumbotron />

      <div className="container mt-4">
        <div className="row">
          <Cards
            title="Raymond Reddington"
            text="Un hombre elegante con sombrero."
            image="https://static.wikia.nocookie.net/the-blacklist/images/3/3b/Raymond_Reddington.png/revision/latest/scale-to-width-down/1000?cb=20161116015625&path-prefix=es"
          />
          <Cards
            title="Elizabeth Keen"
            text="Perfilista del FBI."
            image="https://static.wikia.nocookie.net/the-blacklist/images/4/4d/Elizabeth_Keen.jpg/revision/latest/scale-to-width-down/250?cb=20140131145520&path-prefix=es"
          />
          <Cards
            title="Donald Ressler"
            text="Agente especial del FBI."
            image="https://static.wikia.nocookie.net/the-blacklist/images/1/17/Donald_Ressler.jpg/revision/latest/scale-to-width-down/250?cb=20140131151937&path-prefix=es"
          />
          <Cards
            title="Harold Cooper"
            text="Subdirector de la división antiterrorista del FBI."
            image="https://static.wikia.nocookie.net/the-blacklist/images/a/a3/Harold_Cooper.jpg/revision/latest/scale-to-width-down/1000?cb=20140131150425&path-prefix=es"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
