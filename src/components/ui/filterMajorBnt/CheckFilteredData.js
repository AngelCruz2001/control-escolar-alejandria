import React from "react";
import { useState } from "react";

export const CheckFilteredData = () => {


  const [titleActive, setTitleActive] = useState('Todos los grupos')

  const toggleTitleActive = (title) => {
    setTitleActive(title)
  }

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

  console.log(titleActive);

  return (
    <>
      <ul className="checkState__headers-filteredList">
        {filterTitles.map((title) => (
          <li key={title.name} 
          onClick={() => {toggleTitleActive(title.name)}}
          className="checkState__headers-filteredList-item">
            <p>{title.name}</p>
          </li>
        ))}
      </ul>

      <p> {titleActive} </p>

    </>
  );
};
