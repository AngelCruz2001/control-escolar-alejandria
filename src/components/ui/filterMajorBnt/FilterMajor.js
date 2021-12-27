import React, { useState } from "react";
import { CheckFilteredData } from "./CheckFilteredData";

export const FilterMajor = () => {
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };
  return (
    <>
      <button onClick={handleFilter} className="checkState__headers-filter btn">
        <i className="fas fa-filter"></i>
      </button>
      <p className="checkState__headers-fiterText">Todos los grupos</p>

      {filter && <CheckFilteredData />}
    </>
  );
};
