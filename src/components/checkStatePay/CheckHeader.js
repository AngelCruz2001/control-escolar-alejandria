import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { payClearActivePay } from "../../actions/pay";


export const CheckHeader = () => {
  const dispatch = useDispatch()
  const { students, fertilizers } = useSelector((state) => state.pay);
     const his = useHistory();
  const handleReturn = () => {
    dispatch(payClearActivePay())
    his.goBack();
    
  };

  return (
    <div className="check-state-pay__form">
      <form onSubmit={() => console.log("Buscar")}>
        <div className="check-state-pay__form__inIcon">
          <input
            type="text"
            name="materia"
            placeholder="Buscar"
            maxLength="50"
          />
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </form>
      <span className="check-state-pay__form__filter btn-filter">
        <i className="fas fa-filter"></i>
      </span>
      {students.length > 1 || fertilizers && (
        <button
          className="check-state-pay__form__timesCircle btn"
          onClick={handleReturn}
        >
          <i className="fas fa-arrow-left "></i>
        </button>
      )}
    </div>
  );
};
