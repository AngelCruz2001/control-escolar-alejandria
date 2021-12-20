import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  payClearModalData,
  paySetMethod,
  payStartGetCards,
} from "../../actions/pay";

export const ConceptPayButton = ({
  text,
  icon = true,
  isSelected = false,
  setData,
}) => {
  const { active } = useSelector((state) => state.pay);
  const dispatch = useDispatch();
  const setValueState = () => {
    dispatch(payClearModalData());
    dispatch(setData(text));
  };
  return (
    <button
      disabled={!active ? true : false}
      className={`btn btn-payElement ${isSelected && "selected"}`}
      onClick={setValueState}
    >
      <p>{text}</p>
      {icon && (
        <div>
          <i className="fas fa-chevron-circle-right"></i>
        </div>
      )}
    </button>
  );
};

export const MethodPayButton = ({ text, isSelected = false, setData }) => {
  const { concept, thingToPay } = useSelector((state) => state.pay);
  const dispatch = useDispatch();
  const setValueState = () => {
    dispatch(paySetMethod(text));
    text !== "Efectivo" && dispatch(payStartGetCards());
  };

  return (
    <button
      disabled={
        concept === "Inscripción"
          ? false
          : thingToPay.name
          ? false
          : true
      }
      className={`btn btn-payElement ${isSelected && "selected"}`}
      onClick={setValueState}
    >
      <p>{text}</p>
    </button>
  );
};
