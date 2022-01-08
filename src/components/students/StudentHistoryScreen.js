import React from "react";
import { useSelector } from "react-redux";
import { StudentsNoData } from "../ui/StudentsNoData";

export const StudentHistoryScreen = ({ setHistoryDocScreen }) => {
  const { data } = useSelector((state) => state.requests);

  //TODO: Arreglar la altura para tabletas cuando no hay data
  // const data = [];

  return (
    <div className="studentReqDoc__history">
      <i
        onClick={() => setHistoryDocScreen(false)}
        class="fas fa-chevron-left btn-back"
      ></i>

      <h3 className="studentReqDoc__history__title">
        Historial de documentos <br /> solicitados
      </h3>
      {!data.length <= 0 ? (
        <div className="studentReqDoc__history__data">
          {data.map(({ document_name, creation_date, status_request }, i) => (
            <div
              key={i}
              className="studentReqDoc__history__data-item"
              style={{
                border:
                  status_request === 0
                    ? "2px solid #BCB449 "
                    : "2px solid #053367",
              }}
            >
              <p className={`${status_request === 0 ? "owe" : "paid"} `}>
                {document_name}
              </p>
              <p>{creation_date}</p>
              <span
                className={`${
                  status_request === 0 ? "oweDecorarion" : "paidDecoration"
                } `}
              >
                <i
                  className={`isAproved fas ${
                    status_request === 0 ? "fa-times-circle" : "fa-check-circle"
                  }`}
                ></i>
              </span>
            </div>
          ))}
        </div>
      ) : (
        <StudentsNoData />
      )}
    </div>
  );
};
