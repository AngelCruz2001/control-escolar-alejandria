import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { requestClearResquests, requestStartDeleteRequests } from "../../actions/requests";
import { buildDataStudentsHistory } from "../../helpers/buildDataTables";
import { StudentsNoData } from "../ui/StudentsNoData";
import { Table } from "../ui/Table";
import { StudentPassword } from "./StudentPassword";

const headers = [
  {
    title: "Documento solicitado",
    textAlign: "center",
  },
  {
    title: "Fecha",
    textAlign: "center",
  },
  {
    title: "",
    textAlign: "center",
  },
];

export const StudentDesktopModal = ({ setActiveModal, idModal }) => {

  const dispatch = useDispatch();

  const { requests } = useSelector((state) => state);

  const [dataShow, setDataShow] = useState([]);

  const handleClickCancelRequest = (id) => {
    dispatch(requestStartDeleteRequests(id))
  }

  const generateData = () => {
    const dataToShow = [];

    requests.data.forEach(
      ({ id_request, document_name, creation_date, status_request }) => {
        status_request = (status_request.includes("Adeudo") || status_request === 'No pagado') ? 'Cancelar' : 'Pagado'
        const dataBuilded = buildDataStudentsHistory(
          id_request,
          document_name,
          creation_date,
          status_request,
          handleClickCancelRequest
        );
        dataToShow.push(dataBuilded);
      }
    );
    setDataShow(dataToShow);
  };


  const handleHideHistoryData = () => {
    dispatch(requestClearResquests())
    setActiveModal({ showModal: true })
  }



  useEffect(() => {
    generateData();
  }, [requests.data]);

  return (
    <div className="backgroundModal">
      <div
        className="backgroundModal__container"
        style={{
          inset: idModal === "password" ? "12% 34% auto" : "12% 11.5% 33% 11.5%",
        }}
      >
        <div className="backgroundModal__container-exit">
          <i
            className="fas fa-times"
            onClick={() => handleHideHistoryData()}
          ></i>
        </div>

        {idModal === "password" && (
          <div className="backgroundModal__container__password">
            <h3>Cambio de contraseña  </h3>
            <StudentPassword />
          </div>
        )}

        {idModal === "history" && requests.data && (
          <div className="backgroundModal__container__tableHistory">

            <h3 className="backgroundModal__container__tableHistory-title">Historial de documentos solicitados</h3>

            <div className="backgroundModal__container__tableHistory-content">
              {!requests.data.length <= 0 ?
                <Table
                  headers={headers}
                  sizesColumns={[48, 31.5, 20.5]}
                  data={dataShow}
                /> :
                <StudentsNoData />
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
