import React from 'react';
import { ButtonTable } from '../components/ui/table/ButtonTable';
import { SpanTable } from '../components/ui/table/SpanTable';

export const buildData = (
    id,
    student_name,
    matricula,
    creation_date,
    document_name,
    typeButton,
    handelClick
) => {
    return [
        <SpanTable text={student_name} />,
        <SpanTable text={matricula} />,
        <SpanTable text={creation_date} />,
        <SpanTable text={document_name} />,
        <ButtonTable type={typeButton} onClick={handelClick} id={id} />
    ];
}

export const buildDataExpenses = (
    id,
    expenses_type,
    date,
) => {
    console.log(expenses_type)

    return [
        <SpanTable text={expenses_type} />,
        <SpanTable text={date} />,
        <ButtonTable type={0} title="Ver" id={id} />,
        <ButtonTable type={1} title="Editar" id={id} />,
        <ButtonTable type={2} title="Borrar" id={id} />,
    ];
}