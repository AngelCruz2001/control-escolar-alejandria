import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  payClearFertilizers,
  payClearModalData,
  paySetConcept,
  paySetIdPayment,
  paySetPrice,
  paySetThingToPay,
  payStartGetFertilizerPay,
} from "../../actions/pay";
import { studentClearData } from "../../actions/student";
import { activeDisabled } from "../../helpers/activeDisabled";
import { buildDataFertilizer} from "../../helpers/buildDataTables";
import { getDate } from "../../helpers/getDate";
import { Date } from "../ui/Date";
import { Matricula } from "../ui/Matricula";
import { StudentInformation } from "../ui/StudentInformation";
import { Table } from "../ui/Table";
const headers = [
  { title: "FECHA", textAlign: "center" },
  { title: "CONCEPTO", textAlign: "center" },
  { title: "COSTO", textAlign: "center" },
  { title: "ANTICIPO", textAlign: "center" },
  { title: "RESTANTE", textAlign: "center" },
  { title: "", textAlign: "center" },
];

export const FertilizerPay = () => {
  const dispatch = useDispatch();
  const { student, ui, pay } = useSelector((state) => state);
  const { loading } = ui;
  const [dataToShow, setDataToShow] = useState([]);
  const [studentInformation, setStudentInformation] = useState({
    headers: [],
    data: [],
  });

  useEffect(() => {
    setDataToShow([]);
    setStudentInformation({ headers: [], data: [] });
    
    // if(pay.fertilizers) {
      dispatch(studentClearData());
      dispatch(payClearFertilizers());
      // dispatch(uiSetCurrent(0))
      dispatch(payClearModalData());
    // } 
  }, []);

  useEffect(() => {
    setStudentInformation({
      headers: ["Nombre", "Grupo", "Campus", "Carrera"],
      data: [
        student.student_name,
        student.name_group,
        student.campus_name,
        student.major_name,
      ],
    });

    // console.log(student);
    student?.matricula !== '' && dispatch(payStartGetFertilizerPay(student.matricula));

  }, [student.matricula]);
  
  
  useEffect(()=>{
    
  },[])

  const handleClickPayFertilizer = ({
    missing,
    payment_type,
    name,
    id_payment,
  }) => {
    dispatch(paySetPrice(missing));
    dispatch(paySetConcept(payment_type));
    dispatch(paySetThingToPay({ name, id: "" }));
    dispatch(paySetIdPayment(id_payment));
  };



  const handleArrow = () => {
    dispatch(payClearModalData());
    dispatch(studentClearData());
    setDataToShow([]);    
  };

  const generateData = () => {
    const dataShow = [];
    pay.fertilizers.forEach(
      ({
        id_payment,
        payment_date,
        name,
        expected,
        current,
        missing,
        payment_type,
      }) => {
        const date = getDate(payment_date);
        const builData = buildDataFertilizer(
          id_payment,
          date,
          name,
          expected,
          current,
          missing,
          payment_type,
          handleClickPayFertilizer
        );
        dataShow.push(builData);
      }
    );
    setDataToShow(dataShow);
  };

  useEffect(() => {
    student.matricula && generateData();
  }, [loading, pay, student]);

  return (
    <div className="fert">
      <div className="fert__up">
        <Date />
        {student.matricula && (
          <button
            className="btn btn__back fert__back-fert-abs fert__back"
            onClick={handleArrow}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
        )}
        <div className="fert__up__headers">
          <div className="fert__up__headers__matricula">
            <Matricula
              activeClassName={activeDisabled(0, ui.current)}
              matricula={student.matricula}
            />
          </div>
          <div className="fert__up__headers__data">
            {student.matricula ? (
              <StudentInformation
                studentInformation={studentInformation}
                isStudentShowed={false}
                fertiScreen={true}
              />
            ) : (
              <p className="noInformation">
                ¿Deseas liquidar o realizar un abono? Introduce la matrícula del
                alumno para conocer sus conceptos de adeudo.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="fert__down">
        <Table
          data={dataToShow}
          headers={headers}
          sizesColumns={[15, 35, 10, 10, 10, 20]}
        />
      </div>
    </div>
  );
};
