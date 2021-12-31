import React from "react";
import { useSelector } from "react-redux";
import { FilterSortBy } from "./filterMajorBnt/FilterSortBy";
import { SkeletonTable } from "./table/SkeletonTable";

export const Table = ({
  headers = [], // array of objects with {title, textAlign}
  data = [], // array of objects with keys matching headers
  sizesColumns = [], // array of numbers

  sortDataInfo,
  sortData,
}) => {
  const { loading } = useSelector((state) => state.ui);
  console.log(data);
  return (
    <div className="table ">
      {loading ? (
        <>
          <SkeletonTable headers={headers} sizesColumns={sizesColumns} />
        </>
      ) : (
        <>
          {data.length > 0 ? (
            <>
              <div className="table__headers">
                {headers.map(({ title, textAlign, titleDown, icon }, index) => (
                  <div
                    style={{
                      width: `${sizesColumns[index]}%`,
                      textAlign: `${textAlign}`,
                    }}
                    className={`table__headers__cell ${
                      icon && "table__headers__cell-flex"
                    }`}
                    key={index}
                  >
                    <div
                      className={`table__headers__cell-flex-items ${
                        titleDown & icon && "pointer"
                      }`}
                      onClick={() => sortDataInfo(false)}
                    >
                      <p>{title}</p>
                      {titleDown && <p>{titleDown}</p>}
                    </div>
                    {icon && <i class={icon}></i>}
                  </div>
                ))}
                {/* { sortData && <FilterSortBy />} */}
              </div>
              <div className="table__body scroll">
                {data.map((item, index) => (
                  <>
                    {item.length > 0 && (
                      <div className="table__body__row" key={index}>
                        {item.map((cell, andex) => (
                          <div
                            className={`table__body__row__cell animation__fadeIn ${
                              cell.searched && "searched"
                            }`}
                            key={andex}
                            style={{
                              width: `${sizesColumns[andex]}%`,
                              justifyContent: `${headers[andex].textAlign}`,
                              textAlign: `${headers[andex].textAlign}`,
                            }}
                            key={andex}
                          >
                            {cell.element}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ))}
              </div>
            </>
          ) : (
            <SkeletonTable
              headers={headers}
              sizesColumns={sizesColumns}
              isEmpty={true}
            />
          )}
        </>
      )}
    </div>
  );
};
