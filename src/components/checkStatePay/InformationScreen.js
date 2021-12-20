import React from "react";
import { useSelector } from "react-redux";
import { StudentInfo } from "../makePay/StudentInfo";
import { CheckHeader } from "./CheckHeader";
import { SpecificInformationStudent } from "./SpecificInformationStudent";

export const InformationScreen = () => {
  const { fertilizers, students } = useSelector((state) => state.pay);

  const currentStudentFerlizer = fertilizers[0];


  return (
    <>
      <div className="check-state-pay">
        <CheckHeader />
        <StudentInfo />
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
