import React from "react";
import { ButtonTable } from "../components/ui/table/ButtonTable";
import { InputTable } from "../components/ui/table/InputTable";
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
        <ButtonTable
          onClick={() => handleClickSee(id)}
          type={0}
          title="Ver"
          id={id}
        />
      ),
      searched: false,
    },
    {
      element: (
        <ButtonTable
          onClick={() => handleClickEdit(id)}
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
          onClick={() => handleClickDelete(id)}
          type={2}
          title="Borrar"
          id={id}
        />
      ),
      searched: false,
    },
  ];
};

export const buildDataGradesStudent = (
  key,
  course,
  teacher,
  grade,
  date,
  status,
  type,
  coincidence
) => {
  // console.log(key, course, teacher, grade, date, status, type);
  return [
    { element: <SpanTable text={key} />, searched: coincidence[0] },
    { element: <SpanTable text={course} />, searched: coincidence[1] },
    { element: <SpanTable text={teacher} />, searched: coincidence[2] },
    { element: <SpanTable text={grade} />, searched: coincidence[3] },
    { element: <SpanTable text={date} />, searched: coincidence[4] },
    { element: <SpanTable text={status} />, searched: coincidence[5] },
    { element: <SpanTable text={type} />, searched: coincidence[6] },
  ];
};

export const buildDataGradesDetail = (
  course,
  teacher,
  date,
  credits,
  coincidence,
  adminUser = false
) => {
  if (adminUser) {
    return [
      { element: <SpanTable text={course} />, searched: coincidence[0] },
      { element: <SpanTable text={teacher} />, searched: coincidence[1] },
      { element: <SpanTable text={date} />, searched: coincidence[2] },
      { element: <SpanTable text={credits} />, searched: coincidence[3] },
      { element: <ButtonTable text={credits} />, searched: coincidence[3] },
    ];
  }
  return [
    { element: <SpanTable text={course} />, searched: false },
    { element: <SpanTable text={teacher} />, searched: false },
    { element: <SpanTable text={date} />, searched: false },
    { element: <InputTable value={credits} />, searched: false },
    { element: <ButtonTable value={credits} />, searched: false },
  ];
};

export const buildDataFertilizer = (
  id,
  date,
  concept,
  cost,
  anticipo,
  restante
) => {
  return [
    { element: <SpanTable text={date} />, searched: false },
    { element: <SpanTable text={concept} />, searched: false },
    { element: <SpanTable text={cost} />, searched: false },
    { element: <SpanTable text={anticipo} />, searched: false },
    { element: <SpanTable text={restante} />, searched: false },
    { element: <ButtonTable type={5} id={id} />, searched: false },
  ];
};

export const buildDataStudentsHistory = (
  id_request,
  document_name,
  creation_date,
  status_request,
  handleClickCancelRequest
) => {
  return [
    { element: <SpanTable text={document_name} />, searched: false },
    { element: <SpanTable text={creation_date} />, searched: false },
    // { element: <SpanTable text={status_request} />, searched: false },
    {
      element: (
        <ButtonTable
          title={status_request}
          type={status_request === "Cancelar" ? 7 : 8}
          id={id_request}
          onClick={ () => handleClickCancelRequest(id_request)}
        />
      ),
      searched: false,
    },
  ];
};



export const buiidDataTeacherCouses = ( 
  id_type,
  // id_group,
  // id_ext_cou,
  // id_graduation_course
  course_name,
  group_name,
  status,
  start_date,
  end_date,
  type,
  coincidence,
  handleClickRequestAssistance
  ) => {
    return [
      // console.log();
      { element: <ButtonTable title={type} type={9}  onClick={()=> (handleClickRequestAssistance(type,id_type))}/>, searched: coincidence[5] },

      { element: <ButtonTable title={course_name} type={9} />, searched: coincidence[0] },

      { element: <ButtonTable title={status === 1 ? 'Activo' : 'Inactivo'} type={9} />, searched: coincidence[2] },

      { element: <ButtonTable  title={group_name } type={9} />, searched: coincidence[1] },

      { element: <ButtonTable  title={start_date} title2={end_date} type={10} />, searched: coincidence[4] },
    ]
  }

  // export const buildCopurseAssistance = (



  // )