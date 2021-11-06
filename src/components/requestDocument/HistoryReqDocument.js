import React from 'react'
import { Filters } from '../ui/Filters'
import { Searchbar } from '../ui/Searchbar'
import { Table } from '../ui/Table'
import { ButtonTable } from '../ui/table/ButtonTable';
import { SpanTable } from '../ui/table/SpanTable';

export const HistoryReqDocument = ({
    setShowHistory,
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
    const data = [

        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="15, junio, 2021" />,
            <SpanTable text="Constancia de estudios" />,
            <ButtonTable type={3} />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="15, junio, 2021" />,
            <SpanTable text="Constancia de estudios" />,
            <ButtonTable type={4} />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="15, junio, 2021" />,
            <SpanTable text="Constancia de estudios" />,
            <ButtonTable type={4} />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="15, junio, 2021" />,
            <SpanTable text="Constancia de estudios" />,
            <ButtonTable type={3} />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="15, junio, 2021" />,
            <SpanTable text="Constancia de estudios" />,
            <ButtonTable type={3} />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="15, junio, 2021" />,
            <SpanTable text="Constancia de estudios" />,
            <ButtonTable type={3} />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="15, junio, 2021" />,
            <SpanTable text="Constancia de estudios" />,
            <ButtonTable type={4} />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="15, junio, 2021" />,
            <SpanTable text="Constancia de estudios" />,
            <ButtonTable type={4} />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="15, junio, 2021" />,
            <SpanTable text="Constancia de estudios" />,
            <ButtonTable type={4} />
        ],

    ];

    return (
        <>
            <div className="req__container__header">
                <button className="btn btn__back" onClick={() => setShowHistory(false)}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <Searchbar />
                <Filters />
            </div>
            <h4>Historial de solicitud de documentos</h4>

            <Table
                headers={headers}
                data={data}
                sizesColumns={[30, 15, 20, 20, 15]}

            />
        </>
    )
}
