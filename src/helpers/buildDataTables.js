import React from "react";
import { ButtonTable } from "../components/ui/table/ButtonTable";
import { SpanTable } from "../components/ui/table/SpanTable";

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
    {
      element: <ButtonTable type={typeButton} onClick={handelClick} id={id} />,
      searched: false,
    },
  ];
};
export const buildDataGrades = (
  id_student,
  student_name,
  matricula,
  group_name,
  major_name,
  campus_name,
  handleClick,
  coincidence
) => {
  return [
    { element: <SpanTable text={student_name} />, searched: coincidence[0] },
    { element: <SpanTable text={matricula} />, searched: coincidence[1] },
    { element: <SpanTable text={group_name} />, searched: coincidence[2] },
    { element: <SpanTable text={major_name} />, searched: coincidence[3] },
    {
      element: (
        <ButtonTable
          type={0}
          onClick={() =>
            handleClick({
              id_student,
              student_name,
              matricula,
              group_name,
              campus_name,
              major_name,
            })
          }
          id={id_student}
        />
      ),
      searched: false,
    },
  ];
};

export const buildDataFertilizer = (
  id,
  date,
  concept,
  cost,
  anticipo,
  restante,
  payment_type,
  handleClick
) => {
  return [
    { element: <SpanTable text={date} />, searched: false },
    { element: <SpanTable text={concept} />, searched: false },
    { element: <SpanTable text={cost} />, searched: false },
    { element: <SpanTable text={anticipo} />, searched: false },
    { element: <SpanTable text={restante} />, searched: false },
    {
      element: (
        <ButtonTable
          type={5}
          id={id}
          onClick={() =>
            handleClick({
              id_payment: id,
              payment_type,
              name: concept,
              expected: cost,
              current: anticipo,
              missing: restante,
            })
          }
        />
      ),
      searched: false,
    },
  ];
};

export const buildDataFertilizerDetails = (
  date,
  payment_type,
  status_payment,
  cost,
  anticipo,
  restante,
  coincidence
 
) => {
  return [
    { element: <SpanTable text={date} />, searched: coincidence[0] },
    { element: <SpanTable text={payment_type} />, searched: coincidence[1] },
    { element: <SpanTable text={status_payment} />, searched: coincidence[2] },
    { element: <SpanTable text=
      {cost} />, searched: coincidence[3] },
    { element: <SpanTable text={anticipo} />, searched: coincidence[4] },
    { element: <SpanTable text={restante} />, searched: coincidence[5] },
  ];
};

export const buildDataStateGroup = (
  id_group,
  name_group,
  money_exp,
  money,
  missing,
  handleClick,
  coincidence
) => {
  return [
    { element: <SpanTable text={name_group} />, searched: coincidence[0] },
    { element: <SpanTable text={money_exp} />, searched: coincidence[1] },
    { element: <SpanTable text={money} />, searched: coincidence[2] },
    { element: <SpanTable text={missing} />, searched: coincidence[3] },
    {
      element: (
        <ButtonTable
          type={0}
          onClick={() => handleClick({ id_group, name_group })}
          id={id_group}
        />
      ),
      searched: false,
    },
  ];
};
export const buildDataStateGroupByStudent = (
  matricula,
  student_name,
  money_exp,
  money,
  missing,
  handleClick,
  coincidence
) => {
  return [
    { element: <SpanTable text={student_name} />, searched: coincidence[1] },
    { element: <SpanTable text={money_exp} />, searched: coincidence[2] },
    { element: <SpanTable text={money} />, searched: coincidence[3] },
    { element: <SpanTable text={missing} />, searched: coincidence[4] },
    {
      element: (
        <ButtonTable
          type={0}
          id={matricula}
          onClick={() =>
            handleClick({
              matricula,
            })
          }
          id={matricula}
        />
      ),
      searched: false,
    },
  ];
};

export const buildDataExpenses = (
  id,
  expenses_type,
  date,
  handleClickSee,
  handleClickEdit,
  handleClickDelete
) => {
  return [
    { element: <SpanTable text={expenses_type} />, searched: false },
    { element: <SpanTable text={date} />, searched: false },
    {
      element: (
        <ButtonTable onClick={handleClickSee} type={0} title="Ver" id={id} />
      ),
      searched: false,
    },
    {
      element: (
        <ButtonTable
          onClick={handleClickEdit}
          type={1}
          title="Editar"
          id={id}
        />
      ),
      searched: false,
    },
    {
      element: (
        <ButtonTable
          onClick={handleClickDelete}
          type={2}
          title="Borrar"
          id={id}
        />
      ),
      searched: false,
    },
  ];
};
export const buildDataGradesDetail = (
  course,
  teacher,
  date,
  credits,
  coincidence
) => {
  return [
    { element: <SpanTable text={course} />, searched: coincidence[0] },
    { element: <SpanTable text={teacher} />, searched: coincidence[1] },
    { element: <SpanTable text={date} />, searched: coincidence[3] },
    { element: <SpanTable text={credits} />, searched: coincidence[2] },
  ];
};
