import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { payStartGetFertilizerPay, payStartGetStudentByMatricula } from "../../actions/pay";

export const SpecificInformationStudent = ({ currentStudentFerlizer }) => {
  // const { fertilizers } = useSelector((state) => state.pay);

  const dispatch = useDispatch()

  console.log(currentStudentFerlizer);
  // const {
  //   expected,
  //   current,
  //   missing,
  //   name,
  //   id_payment,
  //   status_payment,
  //   payment_date,
  //   last_payment_date,
  //   payment_type,
  // } = fertilizers;

  return (
    <div className="fer__tableStudentInfo">
      <div className="fer__tableStudentInfo-headers">
        <p>MES</p>
        <p>CONCEPTO</p>
        <p>ESTADO</p>
        <p>COSTO</p>
        <p>PAGADO</p>
        <p>DEBE</p>
      </div>

      <div className="fer__tableStudentInfo-body scroll">
        {currentStudentFerlizer.fertilizers.map((item) => (
          <div
            className="fer__tableStudentInfo-body-item"
            key={item.id_payment}
          >
            <p
              style={{
                color:" #8B9199",
                fontWeight: "500",
              }}
            >{item.last_payment_date}</p>
            <p
              style={{
                color:
                  item.status_payment === 0
                    ? "#AD282C"
                    : item.status_payment === 1
                    ? " #8B9199"
                    : "#B9B756",
                fontWeight: "600",
              }}
            >
              {item.name}
            </p>
            <p
              style={{
                color:
                  item.status_payment === 0
                    ? "#AD282C"
                    : item.status_payment === 1
                    ? "#8B9199"
                    : "B9B756",
                fontWeight: "600",
              }}
            >
              {item.status_payment}
            </p>
            <p
              style={{
                color:
                  item.status_payment === 0
                    ? "#AD282C"
                    : item.status_payment === 1
                    ? "#8B9199"
                    : "#B9B756",
                fontWeight: "500",
              }}
            >
              $ {item.expected}
            </p>
            <p
              style={{
                color:
                  item.status_payment === 0
                    ? "#AD282C"
                    : item.status_payment === 1
                    ? "#8B9199"
                    : "#B9B756",
                fontWeight: "500",
              }}
            >
              $ {item.current}
            </p>
            <p
              style={{
                color:
                  item.status_payment === 0
                    ? "#AD282C"
                    : item.status_payment === 1
                    ? "#8B9199"
                    : "#B9B756",
                fontWeight: "500",
              }}
            >
              $ {item.missing}
            </p>
          </div>
        ))}
        <Link
          to="./consultar_estado_de_pago/informacion"
          className="fer__tableStudentInfo-footer "
          onClick={() => {
            dispatch(payStartGetStudentByMatricula(currentStudentFerlizer.matricula));
            dispatch(payStartGetFertilizerPay(currentStudentFerlizer.matricula));
          }}
          currentstudentferlizer={currentStudentFerlizer}
        >
          <button className="btn"> ver más... </button>
        </Link>
      </div>
    </div>
  );
};
