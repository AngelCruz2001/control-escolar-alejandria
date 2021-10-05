import React from 'react'
import { useDispatch } from 'react-redux';
import { payClearModalData, paySetMethod, payStartGetCards } from '../../actions/pay';

export const ConceptPayButton = ({ text, icon = true, isSelected = false, setData }) => {
    const dispatch = useDispatch();
    const setValueState = () => {
        dispatch(payClearModalData());
        dispatch(setData(text));
    };
    return (
        <div className={`btn-payElement ${isSelected && "selected"}`} onClick={setValueState} >
            <p>
                {text}
            </p>
            {
                icon && <div><i className="fas fa-chevron-circle-right"></i></div>
            }
        </div>
    )
}

export const MethodPayButton = ({ text, isSelected = false, setData }) => {
    const dispatch = useDispatch();
    const setValueState = () => {
        dispatch(paySetMethod(text));
        text !== "Efectivo" && dispatch(payStartGetCards())
    };

    return (
        <div className={`btn-payElement ${isSelected && "selected"}`} onClick={setValueState} >
            <p>
                {text}
            </p>
        </div>
    )
}


