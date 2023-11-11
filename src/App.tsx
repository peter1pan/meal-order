import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
//css
import "../src/Mainscss/Style.scss";
//layouts
import MainLayout from "./Layout/MainLayout";
import RestorantLayout from "./Layout/RestorantLayout";
//compoenents
import Burger from "./Components/RestoranlarComponent/meals/Burger";
//pages
import AnaSayfa from "./Pages/AnaSayfa";
import Sepet from "./Pages/Sepet";
//context
import ProductContext, {
  BasketRow,
  ProductTypes,
} from "./Context/ProductContext";
import Siparis from "./Pages/Siparis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/sepet", element: <Sepet /> },
      { path: "/", element: <AnaSayfa /> },
      {
        path: "/restoranlar",
        element: <RestorantLayout />,
        children: [
          {
            path: "/restoranlar/burger",
            element: <Burger />,
          },
        ],
      },
      { path: "/siparis", element: <Siparis /> },
    ],
  },
]);

function App() {
  const [products] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState<BasketRow[]>([]);
  const [addedBasket, setAddedBasket] = useState<boolean>(true);

  const handleAddedBasket = () => {
    setAddedBasket(true);
    setTimeout(() => {
      setAddedBasket(false);
    }, 2000);
  };

  const selectProduct = (product: ProductTypes) => {
    handleAddedBasket();
    const index = selectedProducts.findIndex(
      (item) => item.product.id === product.id
    );
    if (index > -1) {
      const updatedList = selectedProducts.map((item) => {
        if (item.product.id === product.id) {
        
          item.count += 1;
          item.totalPrice = item.count * item.product.price;
        }
        return item;
      });
      setSelectedProducts(updatedList);
    } else {
      const newProduct = {
        count: 1,
        product: product,
        totalPrice: product.price,
      };
      setSelectedProducts((prevSelectedProducts) => [
        ...prevSelectedProducts,
        newProduct,
      ]);
    }
  };
  function generateUniqueId(): number {
    return Math.floor(Math.random() * 100);
  }
  const deleteProduct = (product: ProductTypes) => {
    const index = selectedProducts.findIndex(
      (item) => item.product.id === product.id
    );

    if (index > -1) {
      const updatedList = selectedProducts.filter(
        (item) => item.product.id !== product.id
      );
      setSelectedProducts(updatedList);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProducts,
        addedBasket,
        selectProduct,
        generateUniqueId,
        handleAddedBasket,
        deleteProduct,
      }}
    >
      <RouterProvider router={router} />
    </ProductContext.Provider>
  );
}

export default App;
