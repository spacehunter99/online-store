import React from "react";
import "./style.scss";
import StoreHeader from "../StoreHeader";
import StoreContent from "../StoreContent";
import StoreFooter from "../StoreFooter";
import data from "../../data";
import { Routes, Route } from "react-router-dom";
import CartContent from "../CartContent";
import { ProductInfo } from "../../types/types";

const App: React.FC = () => {
  const [headphones, wirelessHeadphones] = data;
  const [headphonesData, setHeadphonesData] =
    React.useState<ProductInfo[]>(headphones);
  const [wirelessHeadphonesData, setWirelessHeadphonesData] =
    React.useState<ProductInfo[]>(wirelessHeadphones);

  const [chosenGoods, setChosenGoods] = React.useState(
    [JSON.parse(sessionStorage.getItem("goods") as string)] || []
  );

  React.useEffect(() => {
    sessionStorage.setItem("goods", JSON.stringify(chosenGoods));
  }, [chosenGoods]);

  const filteredState = chosenGoods.filter((x) => x);

  function addToCart(item: ProductInfo) {
    let isInArray = false;
    filteredState.forEach((elem) => {
      if (elem.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setChosenGoods((prevState) => [...prevState, item]);
    }
  }

  return (
    <div className="main-container">
      <StoreHeader chosenGoods={chosenGoods} />
      <Routes>
        <Route
          path="/"
          element={
            <StoreContent
              addToCart={addToCart}
              headphonesData={headphonesData}
              wirelessHeadphonesData={wirelessHeadphonesData}
            />
          }
        />
        <Route
          path="/cart"
          element={<CartContent cartData={filteredState} />}
        />
      </Routes>
      <StoreFooter />
    </div>
  );
};

export default App;
