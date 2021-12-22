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
    handelClick,
    coincidence
) => {
    console.log(coincidence);
    return [
        { element: <SpanTable text={student_name} />, searched: coincidence[0] },
        { element: <SpanTable text={matricula} />, searched: coincidence[1] },
        { element: <SpanTable text={creation_date} />, searched: coincidence[3] },
        { element: <SpanTable text={document_name} />, searched: coincidence[2] },
        { element: <ButtonTable type={typeButton} onClick={handelClick} id={id} />, searched: false },
    ];
}
export const buildDataGrades = (
    id,
    student_name,
    matricula,
    group_name,
    major_name,
    handelClick,
    coincidence
) => {
    return [
        { element: <SpanTable text={student_name} />, searched: coincidence[0] },
        { element: <SpanTable text={matricula} />, searched: coincidence[1] },
        { element: <SpanTable text={group_name} />, searched: coincidence[2] },
        { element: <SpanTable text={major_name} />, searched: coincidence[3] },
        { element: <ButtonTable type={0} onClick={handelClick} id={id} />, searched: false },
    ];
}
export const buildDataExpenses = (
    id,
    expenses_type,
    date,
) => {

    return [
        { element: <SpanTable text={expenses_type} />, searched: false },
        { element: <SpanTable text={date} />, searched: false },
        { element: <ButtonTable type={0} title="Ver" id={id} />, searched: false },
        { element: <ButtonTable type={1} title="Editar" id={id} />, searched: false },
        { element: <ButtonTable type={2} title="Borrar" id={id} />, searched: false },

    ];
}