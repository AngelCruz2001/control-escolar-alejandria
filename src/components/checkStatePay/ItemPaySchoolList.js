import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  payStartGetStudentsByGroup,
  payStartGetFertilizerPay,
  paySetActivePay,
} from "../../actions/pay";
import { SpecificInformationStudent } from "./SpecificInformationStudent";

export const ItemPaySchoolList = ({ data }) => {
  const {
    name_group = "",
    id_group = "",
    money_exp,
    money,
    missing,
    matricula = "",
    student_fullname = "",
  } = data;

  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const { payments, students, fertilizers, active } = useSelector(
    (state) => state.pay
  );

  const currentStudentFerlizer = fertilizers.find(
    (item) => item.matricula === matricula
  );

  const currentFertilizerLenght = fertilizers.some(
    (item) => item.fertilizers.length !== 0
  );
  // console.log(currentFertilizerLenght);

  // useEffect(() => {
  //   dispatch(payStartGetFertilizerPay());
  // }, []);

  const handleOnClick = (value, active, toggle) => {
    if (name_group) {
      dispatch(payStartGetStudentsByGroup(value, active));
    } else {
      console.log("estoy cargando fertilizers");
      dispatch(payStartGetFertilizerPay(value));
      setToggle(!toggle);
    }
  };

  return (
    <>
      <div className="check-state-pay__list__container__item school-list">
        <p className="nameGroup">
          {name_group ? name_group : student_fullname}
        </p>
        <p className="total">${money_exp}.00</p>
        <p className="paid">${money}.00</p>
        <p className="pending">${missing}.00</p>
        <div
          onClick={() =>
            handleOnClick(name_group ? id_group : matricula, name_group, toggle)
          }
        >
          <Link
            to={`${
              !matricula && `./consultar_estado_de_pago/grupo`
              // : `/consultar_estado_de_pago/${active}/${matricula}`
            }`}
          >
            <i className={`fas ${name_group ? "fa-eye" : "fa-sort-down"}`}></i>
          </Link>
        </div>
      </div>

      {toggle && currentStudentFerlizer && currentFertilizerLenght && (
        <SpecificInformationStudent
          currentStudentFerlizer={currentStudentFerlizer || {}}
        />
      )}
    </>
  );
};
