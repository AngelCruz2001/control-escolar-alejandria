import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

import { payStartGetAllPayments } from "../../actions/pay";
// import {svg}  from '../../../../helpers/resources'
// import { types } from '../../../types/types';
import { ItemPaySchoolList } from "./ItemPaySchoolList";

export const SchoolList = () => {
  const { payments, students } = useSelector((state) => state.pay);
  const { active } = useSelector((state) => state.pay);
  const { loadingStudent } = useSelector((state) => state.ui);
  const { loading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(payStartGetAllPayments());
  }, []);

  return (
    <>
      <div className="check-state-pay__list__headers school-list">
        <div>
          <p> {!active ? "Todos los grupos" : active} </p>
        </div>
        <div>
          <p>Total</p>
        </div>
        <div>
          <p>
            Total
            <br /> Pagado
          </p>
          {/* <img src={svg.filterLines} alt="" /> */}
        </div>
        <div>
          <p>
            Total
            <br /> Adeudo
          </p>
          {/* <img src={svg.filterLines} alt="" /> */}
        </div>
        <div></div>
      </div>
      <div className="check-state-pay__list__container scroll">
        {!students.length ? (
          loadingStudent ? (
            <h1>Cargando...</h1>
          ) : (
            payments.map((payment) => (
              <ItemPaySchoolList key={payment.id_group} data={payment} />
            ))
          )
        ) : (
          students.map((student) => (
            <ItemPaySchoolList key={student.id_student} data={student} />
          ))
        )}
      </div>
    </>
  );
};
