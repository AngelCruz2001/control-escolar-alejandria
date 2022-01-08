import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { buildDataStudentsHistory } from "../../helpers/buildDataTables";
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
  const { requests } = useSelector((state) => state);
  //   console.log(requests.data);

  const [dataShow, setDataShow] = useState([]);

  const generateData = () => {
    const dataToShow = [];

    requests.data.forEach(
      ({ id_request, document_name, creation_date, status_request }) => {
        const dataBuilded = buildDataStudentsHistory(
          id_request,
          document_name,
          creation_date,
          status_request
        );
        dataToShow.push(dataBuilded);
      }
    );
    setDataShow(dataToShow);
  };

  useEffect(() => {
    generateData();
  }, [requests.data]);

  return (
    <div className="backgroundModal">
      <div
        className="backgroundModal__container"
        style={{
          inset: idModal === "password" ? "10% 20% 40% 20%" : "15% 15% 40% 15%",
        }}
      >
        <div className="backgroundModal__container-exit">
          <i
            className="fas fa-times"
            onClick={() => setActiveModal({ showModal: true })}
          ></i>
        </div>

        {idModal === "password" && (
          <div className="backgroundModal__container__password">
            <StudentPassword />
          </div>
        )}

        {idModal === "history" && requests.data && (
          <div className="backgroundModal__container__tableHistory">
            <h3>Historial de documentos solicitados</h3>

            <div className="backgroundModal__container__tableHistory-content">
              <Table
                headers={headers}
                sizesColumns={[40, 35, 25]}
                data={dataShow}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
