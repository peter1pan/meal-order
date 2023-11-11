import React from "react";
import "./StyleScss/_cards.scss";
import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <section className="cards-section">
      <div className="cards">
        <h3>Menu</h3>
        <span>Over 200 meals including healthy and fast food.</span>
        <Link to="/restoranlar">
          Check Now <i className="fa-solid fa-chevron-right fa-xs"></i>
        </Link>
      </div>
      <div className="cards">
        <h3>Best Offers</h3>
        <span>Daily special offers at low prices for our loyal customers.</span>
        <Link to="/restoranlar">
          Check Now <i className="fa-solid fa-chevron-right fa-xs"></i>{" "}
        </Link>
      </div>
      <div className="cards">
        <h3>Today's Deal</h3>
        <span>Hot deals for popular meals with 24 hours availability.</span>
        <Link to="/restoranlar">
          Check Now <i className="fa-solid fa-chevron-right fa-xs"></i>
        </Link>
      </div>
    </section>
  );
};

export default Cards;
