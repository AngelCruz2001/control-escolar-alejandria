import React from "react";

export const StudentReqDoc = ({ documentSelected, handleRequestDocument, setDocumentSelected }) => {

  const documentType = [
    {
      id: 1,
      document: 'Constancia de estudios con calificaciones'
    },
    {
      id: 0,
      document: 'Constancia de estudios sin calificaciones'
    },
    {
      id: 10,
      document: 'Kardex'
    },
    {
      id: 3,
      document: 'Solicitud de servicio'
    },
    {
      id: 2,
      document: 'Solicitud de prácticas'
    },
    {
      id: 13,
      document: 'Liberación de servicio'
    },
    {
      id: 14,
      document: 'Liberación de prácticas'
    },
    {
      id: 11,
      document: 'Acta de examen'
    }
  ];

  const toggleActiveDoc = (id) => {
    setDocumentSelected(id);
  };



  return (
    <>
      <h3 className="studentReqDoc__title">
        Selecciona el documento <br /> que deseas solicitar:
      </h3>

      <div className="studentReqDoc__documents">
        {documentType.map(({ document, id }) => (
          <div
            onClick={() => toggleActiveDoc(id)}
            key={id}
            className={`studentReqDoc__documents-doc ${id === documentSelected && "active"
              } `}
          >
            <p>{document}</p>
          </div>
        ))}
      </div>
      <div className="studentReqDoc__submit">
        <button
          className={`studentReqDoc__submit-btn btn ${documentSelected === "" ? "ui__disabledEffect" : "activeCancel"
            }  `}
          onClick={() => setDocumentSelected('')}
        >
          Cancelar
        </button>
        <button
          onClick={()=>handleRequestDocument(documentSelected)}
          className={`studentReqDoc__submit-btn btn ${documentSelected === "" ? "ui__disabledEffect" : 'activeSubmit'
            }`}
        >
          Aceptar
        </button>
      </div>
    </>
  );
};