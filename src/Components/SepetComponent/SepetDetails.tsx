import React, { useContext, useState } from "react";
import ProductContext, { ProductTypes } from "../../Context/ProductContext";
import { Link } from "react-router-dom";
import { Collapse, Alert } from "react-bootstrap";
//scss
import "./_sepetDetails.scss";

interface CheckboxStates {
  istemiyorum: boolean;
  turşu: boolean;
  patates: boolean;
}

export const SepetDetails: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>({
    istemiyorum: false,
    turşu: false,
    patates: false,
  });

  const context = useContext(ProductContext);
  const totalMealsPrice = context?.selectedProducts.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);

  const handleCheckboxChange = (checkboxName: keyof CheckboxStates) => {
    setCheckboxStates({
      ...checkboxStates,
      [checkboxName]: !checkboxStates[checkboxName],
    });
  };

  const isAtLeastOneCheckboxSelected = Object.values(checkboxStates).some(
    (value) => value === true
  );

  return (
    <>
      {context?.selectedProducts.length === 0 ? (
        <div>
          <span>Sepetiniz boş</span>
        </div>
      ) : (
        <>
          {context?.selectedProducts.map((item: { product: ProductTypes }) => (
            <div
              className="sepet-meals-details-div"
              key={context.generateUniqueId()}
            >
              <span>{item.product.title}</span>
              <span>{item.product.price}₺</span>
              <button onClick={() => context.deleteProduct(item.product)}>
                X
              </button>
            </div>
          ))}
          <button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Ekstra malzeme seçin
          </button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <div>
                <input
                  type="checkbox"
                  id="istemiyorum"
                  checked={checkboxStates.istemiyorum}
                  onChange={() => handleCheckboxChange("istemiyorum")}
                />
                <label htmlFor="istemiyorum">İstemiyorum</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="turşu"
                  checked={checkboxStates.turşu}
                  onChange={() => handleCheckboxChange("turşu")}
                />
                <label htmlFor="turşu">Turşu</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="patates"
                  checked={checkboxStates.patates}
                  onChange={() => handleCheckboxChange("patates")}
                />
                <label htmlFor="patates">Patates</label>
              </div>
            </div>
          </Collapse>
          {isAtLeastOneCheckboxSelected ? (
            <div className="total-meals-price">
              <div className="meals-details-div">
                <span> Toplam Fiyat = {totalMealsPrice}₺</span>
                <Link to="/siparis">
                  <button>Sipariş ver</button>
                </Link>
              </div>
            </div>
          ) : (
            <Alert variant="danger">
              En az bir ekstra malzeme seçmelisiniz!
            </Alert>
          )}
        </>
      )}
    </>
  );
};
