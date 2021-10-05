import React from "react";
import { Date } from "../../helpers/ui/Date";
import { Matricula } from "../../helpers/ui/Matricula";

export const RequestDocument = () => {
  const onChangeValueDocument = ({ target }) => {
    console.log(target.value);
  };
  return (
    <div className="req__container">
      <div className="req__header">
        <Date />
      </div>
      <div className="req__body">
        <div className="req__body__student">
          <Matricula />
          <div className="req__body__student__info">
            <p className="general__titleSection">Información del alumno</p>
            <div className="req__body__student__info__container">
              <div className="req__body__student__info__container__containerTwo">
                <div className="req__body__student__info__container__containerTwo__row">
                  <div className="req__body__student__info__container__containerTwo__row__header">
                    <p className="req__body__student__info__name">Alumno:</p>
                  </div>
                  <div className="req__body__student__info__container__containerTwo__row__info">
                    Dayana Labrador Espino
                  </div>
                </div>

                <div className="req__body__student__info__container__containerTwo__row">
                  <div className="req__body__student__info__container__containerTwo__row__header">
                    <p className="req__body__student__info__name">Grupo:</p>
                  </div>
                  <div className="req__body__student__info__container__containerTwo__row__info">
                    Domingos B
                  </div>
                </div>

                <div className="req__body__student__info__container__containerTwo__row">
                  <div className="req__body__student__info__container__containerTwo__row__header">
                    <p className="req__body__student__info__name">Campus:</p>
                  </div>
                  <div className="req__body__student__info__container__containerTwo__row__info">
                    INSTITUTO DE EDUCACÍON Y CULTURA ALEJANDRÍA DURANGO
                  </div>
                </div>

                <div className="req__body__student__info__container__containerTwo__row">
                  <div className="req__body__student__info__container__containerTwo__row__header">
                    <p className="req__body__student__info__name">Carrera:</p>
                  </div>
                  <div className="req__body__student__info__container__containerTwo__row__info">
                    Maestria en innovación educativa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="req__body__document">
          <p className="general__titleSection">Documento a solicitar</p>
          <div
            className="req__body__document__container"
            onChange={onChangeValueDocument}
          >
            {[
              "Constancia de estudios",
              "Constancia con calificaciones",
              "Credencial pvc",
              "Carta pasante",
              "Certificado de licenciatura",
              "Certificado de maestría",
              "Título de licenciatura",
              "Título de maestría",
              "Curso de titulación de licenciatura",
              "Curso de titulación de maestría",
            ].map((item, index) => (
              <div className="pretty-radio">
                <input
                  type="radio"
                  class="radio"
                  name="document"
                  onClick={() => console.log("Click")}
                />
                <span class="radio-look"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="req__footer">
        <button
          className="btn req__footer__checkHistory active"
          onClick={() => console.log("click")}
        >
          <i className="fas fa-history"></i>
          <span>Ver Historial</span>
        </button>
        <button
          className="btn btn-primary active"
          onClick={() => console.log("click")}
        >
          Solicitar
        </button>
      </div>
    </div>
  );
};
