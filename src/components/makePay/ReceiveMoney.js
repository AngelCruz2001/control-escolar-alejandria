import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paySetAmountToPay } from "../../actions/pay";
import { numberToText } from "../../helpers/numberToText";

export const ReceiveMoney = () => {
  const dispatch = useDispatch();
  const { totalPayMoney } = useSelector((state) => state.pay);
  const [showInput, setShowInput] = useState("$");
  const [inputNumbers, setInputNumbers] = useState("");

  useEffect(() => {
    dispatch(paySetAmountToPay(inputNumbers));
  }, [inputNumbers]);

  const handleInputChange = (e) => {
    if (parseInt(e.key) >= 0) {
      let newNumber = inputNumbers.concat(e.key);
      newNumber =
        parseInt(newNumber) > totalPayMoney
          ? totalPayMoney.toString()
          : newNumber;
      setInputNumbers(newNumber);
      setShowInput(
        `$${newNumber}.00 (${
          newNumber === "1" ? "un peso" : `${numberToText(newNumber)} pesos`
        })`
      );
    } else if (e.key === "Backspace") {
      const deleteNumber = inputNumbers.slice(0, -1);
      setInputNumbers(deleteNumber);
      setShowInput(
        deleteNumber.length > 0
          ? `$${deleteNumber}.00 (${
              deleteNumber === "1"
                ? "un peso"
                : `${numberToText(deleteNumber)} pesos`
            })`
          : "$"
      );
    }
  };

  return (
    <form
      className={`make__formMoney ${
        !totalPayMoney && "ui__disabledEffect inputsPay"
      }`}
    >
      <div className="make__containerInput ">
        <label className="make__titleSection" htmlFor="">
          CANTIDAD
        </label>
        <input
          className="make__money"
          type="text"
          value={showInput}
          onKeyDown={handleInputChange}
          onChange={() => {}}
        />
      </div>
      <div className="make__containerInput">
        <label className="make__titleSection" htmlFor="">
          RESTANTE A PAGAR
        </label>
        <input
          readOnly={true}
          className="make__money make__notAllowed"
          type="text"
          onChange={() => {}}
          value={` $ ${totalPayMoney}`}
          // value={
          //   totalPayMoney === ""
          //     ? ""
          //     : `$${totalPayMoney - inputNumbers} (${
          //         totalPayMoney - inputNumbers === 1
          //           ? "un peso"
          //           : `${numberToText(totalPayMoney - inputNumbers)} pesos`
          //       })`
          // }
        />
      </div>
    </form>
  );
};
