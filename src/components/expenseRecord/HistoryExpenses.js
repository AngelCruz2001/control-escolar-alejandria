import React from 'react';
import { buildDataExpenses } from '../../helpers/buildDataTables';
import { Table } from '../ui/Table';

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
    const dataTable = expenses.map(({ id_expense, expenses_type, date }, index) => (buildDataExpenses(id_expense, expenses_type, date)));
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

                {/* <div className="history__container__modal">

                    <div className="history__container__modal__left">

                        <InformationModal title="Fecha" text="08 de julio de 2021" />
                        <InformationModal title="Tipo de gasto" text="Pago de transporte" />
                        <InformationModal title="Cantidad" text="$75.50 (Setenta y cinto pesos y cincuenta centavos)" />
                        <InformationModal title="Descripción" text="Se pagó a Lupita Contreras transporte para llegar al Instituto. Taxi : $75.50" />
                    </div>
                    <div className="history__container__modal__right">
                        <div
                            className='history__container__modal__right-back'
                        >
                            <button className="btn btn__back" onClick={() => setShowHistory(false)}>
                                <i className="fas fa-arrow-left"></i>
                            </button>
                        </div>
                        <div
                            className='history__container__modal__right-buttons'
                        >

                            <ButtonTable type={1} title="Editar" />
                            <ButtonTable type={2} title="Borrar" />
                        </div>
                    </div>
                </div>

             */}
            </div>
        </>
    )
}
