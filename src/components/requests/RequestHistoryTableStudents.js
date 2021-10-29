import React from "react";
import { useSelector } from "react-redux";

import { HistoryStudentItem } from "./HistoryStudentItem";

export const RequestHistoryTableStudents = () => {
  const { activeRequests } = useSelector((state) => state.request);

  return (
    <>
      <div className="reqHistory__table-headers">
        <p className="reqHistory__table-headers-item1 ">Nombre del alumno</p>
        <p className="reqHistory__table-headers-item2">Matrícula</p>
        <p className="reqHistory__table-headers-item3">Fecha de solicitud</p>
        <p className="reqHistory__table-headers-item4">Documento solicitado</p>
        <p className="reqHistory__table-headers-item5"></p>
      </div>
      <div className="reqHistory__table scroll">
        { !!activeRequests ?
        activeRequests.map((dataStudent) => (
          <HistoryStudentItem {...dataStudent} key={dataStudent.id_request} />
        ))
          : <h4>Cargando....</h4>
      }
      </div>
    </>
  );
};
