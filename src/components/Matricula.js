import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiSetCorrect } from '../actions/ui';
import { useForm } from '../hooks/useForm';
import { useValidator } from '../hooks/useValidator';
import { typesRegex } from '../types/typesValidators';

export const Matricula = ({ reduxAction }) => {
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
        // e.preventDefault();
        active ? (active.matricula !== matricula) && dispatch(reduxAction(matricula)) : dispatch(reduxAction(matricula))
    }

    // useEffect(() => {
    //     reset()
    // }, [reduxAction])
    // const getStudentInformation = () => {
    //     active ? (active.matricula !== matricula) && dispatch(payStartGetStudentByMatricula(matricula)) : dispatch(payStartGetStudentByMatricula(matricula))
    // }
    return (
        
            <div className="make__containerInput make__idSection">
                <label className="make__titleSection" htmlFor="matricula">Matrícula</label>
                <input maxLength="13" id="matricula" name="matricula" value={matricula} onChange={handleInputChange} />
            </div>
        
    )
}
