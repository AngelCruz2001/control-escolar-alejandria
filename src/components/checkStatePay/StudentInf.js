import React from "react";
import { useSelector } from "react-redux";

export const StudentInf = () => {
  const { active } = useSelector((state) => state.pay);

//   const { student_fullname, name_group, campus_name, major_name } = active;

  return (
    <div className="check-state-pay__info-student">
      {active ? (
        <>
          <div>
              <p>
                <strong>ALUMNO:</strong>
              
              </p>
              <p>
                <strong>GRUPO:</strong>
              
              </p>
              <p>
                <strong>CAMPUS:</strong>
              
              </p>
              <p>
                <strong>CARRERA</strong>
              
              </p>
          </div>
          <div>
              <p>{active.student_fullname}</p>
              <p> {active.name_group}</p>
              <p> {active.campus_name}</p>
              <p>{active.major_name}</p>
          </div>
        </>
      ) : <p>cargando...</p>
      }
    </div>
  );
};
