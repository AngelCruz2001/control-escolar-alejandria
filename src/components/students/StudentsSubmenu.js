import React from "react";

export const StudentsSubmenu = ({ activeScreen, setActiveScreen }) => {
  const activeLinks = [
    {
      id: 0,
      name: "Información",
      name2: "escolar",
    },
    {
      id: 1,
      name: "Solicitar",
      name2: "documento",
    },
    { id: 2, name: "Cambiar", name2: "contraseña" },
  ];



  const toggleActiveScreen = (id) => {
    setActiveScreen(id);
  };

  return (
    <div className="studentsSubmenu">
      {activeLinks.map(({ id, name, name2 }) => (
        <div
          key={id}
          onClick={() => toggleActiveScreen(id)}
          className={`studentsSubmenu__item studentsSubmenu__item-hover ${
            activeScreen === id && " activeLink"
          }`}
        >
          <h2>
            {name} <br /> {name2}
          </h2>
        </div>
      ))}
    </div>
  );
};
