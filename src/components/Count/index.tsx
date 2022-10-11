import React from "react";
import "./style.scss";

type CountProps = {
  countValue: number;
  increaseCount: (id: number) => void;
  decreaceCount: (id: number) => void;
  id: number;
};

const Count: React.FC<CountProps> = ({
  countValue,
  increaseCount,
  decreaceCount,
  id,
}) => {
  return (
    <div className="count-container">
      <div>
        <button
          type="button"
          className="count-down"
          onClick={() => decreaceCount(id)}
        >
          <img src="./img/logos/count-down.png" alt="decrease" />
        </button>
      </div>
      <div className="count-value">
        <span className="count-value-span">{countValue}</span>
      </div>
      <div>
        <button
          type="button"
          className="count-up"
          onClick={() => increaseCount(id)}
        >
          <img src="./img/logos/count-up.png" alt="increase" />
        </button>
      </div>
    </div>
  );
};

export default Count;
