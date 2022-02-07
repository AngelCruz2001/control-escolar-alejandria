import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Date } from "../ui/Date";
import { OverConceptPay } from "./OverConceptPay";
import { PayCard, PayDeposit } from "./PayMethods";
import { ReceiveMoney } from "./ReceiveMoney";
import { TotalPay } from "./TotalPay";
import { SubmitPay } from "./SubmitPay";
import { ConceptPay } from "./conceptPay/ConceptPay";
import { MethodPay } from "./methodPay/MethodPay";
import { Matricula } from "../ui/Matricula";
import { StudentInformation } from "../ui/StudentInformation";
import { activeDisabled } from "../../helpers/activeDisabled";
import { useParams } from "react-router-dom";
import { uiSetCurrent } from "../../actions/ui";
import { useHistory } from "react-router-dom";
import { studentClearData } from "../../actions/student";
import { payClearFertilizers, payClearModalData } from "../../actions/pay";

export const MakePay = () => {
  const { id } = useParams();

  const { concept, method, thingToPay, idPayment, fertilizers, cards } = useSelector(
    (state) => state.pay
  );
  const dispatch = useDispatch();
  const [studentInformation, setStudentInformation] = useState({
    headers: [],
    data: [],
  });
  const { ui, student } = useSelector((state) => state);
  const { current, loading } = ui;
  let history = useHistory();
  const handleArrow = () => {
    history.push("/abonos");
  };

  useEffect(() => {
    setStudentInformation({
      headers: ["Nombre", "Grupo", "Campus"],
      data: [student.student_name, student.name_group, student.campus_name],
    });

   
  }, [student]);
  useEffect(() => {
    id && dispatch(uiSetCurrent(4));
  }, [id]);

  

  return (
    <div className="make__ ">
      <div className="make__date">
        <Date />
      </div>
      {id && (
        <button className="btn btn__back fert__back-fert-pay" onClick={handleArrow}>
          <i className="fas fa-arrow-left"></i>
        </button>
      )}

      <div className="make__container">
        <div
          className={`make__subContainerLeft ${idPayment ? "ui__noTouch" : ""}`}
        >
          <div className="make__subContainerLeft-matricula" >
            <Matricula
              activeClassName={activeDisabled(0, current)}
              matricula={student.matricula}
            />
          </div>
          <StudentInformation
            activeClassName={activeDisabled(1, current)}
            loading={loading}
            studentInformation={studentInformation}
          />

          <ConceptPay />
        </div>
        {/* .ui__disabledEffect */}
        <div className={`make__subContainerRight `}>
          <MethodPay />

          <TotalPay activeClassName={activeDisabled(4, current)} />

          {!thingToPay.name && concept !== "Inscripción" && concept && (
            <OverConceptPay />
          )}

          {method && method !== "Efectivo" ? (
            method === "Depósito" ? (
              <PayDeposit />
            ) : (
              <PayCard />
            )
          ) : (
            <></>
          )}

          <ReceiveMoney />

          <SubmitPay />
        </div>
      </div>
    </div>
  );
};
