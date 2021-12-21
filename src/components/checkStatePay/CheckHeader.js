import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { payClearActivePay } from "../../actions/pay";
import { Searchbar } from "../ui/Searchbar";
import { CheckFilteredData } from "./CheckFilteredData";

export const CheckHeader = () => {

  const [filter, setFilter] = useState(false);

  const dispatch = useDispatch();
  const { active, payments } = useSelector((state) => state.pay);
  const his = useHistory();
  const handleReturn = () => {
    dispatch(payClearActivePay());
    his.goBack();
  };

  console.log(payments);

  const handleFilter = () => {
    setFilter(!filter)
  }

  return (
    <div className="check-state-pay__form">
      <form onSubmit={() => console.log("Buscar")}>
        <div className="check-state-pay__form__inIcon">
          <span>
            <i className="fas fa-search"></i>
          </span>
          <input type="text" placeholder="Buscar" maxLength="50" />
          {/* <Searchbar data={payments} /> */}
        </div>
      </form>
      <button 
        onClick={handleFilter}
        className="check-state-pay__form__filter btn-filter btn">
        <i className="fas fa-filter"></i>
      </button>
      {
        filter && <CheckFilteredData />
      }
      {active && (
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
