import React from "react";

export const StudentReqDoc = ({ activeDoc, toggleActiveDoc, setActiveDoc }) => {

    const documentType = [
        { title: "Nombre del documento" },
        { title: "documento" },
        { title: "constancia" },
        { title: "folio" },
        { title: "kardex" },
        { title: "Estaferta" },
        { title: "Licenciatura en Johan" },
        { title: "Una cancion bonita" },
      ];

  return (
    <>
      <h3 className="studentReqDoc__title">
        Selecciona el documento <br /> que deseas solicitar:
      </h3>

      <div className="studentReqDoc__documents">
        {documentType.map((doc, i) => (
          <div
            onClick={() => toggleActiveDoc(doc.title)}
            key={i}
            className={`studentReqDoc__documents-doc ${
              doc.title === activeDoc && "active"
            } `}
          >
            <p>{doc.title}</p>
          </div>
        ))}
      </div>
      <div className="studentReqDoc__submit">
        <button
          className={`studentReqDoc__submit-btn btn ${
            activeDoc === "" ? "ui__disabledEffect" : "activeCancel"
          }  `}
          onClick={()=> setActiveDoc('')}
        >
          Cancelar
        </button>
        <button
          className={`studentReqDoc__submit-btn btn ${
            activeDoc === "" ? "ui__disabledEffect" : 'activeSubmit'
          }`}
        >
          Aceptar
        </button>
      </div>
    </>
  );
};
