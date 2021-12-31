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

export const CheckStateDetails = ({setIsAStudenttActive}) => {
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
    setIsAStudenttActive(false)
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
          [date, payment_type, status_payment, expected, current, missing],
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
    // student.matricula && generateData();
    if (student.length !== 0) generateData();
  }, [loading, valueSearchFilter]);

  return (
    <div className="gra__container checkState__detail">
      <div className="checkState__headers">
        <div className="checkState__headers-search">
          <Searchbar
            placeholder="Buscar"
            setValueSearchFilter={setValueSearchFilter}
            valueSearchFilter={valueSearchFilter}
          />
        </div>
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
        {!!pay.fertilizers.length ==!0 ? (
          <Table
            data={dataToShow}
            headers={headers}
            sizesColumns={[20, 37, 12, 12, 10, 8]}
          />
        ) : (
          <p style={{ display: "grid", placeItems: "center" }}>
            <strong>No hay información para mostrar</strong>
          </p>
        )}
      </div>
    </div>
  );
};
