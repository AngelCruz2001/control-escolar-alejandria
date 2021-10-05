import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { payStartGetStudentByMatricula } from '../actions/pay';
import { uiSetCorrect } from '../actions/ui';
import { useForm } from '../hooks/useForm';
import { useValidator } from '../hooks/useValidator';
import { typesRegex } from '../types/typesValidators';

export const Matricula = () => {
    const dispatch = useDispatch()
    const { active } = useSelector((state) => state.pay)
    const [formValues, handleInputChange, reset, setValue] = useForm({
        matricula: active ? active.matricula : ""
    });
    const [validateData] = useValidator();

    // console.log("matricula");
    // console.log(formValues)

    const { matricula } = formValues;

    useEffect(() => {
        (matricula.length === 13) ? validateData(typesRegex.matricula, matricula) && getStudentInformation() : dispatch(uiSetCorrect(null));
    }, [matricula])

    useEffect(() => { active === null && setValue({ matricula: "" }); }, [active])

    const getStudentInformation = () => {
        active ? (active.matricula !== matricula) && dispatch(payStartGetStudentByMatricula(matricula)) : dispatch(payStartGetStudentByMatricula(matricula))
    }
    return (
        <form action="" onSubmit={() => console.log("Este debería ser un 'SubmitMatricula', pero no sé realmente si jala. ")}>
            <div className="make__containerInput">
                <label className="make__titleSection" htmlFor="matricula">MATRÍCULA</label>
                <input maxLength="13" id="matricula" name="matricula" value={matricula} onChange={handleInputChange} />
            </div>
        </form>
    )
}
