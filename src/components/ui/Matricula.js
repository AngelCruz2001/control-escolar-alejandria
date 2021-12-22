import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentStartGetStudentByMatricula } from '../../actions/student';
import { uiSetCurrent } from '../../actions/ui';
import { typesRegex } from '../../types/typesValidators';

export const Matricula = ({
    activeClassName,
    matricula
}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setComponentMatricula(matricula)
    }, [matricula])
    const [componentMatricula, setComponentMatricula] = useState(matricula)
    const handleMatriculaChange = ({ target }) => {
        setComponentMatricula(target.value);
        if (target.value.match(typesRegex.matricula)) {
            dispatch(uiSetCurrent(1))
            dispatch(studentStartGetStudentByMatricula(target.value))
        } else {
            dispatch(uiSetCurrent(0))
        }

    }

    return (
        // <form action="" onSubmit={() => console.log("Este debería ser un 'SubmitMatricula', pero no sé realmente si jala. ")}>
        <div className="matri__container">
            <label className="general__titleSection matri__label" htmlFor="matricula">Matrícula</label>
            <input className={activeClassName} value={componentMatricula} onChange={handleMatriculaChange} placeholder="0000000000000" maxLength="13" id="matricula" name="matricula" />
        </div>
        // </form>}
    )
}
