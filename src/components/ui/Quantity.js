import React, { useState } from 'react'
import { useInputAmount } from '../../hooks/useInputAmount';

export const Quantity = () => {

    const [amountToPay, showInput, handleInputChange] = useInputAmount();

    return (
        <div className="quan__container ">
            <p className="general__titleSection quantity">Cantidad</p>
            <input className="styledInput" type="text" value={showInput} onKeyDown={handleInputChange} onChange={() => { }} />
        </div>
    )
}
