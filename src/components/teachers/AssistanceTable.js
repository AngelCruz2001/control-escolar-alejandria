import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { assistanceStartGetAssistanceByType } from '../../actions/assistance';
import { Table } from '../ui/Table';

export const AssistanceTable = ({ assistanceDates }) => {

    const dispatch = useDispatch();




    const headers = [
        {
            title: "Matrícula",
            textAlign: "center",
        },
        {
            title: "Nombre del alumno",
            textAlign: "center",
        },
    ];

    assistanceDates.forEach(date => {
        headers.push({
            title: date,
            textAlign: "center",
        })
    });

    useEffect(() => {
        dispatch(assistanceStartGetAssistanceByType());
    }, [])
    


    return (
        <Table
            headers={headers}
            data={assistanceDates}
        />
    )
}
