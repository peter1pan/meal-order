import React from "react";
import "./StyleScss/_aboutus.scss";
import deliver from "./img/deliver-image.jpg";
const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div>
        <h1 className="about-us-tittle">FOOD DELIVERY</h1>
      </div>
      <div className="description-div">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          quibusdam minus, incidunt vero atque iure non est eos maiores,
          similique sequi. Iure quis doloremque nesciunt
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam expedita
          rerum necessitatibus tenetur esse provident quae autem quas fugit
          adipisci?
        </span>
      </div>
      <div className="stay-home-div">
        <h2>Stay home, Stay safe</h2>
        <span>We'll deliver to you</span>
        <img className="deliver-image" src={deliver} alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
