import React from "react";

const Cards = () => {
  const cards = [
    {
      title: "Card title",
      text: "Card 1.",
      image: "https://static.wikia.nocookie.net/the-blacklist/images/3/3b/Raymond_Reddington.png/revision/latest/scale-to-width-down/1000?cb=20161116015625&path-prefix=es"
    },
    {
      title: "Card title",
      text: "Card 2.",
      image: "https://static.wikia.nocookie.net/blacklist/images/9/92/Elizabeth_Keen.png/revision/latest?cb=20170923192242"
    },
    {
      title: "Card title",
      text: "Card 3.",
      image: "https://static.wikia.nocookie.net/blacklist/images/6/6c/2CastPhoto6.jpg/revision/latest?cb=20170505212140"
    },
    {
      title: "Card title",
      text: "Card 4.",
      image: "https://static.wikia.nocookie.net/the-blacklist/images/a/a3/Harold_Cooper.jpg/revision/latest/scale-to-width-down/1000?cb=20140131150425&path-prefix=es"
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card, i) => (
          <div className="col-md-3 mb-4" key={i}>
            <div className="card h-100">
              <img
                src={card.image}
                className="card-img-top img-fluid"
                alt="..."
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <div className="mt-auto">
                  <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
