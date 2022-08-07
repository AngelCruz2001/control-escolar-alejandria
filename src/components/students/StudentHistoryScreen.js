import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { requestClearResquests, requestStartDeleteRequests } from "../../actions/requests";
import { StudentsNoData } from "../ui/StudentsNoData";

export const StudentHistoryScreen = ({ setHistoryDocScreen }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.requests);

  const handleHideHistoryData = () => {
    dispatch(requestClearResquests());
    setHistoryDocScreen(false);
  };

  const handleClickCancelRequest = (id) => {
    dispatch(requestStartDeleteRequests(id));
  };

  return (
    <div className="studentReqDoc__history">
      <i
        onClick={() => handleHideHistoryData()}
        class="fas fa-chevron-left btn-back"
      ></i>

      <h3 className="studentReqDoc__history__title">
        Historial de documentos <br /> solicitados
      </h3>
      {!data.length <= 0 ? (
        <div className="studentReqDoc__history__data">
          {data.map(
            (
              { id_request, document_name, creation_date, status_request },
              i
            ) => (
              <div
                key={i}
                className="studentReqDoc__history__data-item"
                style={{
                  border:
                    status_request.includes("Adeudo") || status_request === 'No pagado'
                      ? "2px solid #BCB449 "
                      : "2px solid #053367",
                }}
              >
                <p className={`${ status_request.includes("Adeudo") || status_request === 'No pagado' ? "owe" : "paid"} `}>
                  {document_name}
                </p>
                <p>{creation_date}</p>
                <span
                  className={`${
                    status_request.includes("Adeudo") || status_request === 'No pagado' ? "oweDecorarion" : "paidDecoration"
                  } `}
                >
                  <i
                    onClick={
                      status_request.includes("Adeudo") || status_request === 'No pagado' &&
                      (() => handleClickCancelRequest(id_request))
                    }
                    className={`isAproved fas ${
                      status_request.includes("Adeudo") || status_request === 'No pagado'
                        ? "fa-times-circle isAproved-pointer"
                        : "fa-check-circle"
                    }`}
                  ></i>
                </span>
              </div>
            )
          )}
        </div>
      ) : (
        <StudentsNoData />
      )}
    </div>
  );
};
