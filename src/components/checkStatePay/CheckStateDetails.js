import React, { useEffect, useState } from "react";
import { StudentInformation } from "../ui/StudentInformation";
import { Table } from "../ui/Table";
import { useDispatch, useSelector } from "react-redux";
import { payStartGetFertilizerPay } from "../../actions/pay";
import { studentClearData } from "../../actions/student";
import { buildDataFertilizerDetails } from "../../helpers/buildDataTables";
import { getDate } from "../../helpers/getDate";
import { Searchbar } from "../ui/Searchbar";
import { FilterMajor } from "../ui/filterMajorBnt/FilterMajor";


const headers = [
  { title: "FECHA", textAlign: "center" },
  { title: "CONCEPTO", textAlign: "center" },
  { title: "COSTO", textAlign: "center" },
  { title: "ANTICIPO", textAlign: "center" },
  { title: "RESTANTE", textAlign: "center" },
  { title: "", textAlign: "center" },
];

export const CheckStateDetails = () => {
  const dispatch = useDispatch();

  const { student, ui, pay } = useSelector((state) => state);

  const { loading } = ui;

  const [dataToShow, setDataToShow] = useState([]);

  const [studentInformation, setStudentInformation] = useState({
    headers: [],
    data: [],
  });

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

    student.matricula && dispatch(payStartGetFertilizerPay(student.matricula));
  }, [student]);

  const handleArrow = () => {
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
        const builData = buildDataFertilizerDetails(
          id_payment,
          date,
          name,
          expected,
          current,
          missing,
          payment_type
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
    <div className="gra__container">
      <div className="checkState__headers">
        <Searchbar
        checkState={true}
          placeholder="Buscar alumno"
        //   setValueSearchFilter={setValueSearchFilter}
        //   valueSearchFilter={valueSearchFilter}
        />
        <FilterMajor />
        <button
          className="btn btn__back checkState__headers-back"
          onClick={() => handleArrow()}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>
      <StudentInformation
        studentInformation={studentInformation}
        isStudentShowed={false}
        fertiScreen={true}
      />

      <Table
        data={dataToShow}
        headers={headers}
        sizesColumns={[15, 35, 10, 10, 10, 20]}
      />
    </div>
  );
};
