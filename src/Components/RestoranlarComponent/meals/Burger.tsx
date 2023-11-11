import React from "react";
import "./_restorant.scss";
import useFetch from "../../../Fetch/useFetch";
import BurgerComponent from "../MealsComponent/BurgerComponents/BurgerComponent";

const Burger = () => {
  const url = "http://localhost:3000/burger";
  const { data: burgers, isLoading, error } = useFetch(url);
  return (
    <section>
      {isLoading && (
        <p>
          <i className="fa-solid fa-spinner fa-spin"></i>Loading...
        </p>
      )}
      {error && <p> {error}</p>}
      {burgers &&
        burgers.map(
          (burger: {
            title: string;
            price: number;
            id: number;
            count: number;
          }) => (
            <div className="burgercomponent-div" key={burger.id}>
              <BurgerComponent burger={burger} />
            </div>
          )
        )}
    </section>
  );
};

export default Burger;
