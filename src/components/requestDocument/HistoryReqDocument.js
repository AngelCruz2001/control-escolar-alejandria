import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { documentStartGetHistory } from '../../actions/document';
import { requestStartDeleteRequests, requestStartGetRequests } from '../../actions/requests';
import { Filters } from '../ui/Filters'
import { Searchbar } from '../ui/Searchbar'
import { Table } from '../ui/Table'
import { ButtonTable } from '../ui/table/ButtonTable';
import { SpanTable } from '../ui/table/SpanTable';

const documentsName = [
    "Constancia de estudios",
    "Constancia de estudios con calificaciones",
    "Carta maestrante",
    "Credencial",
    "Certificado de maestría",
    "Certificado de licenciatura",
    "Titulo de maestri",
    "Titulo de licenciatura",
    "Acta de examen",
    "Constancia de titulo en progreso",
];
export const HistoryReqDocument = ({
    setShowHistory,
    requests,
    loading,
}) => {
    const headers = [{
        title: "Nombre del alumno",
        textAlign: 'left'
    },
    {
        title: "Matricula",
        textAlign: 'center'
    },
    {
        title: "Fecha de solicitud",
        textAlign: 'center'
    },
    {
        title: "Documento solicitado",
        textAlign: 'center'
    },
    {
        title: "",
        textAlign: 'center'
    }];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestStartGetRequests())
    }, [])
    const handleCancelClick = (id) => {
        dispatch(requestStartDeleteRequests(id));
    }

    const [valueSearchFilter, setValueSearchFilter] = useState('');
    console.log(valueSearchFilter)
    const dataShow = requests.data.map(({ id_request, student_name, matricula, creation_date, document_name, belongsToARequest }) => (

        [<SpanTable text={student_name} />,
        <SpanTable text={matricula} />,
        <SpanTable text={creation_date} />,
        <SpanTable text={document_name} />,
        <ButtonTable type={3} onClick={handleCancelClick} id={id_request} />
        ]
    ))
    return (
        <>
            <div className="req__container__header">
                <button className="btn btn__back" onClick={() => setShowHistory(false)}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <Searchbar setValueSearchFilter={setValueSearchFilter} valueSearchFilter={valueSearchFilter}/>
                <Filters valueSearchFilter={valueSearchFilter} setValueSearchFilter={setValueSearchFilter}/>
            </div>
            <h4>Historial de solicitud de documentos</h4>

            <Table
                headers={headers}
                data={dataShow}
                sizesColumns={[30, 15, 15, 30, 10]}
                loading={true}
                
            />
        </>
    )
}
