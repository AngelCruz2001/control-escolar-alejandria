import React, { useState } from "react";
import { CheckFilteredData } from "./CheckFilteredData";

export const FilterMajor = ({checkState, filter, setFilter, titleActive, setTitleActive,toggleTitleActive}) => {

  const filterTitles = [
    { name: "Todos los grupos" },
    { name: "Licenciaturas" },
    { name: "Licenciatura en derecho" },
    { name: "Licenciatura en comunicación" },
    { name: "Licenciatura en seguridad publica" },
    { name: "Maestrías" },
    { name: "Maestría en comunicación" },
    { name: "Maestría en seguridad publica" },
    { name: "Estudiantes" },
  ];
  

  const handleFilter = () => {
   
    setFilter(!filter);
  };
 
  

  

  return (
    <>
      <button onClick={handleFilter} className="checkState__headers-filter btn">
        <i className="fas fa-filter"></i>
      </button>
      { checkState &&
        <p className="checkState__headers-fiterText">{titleActive}</p>
      }

      {filter && <CheckFilteredData titleActive={titleActive} filterTitles={filterTitles} toggleTitleActive={toggleTitleActive}/>}
    </>
  );
};
