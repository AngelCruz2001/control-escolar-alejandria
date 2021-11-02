import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { payStartGetPrice } from "../../actions/pay";

export const TotalPay = () => {
  const { method, totalPayMoney, idPayment, thingToPay, concept } = useSelector(
    (state) => state.pay
  );
  const dispatch = useDispatch();
  const handleClickTotal = () => {
    !idPayment && dispatch(payStartGetPrice());
  };

  return (
    <div className="make__total btn-blue">
      <button
        disabled={
          concept === "Inscripción" ? false : thingToPay.name ? false : true
        }
        className={`make__total-pay btn btn-blue getPay ${
          concept === "Inscripción"
            ? ""
            : thingToPay.name
            ? ""
            : "ui__disabledEffectBtn"
        }`}
        onClick={handleClickTotal}
      >
        Total de pago
      </button>
      {totalPayMoney && (
        <span className="make__total-quantity"> $ {totalPayMoney}.00</span>
      )}
    </div> /*No quiere conectarse. I don´t know Why. 
  // chale que procede?
  // Jajajaja, pues te diría que nada, pero ando muerto. 
  lET'S SLEEP.
  Mañana tengo que acabar una tarea en la mañana. 
  */
    //Fun
  );
};
