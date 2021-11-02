import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Date } from "../../helpers/ui/Date";
import { Matricula } from "../Matricula";
import { DataStudentTableFer } from "./DataStudentTableFer";
import { HeadersStudentTableFer } from "./HeadersStudentTableFer";
import { payStartGetStudentByMatricula } from "../../actions/pay";

export const FertilizerPay = () => {
  const { active } = useSelector((state) => state.pay);
  const { student_fullname, name_group, campus_name, educational_level } =
    active || "";
  // const [correct, setCorrect] = useState(null);

  return (
    <div className="fer__container">
      <div className="fer__header">
        <div className="fer__header__date">
          <p>Fecha</p>
          <Date />
        </div>
        <div className="fer__header__matri-text">
          <div className="fer__header-matricula">
            <Matricula reduxAction={payStartGetStudentByMatricula} />
          </div>
          {active ? (
            <div className="fer__header__matri-text__dataStudent">
              <p>Información del alumno</p>
              <p>
                Alumno: <span>{student_fullname}</span>
              </p>
              <p>
                Grupo: <span>{name_group}</span>
              </p>
              <p>
                Campus: <span>{campus_name}</span>
              </p>
              <p>
                Carrera: <span>{educational_level}</span>
              </p>
            </div>
          ) : (
            <h4 className="fer__header-instructions">
              ¿Deseas liquidar o realizar un abono? Introduce la matrícula<br /> del 
              alumno para conocer sus conceptos de adeudo.
            </h4>
          )}
        </div>
      </div>
      <div className="fer__table">
        <div className="fer__table__headers">
          <HeadersStudentTableFer />
        </div>

        <div className="fer__table__data">
          <DataStudentTableFer />
        </div>
      </div>
    </div>
  );
};
