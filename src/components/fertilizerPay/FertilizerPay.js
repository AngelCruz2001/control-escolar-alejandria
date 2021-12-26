import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { activeDisabled } from '../../helpers/activeDisabled'
import { Date } from '../ui/Date'
import { Matricula } from '../ui/Matricula'
import { StudentInformation } from '../ui/StudentInformation'
import { DataStudentTableFer } from './DataStudentTableFer'
import { HeadersStudentTableFer } from './HeadersStudentTableFer'

export const FertilizerPay = () => {

    const { student, ui } = useSelector(state => state);
    const { student_name, name_group, campus_name, educational_level } = student || "";


    return (
        <div className="fer__container">
            <div className="fer__header">
                <Date />
                <div className="fer__header__matri-text">

                    <Matricula
                        activeClassName={activeDisabled(0, ui.current)}
                        matricula={student.matricula} />
                    {
                        student ?
                            <StudentInformation
                                activeClassName={activeDisabled(1, ui.current)}
                                loading={ui.loading}
                                student={student} />
                            :
                            <h4>¿Deseas liquidar o realizar un abono? Introduce la matrícula del alumno para conocer sus conceptos de adeudo.</h4>
                    }
                </div>
            </div>
            <div className="fer__table">

                <div className="fer__table__headers">
                    <HeadersStudentTableFer />
                </div>
                <hr />
                <div className="fer__table__data">
                    <DataStudentTableFer />
                </div>

            </div>
        </div>
    )
}
