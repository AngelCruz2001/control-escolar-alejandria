import React from 'react'
import { useSelector } from 'react-redux'

export const SpecificInformationStudent = () => {

    const {fertilizers} = useSelector(state => state.pay)

    const {expected, current, missing, name, id_payment, status_payment, payment_date, last_payment_date, payment_type} = fertilizers;

    return (
        <div>
            <p>{expected}</p>
            <p>{current}</p>
        </div>
    )
}
