import React from "react";
import files from "../../resources/images/files.png";

export const StudentsNoData = () => {
  return (
    <div className="studentReqDoc__history__noData">
      <img  src={files} alt="No hay información" />
      <p>¡Aún no has solicitado ningún documento!</p>
    </div>
  );
};
