import React from "react";
import { useDispatch } from "react-redux";
import { requestStartGetStudentByMatricula } from "../../actions/request";
import { useForm } from "../../hooks/useForm";

export const Matricula = () => {

  const dispatch = useDispatch()



  const [ matriculaIputValue, handleMatriculaInputChange ] = useForm({
      matricula: ''
  })

  const {matricula} = matriculaIputValue;

  const handleMarticulaSubmit = (e) => {

      e.preventDefault();
      dispatch(requestStartGetStudentByMatricula(matricula))
      // console.log('Enviando')
  }

  return (
    <form onSubmit={handleMarticulaSubmit}>
    <div className="matri__container">
      <label className="general__titleSection matri__label" htmlFor="matricula">
        Matrícula
      </label>
      <input
        placeholder="DEDG202103002"
        maxLength="13"
        id="matricula"
        value={matricula}
        onChange={handleMatriculaInputChange}
        name="matricula"
      />
    </div>
    </form>
  );
};
