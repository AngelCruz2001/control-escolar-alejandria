import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const StudentInfo = () => {
  const { active, fertilizers } = useSelector((state) => state.pay);
  const { loading, correct } = useSelector((state) => state.ui);


  console.log(active);


  useEffect(() => {
    
  }, [active])

  return (
    <>
      <div className="make__studentInformation">
        <p
          className={`make__titleSection ${
            !active && "ui__disabledEffectInfo-title "
          }`}
        >

          {!active && "Información del estudiante"}
          
         
        </p>
        <div
          className={`data dataPay__grid ${
            !active && "ui__disabledEffectInfo-data "
          }`}
        >
          {correct === null ? (
            <div style={{ height: "100.8px" }}></div>
          ) : correct ? (
            <>
              {loading ? (
                <div>
                  <h3>Cargando</h3>
                </div>
              ) : active ? (
                <>
                  <p className="dataPay__grid-header">Nombre:</p>
                  <p className="dataPay__grid-item">
                    {active.student_fullname}
                  </p>
                  <p className="dataPay__grid-header">Grupo: </p>
                  <p className="dataPay__grid-item">{active.name_group} </p>
                  <p className="dataPay__grid-header">Campus:</p>
                  <p className="dataPay__grid-item"> {active.campus_name}</p>
                </>
              ) : (
                <div
                  style={{
                    height: "100.8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h4>No existe esa Matricula</h4>
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                height: "100.8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4>Matricula no valida</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
