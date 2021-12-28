import React from "react";
import { useState } from "react";

export const CheckFilteredData = ({ filterTitles, toggleTitleActive, titleActive}) => {

  return (
    <>
      <ul className="checkState__headers-filteredList">
        {filterTitles.map((title) => (
          <li
            key={title.name}
            onClick={() => {
              toggleTitleActive(title.name);
            }}
            className={`checkState__headers-filteredList-item ${titleActive === title.name && 'active'}`}
          >
            <p>{title.name}</p>
          </li>
        ))}
      </ul>

    </>
  );
};
