import React, { useEffect } from "react";
import { numberToText } from "../../helpers/numberToText";
import { useInputAmount } from "../../hooks/useInputAmount";

const pesosOrPeso = (quantity) => {
  if (quantity === "1") {
    return "(un peso)";
  }
  return `(${numberToText(quantity)} pesos)`;
};

export const Quantity = ({ handleQuantityChange, startQuantity }) => {



  const [amountToPay, showInput, handleInputChange] =
    useInputAmount(startQuantity);

  useEffect(() => {
    handleQuantityChange(amountToPay);
  }, []);

  return (
    <div className="quan__container ">
      <p className="general__titleSection quantity">Cantidad</p>
      <input
        className="styledInput"
        type="text"
        value={showInput}
        onKeyDown={handleInputChange}
        onChange={() => {}}
      />
    </div>
  );
};
