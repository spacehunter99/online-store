import React from 'react';
import './style.scss'
import StoreHeader from '../StoreHeader';
import StoreContent from '../StoreContent';
import StoreFooter from '../StoreFooter';
import data from "./../../data";

function App() {

  const [headphones, wirelessHeadphones] = data

  const [headphonesData, setHeadphonesData] = React.useState(headphones)
  const [wirelessHeadphonesData, setWirelessHeadphonesData] = React.useState(wirelessHeadphones)

  const [chosenGoods, setChosenGoods] = React.useState(
    JSON.parse(sessionStorage.getItem("goods")) || []
  )

  React.useEffect(() => {
    sessionStorage.setItem("goods", JSON.stringify(chosenGoods))
  }, [chosenGoods])

  function addToCart(event) {
    console.log(event.target)
  }

  return (
    <div className="main-container">
      <StoreHeader />
      <StoreContent 
        addToCart={addToCart}  
        headphonesData={headphonesData}
        wirelessHeadphonesData={wirelessHeadphonesData}
      />
      <StoreFooter />
    </div>
  );
}

export default App;
