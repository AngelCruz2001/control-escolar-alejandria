import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { payStartGetFertilizerPay } from "../../actions/pay.js";
import { DataStudentItem } from "./DataStudentItem.js";

export const DataStudentTableFer = () => {
  const { loading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { active, fertilizers } = useSelector((state) => state.pay);
  useEffect(() => {
    if (active) {
      dispatch(payStartGetFertilizerPay(active.matricula));
    }
  }, [active]);
  return (
    <div className="fer__table__data__container ">
      {active ? (
        loading ? (
          <p>Cargandoooooooooooooooooooooooo</p>
        ) : fertilizers.length ? (
          <>
            {fertilizers.map(
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
