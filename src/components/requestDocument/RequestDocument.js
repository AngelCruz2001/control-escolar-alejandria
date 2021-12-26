import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { documentSetDocument } from '../../actions/document'
import { requestStartRequestDocument } from '../../actions/requests'
import { uiSetCurrent } from '../../actions/ui'
import { activeDisabled } from '../../helpers/activeDisabled'
import { typesDocuments } from '../../types/types'
import { Date } from '../ui/Date'
import { Matricula } from '../ui/Matricula'
import { RadioButtonList } from '../ui/RadioButtonList'
import { StudentInformation } from '../ui/StudentInformation'
import { HistoryReqDocument } from './HistoryReqDocument'

export const RequestDocument = () => {
    const dispatch = useDispatch()

    const { ui, student, document, requests } = useSelector(state => state)

    const [showHistory, setShowHistory] = useState(false)

    const { current, loading } = ui;


    const onChangeValueDocument = ({ target }) => {
        dispatch(uiSetCurrent(3))
        dispatch(documentSetDocument(parseInt(target.id)))
    }
    const handleSubmitRequestDocument = () => {
        dispatch(requestStartRequestDocument())
    }

    return (
        <div className="req__container">

            {showHistory ?

                <HistoryReqDocument
                    setShowHistory={setShowHistory}
                    requests={requests}
                    loading={loading}
                />
                :
                <>
                    <div className="req__header">
                        <Date />
                    </div>
                    <div className="req__body">
                        <div className="req__body__student">
                            <Matricula
                                activeClassName={activeDisabled(0, current)}
                                matricula={student.matricula}
                            />

                            <StudentInformation
                                activeClassName={activeDisabled(1, current)}
                                loading={loading}
                                student={student}
                            />

                        </div>
                        <RadioButtonList
                            activeClassName={activeDisabled(2, current)}
                            onChangeValueDocument={onChangeValueDocument}
                            idValue={document.idDocument}
                            items={typesDocuments}
                            text="Documento a solicitar"
                        />
                        
                    </div>
                    <div className="req__footer">
                        <button className="btn req__footer__checkHistory" onClick={() => setShowHistory(true)}><i className="fas fa-history"></i><span>Ver Historial</span></button>
                        <button className={"btn btn-primary ".concat(activeDisabled(3, current))} onClick={handleSubmitRequestDocument}>Solicitar</button>
                    </div>
                </>
            }


        </div >
    )
}
