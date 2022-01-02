import React from "react";

// Images imports
import logoAleNoText from "../../../helpers/resources/images/logoAleNoText.png";
import { StudentsSubmenu } from "../../students/StudentsSubmenu";

export const StudentsNavbar = () => {
  return (
    <div className="navStudentPosition">
      <nav className="navStudent">
        <div className="navStudent__logo">
          <img
            src={logoAleNoText}
            alt="Logotipo del Instituto de Educación y Cultura Alejandría."
          />
          <h1>
            Instituto de Educación <br />y Cultura Alejandría
          </h1>
        </div>
        <div className="navStudent__info">
          {/* <div className="navStudent__info-password"><button className='btn'> Cambiar contraseña </button></div>
                <p>DEG012323C872</p> */}

          <img
            className="navStudent__info-img"
            src={logoAleNoText}
            alt="Logotipo del Instituto de Educación y Cultura Alejandría."
          />

          <button className={`navStudent__info-exit btn`}>SALIR</button>
        </div>
      </nav>
      <StudentsSubmenu />
    </div>
  );
};
