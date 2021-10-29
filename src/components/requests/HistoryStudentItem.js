import React from "react";
import { useDispatch } from "react-redux";
import { requestStartDeletingSingleRequest } from "../../actions/request";

export const HistoryStudentItem = ({
  student_name,
  creation_date,
  matricula,
  document_name,
  status_request,
  id_request
}) => {

  const dispatch = useDispatch()

  const handleDeleteRequest = () => {
    dispatch(requestStartDeletingSingleRequest(id_request))
  }

  return (
    <div className="reqHistory__table-body">
      <p className="reqHistory__table-body-item1 reqHistory__table-body-item">
        {student_name}
      </p>
      <p className="reqHistory__table-body-item2 reqHistory__table-body-item">
        {matricula}
      </p>
      <p className="reqHistory__table-body-item3 reqHistory__table-body-item">
        {creation_date}
      </p>
      <p className="reqHistory__table-body-item4 reqHistory__table-body-item">
        {document_name}
      </p>
      <div className="reqHistory__table-body-item5 reqHistory__table-body-item">
        {status_request === 0 ? (
          <button 
            className="btn reqHistory__table-body-item-btn"
            onClick={handleDeleteRequest}
          >
            <p>Cancelar</p>
            <i className="fas fa-times-circle"></i>
          </button>
        ) : (
          <h4>
            <p>Efectuado</p>
            <i className="fas fa-check-circle"></i>
          </h4>
        )}
      </div>
    </div>
  );
};
