import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { payStartGetAllPayments } from "../../actions/pay";
import { Searchbar } from "../ui/Searchbar";
import { Table } from "../ui/Table";


// import { Table } from "../ui/table/Table";

export const CheckStatePayScreen = () => {
  const headers = [
    {
      title: "Todos los grupos",
      textAlign: "center",
    },
    {
      title: "Total",
      textAlign: "center",
    },
    {
      title: "Total pagado",
      textAlign: "center",
    },
    {
      title: "Total adeudo",
      textAlign: "center",
    },
    {
      title: "Ver",
      textAlign: "center",
    },
  ];
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(payStartGetAllPayments())
  }, [])

  return (
    <div className="gra__container">
      <Searchbar checkState={true} placeholder="Buscar por grupo" />
      <Table 
        headers={headers}
        sizesColumns={[50,16,15,15,5]}
        checkState={true}
      />


    </div>
  );
};
