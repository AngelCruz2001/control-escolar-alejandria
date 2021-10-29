import React from 'react'
import { Date } from '../../helpers/ui/Date'
import { Matricula } from '../../helpers/ui/Matricula'
import { RadioButtonList } from '../ui/RadioButtonList'
import { StudentInformation } from '../ui/StudentInformation'

export const RequestDocument = () => {
    const onChangeValueDocument = ({ target }) => {
        console.log(target.value)
    }
    return (
        <div className="req__container">
            <div className="req__header">
                <Date />
            </div>
            <div className="req__body">
                <div className="req__body__student">
                    <Matricula />
                    <StudentInformation />
                </div>
                <RadioButtonList onChangeValueDocument={onChangeValueDocument} />
            </div>
            <div className="req__footer">
                <button className="btn req__footer__checkHistory active" onClick={() => console.log('click')}><i className="fas fa-history"></i><span>Ver Historial</span></button>
                <button className="btn btn-primary active" onClick={() => console.log('click')}>Solicitar</button>
            </div>
        </div >
    )
}
