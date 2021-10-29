import moment from "moment";
import React from "react";

import { RequestHistoryBar } from "./RequestHistoryBar";
import { RequestHistoryTableStudents } from "./RequestHistoryTableStudents";

export const RequestHistory = () => {
  return (
    <div className="reqHistory__content">
      <RequestHistoryBar /> 
      <h1 className="reqHistory__title">Historial de solicitud de documentos</h1>
      <RequestHistoryTableStudents />
    </div>
  );
};
