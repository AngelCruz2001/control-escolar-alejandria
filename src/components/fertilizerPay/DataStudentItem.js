import React from 'react'
import { useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/es';
import { NavLink } from 'react-router-dom';
import { paySetConcept, paySetThingToPay, paySetPrice, paySetIdPayment } from '../../actions/pay';

export const DataStudentItem = ({last_payment_date, name, expected, current, missing, payment_type, id_payment }) => {

    console.log(last_payment_date);
    const dispatch = useDispatch();
    // const dateMoment = moment(payment_date).format("MMMM - D - YYYY");
    // const dateMeraMera = dateMoment[0].toUpperCase() + dateMoment.slice(1);
    const handleClickPayFertilizer = () => {
        dispatch(paySetPrice(missing));
        dispatch(paySetConcept(payment_type));
        dispatch(paySetThingToPay({ name, id: "" }));
        dispatch(paySetIdPayment(id_payment))
    }
    return (
        <div className="fer__table__data__container__box">
            <div className="fer__table__data__container__box__item fer__table-data-item-blue">
                <p>
                    {last_payment_date}
                </p>
            </div>
            <div className="fer__table__data__container__box__item fer__table-data-item-blueLight">
                <p>
                    {name}
                </p>
            </div>
            <div className="fer__table__data__container__box__item fer__table-data-item-blue">
                <p>
                    {`$${expected}.00`}
                </p>
            </div>
            <div className="fer__table__data__container__box__item fer__table-data-item-blueLight">
                <p>
                    {`$${current}.00`}
                </p>
            </div>
            <div className="fer__table__data__container__box__item fer__table-data-item-blueStrong">
                <p>{`$${missing}.00`}</p>
            </div>
            <NavLink to="/pagos/pagar" className="fer__table__data__container__box__item fer__table-data-item-blueLight">
                <p onClick={handleClickPayFertilizer}>LIQUIDAR O ABONAR</p>
                <div onClick={handleClickPayFertilizer}>
                    <i className="fas fa-chevron-circle-right"></i>
                </div>
            </NavLink>
        </div>
    )
}
