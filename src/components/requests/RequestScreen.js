import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  requestSetActive,
  requestStartGetAllRequest,
  requestStartGetStudentByMatricula,
  requestStartRequest,
} from "../../actions/request";
import { Date } from "../../helpers/ui/Date";
import { Matricula } from "../Matricula";

export const RequestDocument = () => {
  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.request);

  const initialState = {
    id_request: null,
    matri: "",
  };

  const [formReqValues, setFormReqValues] = useState(initialState);

  const { id_request, matri } = formReqValues;

  useEffect(() => {
    if (active) {
      setFormReqValues(active);
    } else {
      setFormReqValues(initialState);
    }
  }, [active, setFormReqValues]);

  const handleInputChange = ({ target }) => {
    setFormReqValues({
      ...formReqValues,
      [target.name]: target.value,
    });
  };

  // const onChangeValueDocument = ({ target }) => {
  //   console.log(target.value);
  // };

  useEffect(() => {
    dispatch(requestSetActive(Number(id_request)));
  }, [id_request]);

  const handleRequestHistory = () => {
    dispatch(requestStartGetAllRequest())
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    // console.log(formReqValues, Number(id_request))
    dispatch(requestStartRequest());
  };

  return (
    <>
      <form onSubmit={handleSubmitRequest} className="req__container">
        <div className="req__header">
          <Date />
        </div>
        <div className="req__body">
          <div className="req__body__student">
            <Matricula
              reduxAction={requestStartGetStudentByMatricula}
              name="matri"
              value={matri}
            />
            <div className="req__body__student__info">
              <p className="general__titleSection">Información del alumno</p>
              <div className="req__body__student__info__container">
                <div className="req__body__student__info__container__containerTwo">
                  {!!active ? (
                    <div className="req__body__student__info__container__containerTwo__row">
                      <div className="req__body__student__info__container__containerTwo__row__header">
                        <p className="req__body__student__info__name">
                          Alumno:
                        </p>
                      </div>
                      <div className="req__body__student__info__container__containerTwo__row__info">
                        {active.student_fullname}
                      </div>
                    </div>
                  ) : null}

                  {!!active ? (
                    <div className="req__body__student__info__container__containerTwo__row">
                      <div className="req__body__student__info__container__containerTwo__row__header">
                        <p className="req__body__student__info__name">Grupo:</p>
                      </div>
                      <div className="req__body__student__info__container__containerTwo__row__info">
                        {active.name_group}
                      </div>
                    </div>
                  ) : null}

                  {!!active ? (
                    <div className="req__body__student__info__container__containerTwo__row">
                      <div className="req__body__student__info__container__containerTwo__row__header">
                        <p className="req__body__student__info__name">
                          Campus:
                        </p>
                      </div>
                      <div className="req__body__student__info__container__containerTwo__row__info">
                        {active.campus_name}
                      </div>
                    </div>
                  ) : null}

                  {!!active ? (
                    <div className="req__body__student__info__container__containerTwo__row">
                      <div className="req__body__student__info__container__containerTwo__row__header">
                        <p className="req__body__student__info__name">
                          Carrera:
                        </p>
                      </div>
                      <div className="req__body__student__info__container__containerTwo__row__info">
                        {active.major_name}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="req__body__document">
            <p className="general__titleSection">Documento a solicitar</p>
            <div
              className="req__body__document__container"
              onChange={handleInputChange}
              value={id_request}
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
                <div className="pretty-radio" key={index}>
                  <input
                    type="radio"
                    className="radio"
                    name="id_request"
                    // name="id_request"
                    value={index}
                    onClick={() => console.log(index)}
                  />
                  <span className="radio-look"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="req__footer">
          <button className="btn btn-primary active" type="submit">
            Solicitar
          </button>
        </div>
      </form>
      <Link
        className="btn req__footer__checkHistory active"
        onClick={handleRequestHistory}
        to="./solicitud_de_documento/historial"
      >
        <i className="fas fa-history"></i>
        <p >Ver Historial</p>
      </Link>
    </>
  );
};
