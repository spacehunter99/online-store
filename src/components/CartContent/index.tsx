import React from "react";
import "./style.scss";
import CartProduct from "../CartProduct";
import formatPrice from "../../utils/priceFormatter";
import { ProductInfo } from "../../types/types";

type CartContentProps = {
  cartData: ProductInfo[];
};

const CartContent: React.FC<CartContentProps> = ({ cartData }) => {
  const [allCartData, setAllCartData] = React.useState(cartData);

  const [totalAmount, setTotalAmount] = React.useState({
    price: allCartData.reduce((prev, curr) => prev + curr.priceTotal, 0),
  });

  React.useEffect(() => {
    sessionStorage.setItem("goods", JSON.stringify(allCartData));
  }, [allCartData]);

  React.useEffect(() => {
    setTotalAmount({
      price: allCartData.reduce((prev, curr) => prev + curr.priceTotal, 0),
    });
  }, [allCartData]);

  function deleteCartProduct(id: number) {
    setAllCartData((prevState) => prevState.filter((item) => id !== item.id));
  }

  function increaseCount(id: number) {
    setAllCartData((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
            priceTotal: (item.count + 1) * item.price,
          };
        }
        return item;
      });
    });
  }

  function decreaceCount(id: number) {
    setAllCartData((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          const updatedCount = item.count - 1 > 1 ? item.count - 1 : 1;

          return {
            ...item,
            count: updatedCount,
            priceTotal: updatedCount * item.price,
          };
        }
        return item;
      });
    });
  }

  const cartProduct = allCartData.map((item) => {
    return (
      <CartProduct
        key={item.id}
        info={item}
        deleteCartProduct={deleteCartProduct}
        increaseCount={increaseCount}
        decreaceCount={decreaceCount}
      />
    );
  });

  return (
    <div className="cart-content-container">
      <div className="cart-content-container-products">
        <h2 className="cart-content-container-header">Корзина</h2>
        {allCartData.length > 0 ? (
          <div>{cartProduct}</div>
        ) : (
          <div className="cart-content-container-empty">
            В корзине пока ничего нет
          </div>
        )}
      </div>
      <div className="cart-content-container-total">
        <div className="cart-content-container-total-title-and-price">
          <span className="cart-content-container-total-title">ИТОГО</span>
          <span className="cart-content-container-total-price">
            ₽ {formatPrice(totalAmount.price)}
          </span>
        </div>
        <button className="cart-content-container-button" type="button">
          Перейти к оформлению
        </button>
      </div>
    </div>
  );
};

export default CartContent;
