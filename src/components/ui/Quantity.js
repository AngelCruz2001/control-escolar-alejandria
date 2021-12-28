import React, { useLayoutEffect } from 'react';
import { useInputAmount } from '../../hooks/useInputAmount';

export const Quantity = ({ handleQuantityChange, startQuantity }) => {
    const [amountToPay, showInput, handleInputChange] = useInputAmount(startQuantity);
    useLayoutEffect(() => {
        handleQuantityChange(amountToPay)
    }, [amountToPay])
    console.log(startQuantity)

    return (
        <div className="quan__container ">
            <p className="general__titleSection quantity">Cantidad</p>
            <input className="styledInput" type="text" value={showInput} onKeyDown={handleInputChange} onChange={() => { }} />
        </div>
    )
}
