import React from "react";
import { useSelector } from "react-redux";
import { CheckHeader } from "./CheckHeader";
import { SpecificInformationStudent } from "./SpecificInformationStudent";
import { StudentInf } from "./StudentInf";

export const InformationScreen = () => {
  const { fertilizers } = useSelector((state) => state.pay);

  const currentStudentFerlizer = fertilizers[0];


  return (
    <>
      <div className="check-state-pay">
        <CheckHeader />
        <StudentInf />
        <div className="check-state-pay__list">
          {fertilizers[0] ? (
            <SpecificInformationStudent
              currentStudentFerlizer={currentStudentFerlizer}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};
