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
    [JSON.parse(sessionStorage.getItem("goods"))] || []
  )

  React.useEffect(() => {
    sessionStorage.setItem("goods", JSON.stringify(chosenGoods))
  }, [chosenGoods])

  function addToCart(item) {
    let isInArray = false 
    let filteredState = chosenGoods.filter(x => x)
    filteredState.forEach(elem => {
      if (elem.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      setChosenGoods(prevState => [...prevState, item])
    }
  }

  console.log(chosenGoods)

  return (
    <div className="main-container">
      <StoreHeader 
        chosenGoods={chosenGoods}
      />
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
