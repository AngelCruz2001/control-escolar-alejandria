import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { payClearModalData, payStartFertilizer, payStartMakePay } from '../../actions/pay'
import { studentClearData } from '../../actions/student';
import { uiSetCurrent } from '../../actions/ui';

export const SubmitPay = () => {

    const dispatch = useDispatch();
    const { idPayment, method } = useSelector(state => state.pay);
    const handleSubmitMakePay = () => {
        idPayment ? dispatch(payStartFertilizer()) : dispatch(payStartMakePay())
        dispatch(studentClearData())
        dispatch(uiSetCurrent(0));
        dispatch(payClearModalData());
    }

    return (
        <div className={`make__submit `} >
            <button className={`make__submit-button btn-blue submitPay ${!method && 'ui__disabledEffect totalPay' }`} onClick={handleSubmitMakePay}>Pagar</button>
        </div>
    )
}
