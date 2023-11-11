import React from "react";

export interface ProductTypes {
  id: number;
  title: string;
  price: number;
  count: number;
}

export interface BasketRow {
  product: ProductTypes;
  count: number;
  totalPrice: number;
}

const ProductContext = React.createContext<
  | {
      products: ProductTypes[];
      selectedProducts: BasketRow[];
      addedBasket: boolean;
      selectProduct: (product: ProductTypes) => void;
      generateUniqueId: () => number;
      handleAddedBasket: () => void;
      deleteProduct: (product: ProductTypes) => void;
    }
  | undefined
>(undefined);

export default ProductContext;
