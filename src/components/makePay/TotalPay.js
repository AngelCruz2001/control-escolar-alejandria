import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { payStartGetPrice } from "../../actions/pay";

export const TotalPay = () => {

  const { method, totalPayMoney, idPayment } = useSelector(state => state.pay);
  const dispatch = useDispatch()
  const handleClickTotal = () => {
    !idPayment && dispatch(payStartGetPrice());
  }
  
  return (
    <div className="make__total btn-blue">
      <button className={`make__total-pay btn btn-blue getPay ${!method && 'ui__disabledEffect totalPay'}`} onClick={handleClickTotal}>Total de pago</button>
      <span className="make__total-quantity">{totalPayMoney}</span>
    </div> /*No quiere conectarse. I don´t know Why. 
  // chale que procede?
  // Jajajaja, pues te diría que nada, pero ando muerto. 
  lET'S SLEEP.
  Mañana tengo que acabar una tarea en la mañana. 
  */ 
  );
}