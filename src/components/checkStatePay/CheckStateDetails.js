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
import { isACoincidenceSearch } from "../../helpers/isACoincidence";
import { useHistory } from "react-router-dom";

const headers = [
  { title: "MES", textAlign: "left" },
  { title: "CONCEPTO", textAlign: "left" },
  { title: "ESTADO", textAlign: "center" },
  { title: "COSTO", textAlign: "center" },
  { title: "PAGADO", textAlign: "center" },
  { title: "DEBE", textAlign: "center" },
];

export const CheckStateDetails = () => {
  const dispatch = useDispatch();

  const { student, ui, pay } = useSelector((state) => state);
  let history = useHistory();
  const { loading } = ui;

  const [dataToShow, setDataToShow] = useState([]);

  const [valueSearchFilter, setValueSearchFilter] = useState({
    searchWord: "",
  });

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
    history.goBack()
  };

  const generateData = () => {
    const dataShow = [];

    const { searchWord } = valueSearchFilter;
    
    pay.fertilizers.forEach(
      ({
        payment_date,
        payment_type,
        status_payment,
        expected,
        current,
        missing,
      }) => {
        const date = getDate(payment_date);

        const coincidence = isACoincidenceSearch(
          [payment_type, status_payment, expected, current, missing],
          searchWord
        );

        const builData = buildDataFertilizerDetails(
          date,
          payment_type,
          status_payment,
          expected,
          current,
          missing,
          coincidence
        );
        if (searchWord === "") {
          dataShow.push(builData);
        } else if (coincidence.includes(true)) {
          dataShow.push(builData);
        }
      }
    );
    setDataToShow(dataShow);
  };

  useEffect(() => {
    student.matricula && generateData();
  }, [loading, pay, student]);

  return (
    <div className="gra__container checkState__detail">
      <div className="checkState__headers">
        <Searchbar
          checkState={true}
          placeholder="Buscar"
          setValueSearchFilter={setValueSearchFilter}
          valueSearchFilter={valueSearchFilter}
        />
        <FilterMajor />
        <button
          className="btn btn__back checkState__headers-back"
          onClick={() => handleArrow()}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>
      <div className="checkState__detail-student">
        <StudentInformation
          studentInformation={studentInformation}
          isStudentShowed={false}
          fertiScreen={true}
        />
      </div>

      <div className="checkState__detail-details">
        <Table
          data={dataToShow}
          headers={headers}
          sizesColumns={[20, 37, 12, 12, 10, 8]}
        />
      </div>
    </div>
  );
};


