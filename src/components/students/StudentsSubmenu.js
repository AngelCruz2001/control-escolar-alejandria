import React from "react";

export const StudentsSubmenu = () => {
  const activeLinks = [
    { name: "Información", name2: "escolar" },
    { name: "Solicitar", name2: "documento" },
    { name: "Cambiar", name2: "contraseña" },
  ];

  return (
    <div className="studentsSubmenu">
      {activeLinks.map((item, i) => (
        <div key={i} className="studentsSubmenu__item studentsSubmenu__item-hover">
            <h2 >
              {item.name} <br /> {item.name2}
            </h2>
        </div>
      ))}
    </div>
  );
};
