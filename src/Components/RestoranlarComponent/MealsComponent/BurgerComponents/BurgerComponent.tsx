import React, { useContext } from "react";

import "../MealsMain.scss";
import "./_burgercomponent.scss";
import ProductContext, {
  ProductTypes,
} from "../../../../Context/ProductContext";
import { Link } from "react-router-dom";


const BurgerComponent = (burger: { burger: ProductTypes }) => {
  const context = useContext(ProductContext);
  return (
    <div className="meals-card">
      <div className="details-meals-div">
        <span>{burger.burger.title}</span>
        <span>{burger.burger.price}₺</span>
        <Link to="/sepet">
          <button onClick={() => context?.selectProduct(burger.burger)}>
            Sepete ekle
          </button>
        </Link>
      </div>
      <div className="image-div">img</div>
    </div>
  );
};

export default BurgerComponent;
