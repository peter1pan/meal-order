import React, { ChangeEvent, useContext, useState } from "react";
import ProductContext from "../Context/ProductContext";
const Siparis = () => {
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const context = useContext(ProductContext);
  const totalMealsPrice = context?.selectedProducts.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);
  const handleOrderAlert = () => {
    if (!city || !address) {
      alert("alanlari doldurun");
    } else {
      alert("Sipariş verildi");
      console.log("adres" + address);
      console.log("şehir" + city);
      window.location.href = "/";
    }
  };
  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div className="adres-details-div">
        <div>
          <label htmlFor="address">Adres: </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleAddress}
          />
        </div>
        <div>
          <label htmlFor="city">Şehir: </label>
          <input type="text" id="city" name="city" onChange={handleCity} />
        </div>
      </div>
      <div className="sepet-meals-details-div">
        <span>Toplam Fiyat = {totalMealsPrice}₺</span>
        <button onClick={handleOrderAlert}>Sipariş ver</button>
      </div>
    </>
  );
};

export default Siparis;
