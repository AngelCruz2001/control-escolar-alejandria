import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { payStartGetAllPayments } from "../../../actions/pay";
// import { Separator } from "../../ui/Separator";
// import { Filtered  from './Filtered';
import { SchoolList } from "./SchoolList";
// import { svgs } from '../../../helpers/resources'

export const CheckStatePay = () => {

  const dispatch = useDispatch()
  const { icon } = useSelector(state => state.pay);

  const handleSelect = e => {
    console.log(e.target.innerHTML);
    // const hola = getElementsByClassName("itemPFilterList");
  };

  const handleOnClick = () => {

  }

  return (
    <div className="check-state-pay">

      <div className="check-state-pay__form">
        <form onSubmit={() => console.log("Buscar")}>
          <div className="check-state-pay__form__inIcon">
            <input
              type="text"
              name="materia"
              placeholder="Buscar"
              maxLength="30"
            />
            <span>
              <i className="fas fa-search"></i>
            </span>
          </div>
        </form>
        <span className="check-state-pay__form__filter btn-filter">
          <i className="fas fa-filter"></i>
        </span>
        <button className="check-state-pay__form__timesCircle btn" onClick={handleOnClick}>
            <i className="fas fa-arrow-left "></i>
        </button>
        {/* <img className="check-state-pay__form__filterList" src={svgs.filterBackground} alt="" /> */}
        {/* <div className="check-state-pay__form__filterList">
          <p className="itemPFilterList">Todos los grupos</p>
          <p className="itemPFilterList">Licenciaturas</p>
          <p className="itemPFilterList">Licenciatura en derecho</p>
          <p className="itemPFilterList">Licenciatura en comunicación</p>
          <p className="itemPFilterList">Licenciatura en seguridad publica</p>
          <p className="itemPFilterList">Maestrías</p>
          <p className="itemPFilterList">Maestría en comunicación</p>
          <p className="itemPFilterList">Maestría en seguridad publica</p>
          <p className="itemPFilterList">Estudiantes</p>
        </div> */}
      </div>
      <div className="check-state-pay__list">
        <SchoolList />
      </div>
    </div>
  );
};
