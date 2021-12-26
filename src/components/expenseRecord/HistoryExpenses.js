import React from 'react';
import { useDispatch } from 'react-redux';
import { uiSetModalOpen } from '../../actions/ui';
import { buildDataExpenses } from '../../helpers/buildDataTables';
import { Table } from '../ui/Table';

export const HistoryExpenses = ({
    setShowHistory,
    expenses = [],
}) => {
    const dispatch = useDispatch()
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
    const handleClickSee = (id) => {
        dispatch(uiSetModalOpen(true))
    }
    const handleClickEdit = () => {

    }
    const handleClickDelete = () => {

    }
    const dataTable = expenses.map(({ id_expense, expenses_type, date }, index) => (
        buildDataExpenses(id_expense, expenses_type, date, handleClickSee, handleClickEdit, handleClickDelete)
    ));
    return (
        <>
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
        </>
    )
}
