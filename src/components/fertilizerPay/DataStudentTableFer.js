import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { payStartGetFertilizerPay } from "../../actions/pay.js";
import { DataStudentItem } from "./DataStudentItem.js";
import { EmptyTableFer } from "./EmptyTableFer.js";

export const DataStudentTableFer = () => {
  const { loading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { active, fertilizers } = useSelector((state) => state.pay);
  // console.log(fertilizers[0].fertilizers);
  const [tableNum, setTableNum] = useState([])

  useEffect(() => {
    if (active) {
      dispatch(payStartGetFertilizerPay(active.matricula));
    }
    
    const num = []
    for (let i = 0; i < 6; i++) {
      num.push(i + 1)  
    }
    setTableNum(num)
  }, [active]);

  // console.log(tableNum);
  return (
    <div className="fer__table__data__container scroll">
      {!active && tableNum.map( n => ( <EmptyTableFer key={n}/>) ) }

      {active ? (
        loading ? (
          <p>Cargandoooooooooooooooooooooooo</p>
        ) : fertilizers[0] ? (
          <>
            {fertilizers[0].fertilizers.map(
              (fertilizer, i) =>
                fertilizer.status_payment === 0 && (
                  <DataStudentItem key={i} {...fertilizer} />
                )
            )}
          </>
        ) : (
          <>
            <center>
              <p>Ups, parece que no hay abonos</p>
            </center>
          </>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
