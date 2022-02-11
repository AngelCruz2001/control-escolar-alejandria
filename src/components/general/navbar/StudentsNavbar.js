import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authStartLogout } from "../../../actions/auth";

// Images imports
import logoAleNoText from "../../../helpers/resources/images/logoAleNoText.png";
import whiteTigerNoText from "../../../resources/images/whiteTigerNoText.png";
import { StudentsSubmenu } from "../../students/StudentsSubmenu";

export const StudentsNavbar = ({
  setActiveScreen,
  activeScreen,
  widthSize,
  setActiveModal,
}) => {
  const { data } = useSelector((state) => state.requests);
  const { matricula } = useSelector((state) => state.student);
  const { roles } = useSelector((state) => state.auth.user);
  // console.log('IM THE ROLL NUMBER : ', roles[0])

  const [signOutBtn, setSignOutBtn] = useState(false);

  const dispatch = useDispatch();
  const handleClickLogout = () => {
      
      dispatch(authStartLogout())
  }

  return (
    <div className="navStudentPosition">
      <nav
        className="navStudent"
        style={{ justifyContent: data.length > 0 && widthSize >= 768 && "center" }}
      >
        {/* RIGHT SIDE OF THE NAVBAR */}
        <div
          className="navStudent__logo"
          style={{ marginRight: data.length > 0 && widthSize >= 768 && "0" }}
        >
          <img
            src={logoAleNoText}
            alt="Logotipo del Instituto de Educación y Cultura Alejandría."
          />
          <h1>
            Instituto de Educación <br />y Cultura Alejandría
          </h1>
        </div>
        {/* {data.length <= 0 &&  */}

          <div className="navStudent__info" style={{ display: data.length > 0 && widthSize >= 768 &&'none' }}>
            {widthSize >= 768 && (
              <>
                <div
                  onClick={() =>
                    setActiveModal({ showModal: false, idModal: "password" })
                  }
                  className="navStudent__info-password"
                >
                  <button className="btn"> Cambiar contraseña </button>
                </div>
                <p className="navStudent__info-matricula">{matricula}</p>
              </>
            )}
      
            <img
              className="navStudent__info-img"
              src={whiteTigerNoText}
              alt="Logotipo del Instituto de Educación y Cultura Alejandría."
              onClick={() => setSignOutBtn(!signOutBtn) }
            />

            {signOutBtn && (
              <button onClick={()=> handleClickLogout()} className={`navStudent__info-exit btn`}>
                <p>SALIR</p>

                {widthSize >= 768 && <i class="fas fa-sign-out-alt"></i>}
              </button>
            )}
          </div>
       
      </nav>

     {/* CAMBIAR EL ROL DE TEACHER PARA QUE SE MUESTRE EL SUBMENU EN ESTUDIENATES       */}
      {widthSize < 768 && !roles[0] && (
        <StudentsSubmenu
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
        />
      )}
    </div>
  );
};
