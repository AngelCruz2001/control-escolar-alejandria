import React, { useRef, useState } from 'react'
import { Date } from '../../helpers/ui/Date'
import { Quantity } from '../ui/Quantity'
import { RadioButtonList } from '../ui/RadioButtonList'
import { HistoryExpenses } from './HistoryExpenses'

export const ExpenseRecord = () => {

    const [description, setDescription] = useState('')
    const [showHistory, setShowHistory] = useState(false)
    const onChangeValueDocument = () => {
    }
    const handleInputChangeTextArea = () => {
        setDescription();
    }
    return (
        <div className="exp__container">
            {
                showHistory ?
                    <HistoryExpenses setShowHistory={setShowHistory} />
                    :
                    <>
                        <div className="exp__header">
                            <Date />
                        </div>
                        <div className="exp__body">
                            <RadioButtonList onChangeValueDocument={onChangeValueDocument} />
                            <div className="exp__body__quantity">
                                <div className="exp__body__teacherName">
                                    <p className="general__titleSection">Nombre del docente</p>
                                    <input className="styledInput" type="text" value={'asdfasdf'} onChange={() => { }} />
                                </div>
                                <Quantity />
                                <p className="general__titleSection description">Descripción</p>
                                <textarea
                                    className="styledInput"
                                    name="description"
                                    value={description}
                                    placeholder="Escriba una breve descripción. Ej:&#10;Pago de transporte a la secretaria María Valenzuela."
                                    onChange={handleInputChangeTextArea}
                                    rows={5}
                                    cols={5}
                                    wrap="hard"
                                />
                            </div>
                        </div>
                        <div className="exp__footer">
                            <button className="btn req__footer__checkHistory active" onClick={() => setShowHistory(true)}><i className="fas fa-history"></i><span>Ver Historial</span></button>
                            <button className="btn btn-primary active" onClick={() => console.log('click')}>Guardar</button>
                        </div>
                    </>

            }



        </div>

    )
}
