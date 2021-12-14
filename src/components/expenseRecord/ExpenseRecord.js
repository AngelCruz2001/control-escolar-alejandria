import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { expenseSetTypeExpense, expensesSetDataInputs, expensesStartGetExpenses, expenseStartCreateRequest } from '../../actions/expenses'
import { typesExpenses } from '../../types/types'
import { Date } from '../ui/Date'
import { Quantity } from '../ui/Quantity'
import { RadioButtonList } from '../ui/RadioButtonList'
import { HistoryExpenses } from './HistoryExpenses'

export const ExpenseRecord = () => {
    const { idExpenseType, expenses, dataInputs } = useSelector(state => state.expenses);
    const [showHistory, setShowHistory] = useState(false);
    const dispatch = useDispatch();
    const [dataForm, setDataForm] = useState(dataInputs);

    const onChangeValueDocument = ({ target }) => {
        dispatch(expenseSetTypeExpense(parseInt(target.id)));
    }

    const handleQuantityChange = (amount) => {
        dispatch(expensesSetDataInputs({ ...dataForm, amount }));
    }

    const handleInputChangeTextArea = ({ target }) => {
        setDataForm({ ...dataForm, observation: target.value });
        dispatch(expensesSetDataInputs({ ...dataForm, observation: target.value }));
    }

    const handleSubmitSave = () => {
        dispatch(expenseStartCreateRequest());
    }
    const getExpenses = (filter) => {
        dispatch(expensesStartGetExpenses(filter))
    }
    useEffect(() => {
        getExpenses();
    }, [])
    return (
        <div className="exp__container">
            {
                showHistory ?
                    <HistoryExpenses
                        setShowHistory={setShowHistory}
                        expenses={expenses}
                    />
                    :
                    <>
                        <div className="exp__header">
                            <Date />
                        </div>

                        <div className="exp__body">
                            <RadioButtonList
                                onChangeValueDocument={onChangeValueDocument}
                                items={typesExpenses}
                                text="Razón de gasto"
                                idValue={idExpenseType}
                            />
                            <div className="exp__body__quantity">
                                <Quantity
                                    handleQuantityChange={handleQuantityChange}
                                    startQuantity={dataForm.amountToPay}
                                />
                                <p className="general__titleSection description">Descripción</p>
                                <textarea
                                    className="styledInput"
                                    name="description"

                                    value={dataForm.description}
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
                            <button className="btn btn-primary active" onClick={handleSubmitSave}>Guardar</button>
                        </div>
                    </>

            }



        </div>

    )
}
