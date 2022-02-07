import React, { useEffect, useState } from "react";
import { StudentInformation } from "../ui/StudentInformation";
import { Table } from "../ui/Table";
import { useDispatch, useSelector } from "react-redux";
import { payClearFertilizers, payStartGetFertilizerPay } from "../../actions/pay";
import { studentClearData } from "../../actions/student";
import { buildDataFertilizerDetails } from "../../helpers/buildDataTables";
import { getDate } from "../../helpers/getDate";
import { Searchbar } from "../ui/Searchbar";
import { isACoincidenceSearch } from "../../helpers/isACoincidence";

const headers = [
  { title: "MES", textAlign: "left" },
  { title: "CONCEPTO", textAlign: "left" },
  { title: "ESTADO", textAlign: "center" },
  { title: "COSTO", textAlign: "center" },
  { title: "PAGADO", textAlign: "center" },
  { title: "DEBE", textAlign: "center" },
];

export const CheckStateDetails = ({ setIsAStudenttActive }) => {
  const dispatch = useDispatch();

  const { student, ui, pay } = useSelector((state) => state);

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

    // student.matricula && dispatch(payStartGetFertilizerPay(student.matricula));

    

  }, [student]);

  const handleArrow = () => {
    // dispatch(payClearFertilizers());
    dispatch(studentClearData());
    setIsAStudenttActive(false);
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

        // if (status_payment === 0)  status_payment.style.setAttribute("style","background-color:#6ab150;") 
        if (status_payment === 0)  status_payment ="ANTICIPADO" 
        if (status_payment === 1)  status_payment ="PAGADO"
        if (status_payment === 2)  status_payment ="NO PAGADO"
       

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
    <>
      <div className="checkState__headers">
        <div className="checkState__headers-search">
          <Searchbar
            placeholder="Buscar"
            setValueSearchFilter={setValueSearchFilter}
            valueSearchFilter={valueSearchFilter}
          />
        </div>
        <button
          className="btn btn__back checkState__headers-back"
          onClick={() => {handleArrow()}}
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

      <div className="checkState__detail-details" >
        {!!pay.fertilizers?.length == !0 ? (
          <Table
            data={dataToShow}
            headers={headers}
            sizesColumns={[20, 38, 12, 12, 10, 8]}
            // details={false}
          />
          
        ) : (
          <p style={{ display: "grid", placeItems: "center" }}>
            <strong>No hay información para mostrar</strong>
          </p>
        )}
      </div>
    </>
  );
};
