import React from "react";
import { Link } from "react-router-dom";
/**
 * @description ButtonTable component
 * @param {int} type - type of button
 * @param {function} onClick - function to be called on click
 * @param {string} title - title of button
 * @returns {object} ButtonTable component
 *
 * @type:
 * 0 : See.
 * 1 : Edit.
 * 2 : Delete.
 *
 */
export const ButtonTable = ({ type, onClick, title = "", id }) => {
  const buttonGenerator = () => {
    switch (type) {
      case 0:
        return (
          <button
            className="btn btnTable btnBlue"
            onClick={(data) => onClick(data)}
          >
            <span>{title}</span> <i className="fas fa-eye"> </i>
          </button>
        );
      case 1:
        return (
          <button className="btn btnTable btnBlue" onClick={() => onClick(id)}>
            <span>{title}</span> <i className="fas fa-edit"></i>
          </button>
        );
      case 2:
        return (
          <button className="btn btnTable btnRed" onClick={() => onClick(id)}>
            <span>{title}</span> <i className="fas fa-trash"></i>
          </button>
        );
      case 3:
        return (
          <button className="btn btnTable btnBlue" onClick={() => onClick(id)}>
            <span className="btnBlue">Cancelar</span>
            <i className="fas fa-times-circle"></i>
          </button>
        );
      case 4:
        return (
          <button className="btn btnTable btnGreen" onClick={() => onClick(id)}>
            <span className="btnGreen">Efectuado</span>
            <i className="fas fa-check-circle"></i>
          </button>
        );
      case 5:
        return (
          <Link className="btn btnTable" to={`/realizar_pago/${id}`}>
            <p onClick={() => onClick(id)}>LIQUIDAR O ABONAR</p>
            <i
              onClick={() => onClick(id)}
              className={`fas fa-chevron-circle-right`}
            ></i>
          </Link>
        );

      case 6:
        return (
          <Link className="btn btnTable btnBlue" to={`/consultar_estado_de_pago/detalles`}>
            <span onClick={() => onClick(id)}></span>
            <i onClick={() => onClick(id)} className="fas fa-eye">

            </i>
          </Link>
        );

      default:
        return <></>;
    }
  };

  return buttonGenerator();
};
