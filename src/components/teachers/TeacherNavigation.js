import React from "react";

const links = [{ name: "Cursos activos" }, { name: "Historial" }];

export const TeacherNavigation = ({activeCourseScreen, setActiveCourseScreen}) => {

//Fuction to toggle between active courses and history
  const toggleActiveScreen = (id) => {
      setActiveCourseScreen(id)
  }

  return (
    <div className="teacherNav">
      <ul className="teacherNav__container">
        {links.map(({ name }, id) => (
          <li 
            key={id}
            onClick={()=> toggleActiveScreen(id)}
            className={`teacherNav__container-item ${ activeCourseScreen === id && "active"}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
