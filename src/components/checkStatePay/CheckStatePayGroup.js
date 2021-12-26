import React from "react";
import { Searchbar } from "../ui/Searchbar";

import { SkeletonTable } from "../ui/table/SkeletonTable";

export const CheckStatePayScreen = () => {
  const headers = [
    {
      title: "Todos los grupos",
      textAlign: "left",
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
      textAlign: "left",
    },
  ];

  return (
    <div className="gra__container">
      <Searchbar placeholder="Buscar por grupo" />
      <SkeletonTable headers={headers} sizesColumns={[29, 15, 15, 35]} />
    </div>
  );
};
