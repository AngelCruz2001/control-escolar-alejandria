import React, { useEffect } from "react";
import { CheckHeader } from "./CheckHeader";
// import { payStartGetAllPayments } from "../../../actions/pay";
// import { Separator } from "../../ui/Separator";
// import { Filtered  from './Filtered';
import { SchoolList } from "./SchoolList";
// import { svgs } from '../../../helpers/resources'

export const CheckStatePay = () => {


  // const handleSelect = (e) => {
  //   console.log(e.target.innerHTML);
  //   // const hola = getElementsByClassName("itemPFilterList");
  // };
  return (
    <div className="check-state-pay">
      <CheckHeader />
      <div className="check-state-pay__list">
        <SchoolList />
      </div>
    </div>
  );
};
