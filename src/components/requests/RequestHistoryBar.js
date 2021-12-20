import React from "react";
import { useHistory } from "react-router";

export const RequestHistoryBar = () => {
  const his = useHistory();
  const handleReturn = () => {
    his.goBack();
  };

  const daysDates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];
  const monthsDates = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const yearsDates = [2021, 2020];

  return (
    <>
      <div className="reqHistory__top">
        <div className="reqHistory__bar">
          <button className="btn btn__back" onClick={handleReturn}>
            <i className="fas fa-arrow-left "></i>
          </button>
          <span className="reqHistory__search">
            <input
              type="text"
              name="searchBar"
              placeholder="Buscar"
              maxLength="50"
              className="reqHistory__search-input"
            />
            <i className="fas fa-search"></i>
          </span>
        </div>
        <div className="reqHistotory__filter">
          <p> Filtrar por: </p>

          <div className="reqHistory__dates">
            <select className="scroll" name="day">
              <option hidden defaultValue>
                Día
              </option>
              <option>Ninguno</option>
              {daysDates.map((day) => (
                <option value={day} key={day}>
                  {day}
                </option>
              ))}
            </select>
            <select className="scroll" name="month" required>
              <option className="select__default" hidden defaultValue>
                Mes
              </option>

              <option>Ninguno</option>
              {monthsDates.map((month) => (
                <option value={month} key={month}>
                  {month}
                </option>
              ))}
            </select>

            <select className="scroll" name="year" required>
              <option hidden defaultValue>
                Año
              </option>

              <option>Ninguno</option>
              {yearsDates.map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
