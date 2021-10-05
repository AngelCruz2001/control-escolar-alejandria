import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { payStartGetStudentsByGroup, payStartGetFertilizerPay } from '../../actions/pay';
import { SpecificInformationStudent } from './SpecificInformationStudent';

export const ItemPaySchoolList = ({data}) => {
    const {name_group = '', id_group = '', money_exp, money, missing, matricula = '', student_fullname = '' } = data;

    const dispatch = useDispatch();
    const { payments, students, fertilizers } = useSelector(state => state.pay);

    const handleOnClick = (value) => {
        if(name_group){ 
            dispatch(payStartGetStudentsByGroup(value))
        }else{
            console.log('estoy cargando fertilizers')
            dispatch(payStartGetFertilizerPay(value))
        }
    }

    return (
        <div className="check-state-pay__list__container__item school-list" >
            <p className="nameGroup">{name_group ? name_group : student_fullname}</p>
            <p className="total">${money_exp}.00</p>
            <p className="paid">${money}.00</p>
            <p className="pending">${missing}.00</p>
            <span><i className={`fas ${name_group ? 'fa-eye' : 'fa-sort-down' }`} onClick={() => handleOnClick(name_group ? id_group : matricula)}></i></span>
            {
                fertilizers &&
                <SpecificInformationStudent/>
            }
        </div>
    )
}


