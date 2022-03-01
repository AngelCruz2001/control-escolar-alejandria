import React from "react";

export const SpanColorTable = ({
  text,
  searched = false,
  color, //Change color depending of the status of the payment
}) => {
  // color:
  //    status_payment === 0
  //     ? "#AD282C"
  //     : status_payment === 1
  //     ? " #8B9199"
  //     : "#B9B756",
  console.log(color);
  return (
    <span
      style={{
        color:
          color === "ANTICIPADO"
            ? "#AFA51B"
            : color === "PAGADO"
            ? " #636363"
            : "#A50000",
      }}
    >
      {text}
    </span>
  );
};
