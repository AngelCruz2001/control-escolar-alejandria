import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiSetCurrent } from '../../actions/ui';

export const StudentInformation = ({
<<<<<<< HEAD
    activeClassName = '',
    loading = false,
    studentInformation = { headers: [], data: [] },
    isStudentShowed = true,
}) => {
    const dispatch = useDispatch()
    const { headers, data } = studentInformation;
    console.log(studentInformation)
=======
    activeClassName,
    loading,
    student,
    payment
}) => {
    const dispatch = useDispatch()
    const {
        student_name,
        name_group,
        campus_name,
        major_name,
    } = student;

>>>>>>> origin/paymentsV2
    useEffect(() => {
        if (!loading && activeClassName === 'activeGuide') {
            dispatch(uiSetCurrent(2));
        }
    }, [loading, dispatch])
    return (
<<<<<<< HEAD
        <div className={`stuInfo son ${activeClassName}`}>
            {isStudentShowed && <p className="general__titleSection">Información del alumno</p>}
=======
        <div style={{height: payment && "38.5%"}} className={`stuInfo son ${activeClassName}`}>
            <p className="general__titleSection">Información del alumno</p>
>>>>>>> origin/paymentsV2

            <div  className="stuInfo__container son">

                {loading ?
                    <p>Cargando</p>
                    :
                    (activeClassName === '') &&
                    <div className="stuInfo__container__containerTwo">
<<<<<<< HEAD
                        {
                            headers.map((header, index) => (
                                <div className="stuInfo__container__containerTwo__row" key={index}>
                                    <div className="stuInfo__container__containerTwo__row__header">
                                        <p className="stuInfo__name">{header}:</p>
                                    </div>
                                    <div className="stuInfo__container__containerTwo__row__info">
                                        {data[index]}
                                    </div>
                                </div>
                            ))
                        }
=======

                        <div className="stuInfo__container__containerTwo__row">
                            <div className="stuInfo__container__containerTwo__row__header">
                                <p className="stuInfo__name">{(!payment ? "Alumno:" :"Nombre:")}</p>
                            </div>
                            <div className="stuInfo__container__containerTwo__row__info">
                                {student_name}
                            </div>
                        </div>

                        <div className="stuInfo__container__containerTwo__row">
                            <div className="stuInfo__container__containerTwo__row__header">
                                <p className="stuInfo__name">Grupo:</p>
                            </div>
                            <div className="stuInfo__container__containerTwo__row__info">
                                {name_group}
                            </div>
                        </div>

                        <div className="stuInfo__container__containerTwo__row">
                            <div className="stuInfo__container__containerTwo__row__header">
                                <p className="stuInfo__name">Campus:</p>
                            </div>
                            <div className="stuInfo__container__containerTwo__row__info">
                                {campus_name}
                            </div>
                        </div>

                        { !payment &&
                            <div className="stuInfo__container__containerTwo__row">
                            <div className="stuInfo__container__containerTwo__row__header">
                                <p className="stuInfo__name">Carrera:</p>
                            </div>
                            <div className="stuInfo__container__containerTwo__row__info">
                                {major_name}
                            </div>
                        </div>}

>>>>>>> origin/paymentsV2
                    </div>

                }

            </div>


        </div>
    )
}
