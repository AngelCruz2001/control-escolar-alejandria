import React from 'react'
import { Table } from '../ui/Table'
import { ButtonTable } from '../ui/table/ButtonTable';
import { SpanTable } from '../ui/table/SpanTable';

export const HistoryExpenses = ({
    setShowHistory,
    expenses = [],
}) => {

    const headers = [{
        title: "    Tipo de gasto",
        textAlign: 'left'
    },
    {
        title: "Fecha de registro",
        textAlign: 'center'
    },
    {
        title: "",
        textAlign: 'center'
    },
    {
        title: "",
        textAlign: 'center'
    },
    {
        title: "",
        textAlign: 'center'
    }];
    const dataTable = expenses.map((expense, index) => {
        return [
            <SpanTable text={expense.expenses_type} />,
            <SpanTable text={expense.date} />,
            <ButtonTable type={0} title="Ver" />,
            <ButtonTable type={1} title="Editar" />,
            <ButtonTable type={2} title="Borrar" />,
        ]
    })


    return (
        <div className="history__container">
            <div className="history__container__header">
                <button className="btn btn__back" onClick={() => setShowHistory(false)}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <h4>Historial de registro de gastos</h4>
            </div>
            <Table
                headers={headers}
                data={dataTable}
                sizesColumns={[35, 35, 10, 10, 10]}
            />
        </div>
    )
}
