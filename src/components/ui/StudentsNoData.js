import React from "react";
import logoAleNoText from "../../resources/images/logoAleNoText.png";


export const StudentsNoData = () => {
  return (
    <div className="studentReqDoc__history__noData">
      <img src={logoAleNoText} alt="No hay información" />
      <p>
        ¡Aún no has solicitado ningún documento!
      </p>
    </div>
  );
};
