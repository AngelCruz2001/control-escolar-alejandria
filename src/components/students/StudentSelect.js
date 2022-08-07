import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { requestStartGetRequests } from "../../actions/requests";

const documentsStudent = [
  {
    id: 0,
    document: "Constancia de estudios sin calificaciones.",
  },
  {
    id: 1,
    document: "Constancia de estudios con calificaciones.",
  },
  {
    id: 2,
    document: "Constancia de estudios por cuatrimestre.",
  },
  {
    id: 3,
    document: "Carta maestrante.",
  },
  {
    id: 4,
    document: "Carta de servicio social.",
  },

  {
    id: 10,
    document: "Cárdex.",
  },
  {
    id: 11,
    document: "Acta de examen.",
  },
];

export const StudentSelect = ({
  handleRequestDocument,
  documentSelected,
  setDocumentSelected,
  setActiveModal,
}) => {
  const [documents,] = useState(documentsStudent);

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setDocumentSelected(value);

  };
  const handleCancel = () => {
    setDocumentSelected("");
  };

  const dispatch = useDispatch();

  const handleRequestDocumentHistory = () => {
    dispatch(requestStartGetRequests());
    setActiveModal({ showModal: false, idModal: "history" });
  };

  return (
    <div className="mainStudent__selectDocument__component">
      <h3 className="mainStudent__selectDocument__component-title">
        Solicitar documento:
      </h3>

      <select
        value={documentSelected}
        onChange={handleInputChange}
        className="mainStudent__selectDocument__component-select scroll"
        name="document"
      >
        <option hidden defaultValue>
          Seleccione
        </option>
        {documents.map(({ document, id }) => (
          <option value={id} key={document}>
            {document}
          </option>
        ))}
      </select>

      <div className="mainStudent__selectDocument__component-buttons">
        <button
          onClick={() => handleRequestDocumentHistory()}
          className="btn btn-history"
        >
          Historial
        </button>

        {documentSelected && (
          <button className="btn btn-cancel" onClick={handleCancel}>
            Cancelar
          </button>
        )}
        <button
          className={`btn btn-request ${!documentSelected ? "ui__disabledEffect " : "btn-request-color"
            }`}
          onClick={() => handleRequestDocument(documentSelected)}
        >
          Solicitar
        </button>
      </div>
    </div>
  );
};
