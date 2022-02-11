import React from "react";
import { Searchbar } from "../ui/Searchbar";

export const TeacherSearchbar = ({activeCourseScreen,widthSize, valueSearchFilter, setValueSearchFilter}) => {
  return (
    <div className="mainStudent__search teacher">
      <h3 className="mainStudent__search__title">
        {activeCourseScreen === 0 && "Todos los cursos activos"}
        {activeCourseScreen === 1 &&
          widthSize <= 768 &&
          "Historial de cursos impartidos"}
        {activeCourseScreen === 1 && widthSize > 768 && "Todos los cursos"}
      </h3>
      <Searchbar
        placeholder={"Buscar"}
        //   valueSearchFilter={valueSearchFilter}
        //   setValueSearchFilter={setValueSearchFilter}
      />
    </div>
  );
};
