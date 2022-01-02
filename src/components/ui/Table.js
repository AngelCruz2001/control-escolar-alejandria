import React from "react";
import { useSelector } from "react-redux";
import { FilterSortBy } from "./filterMajorBnt/FilterSortBy";
import { SkeletonTable } from "./table/SkeletonTable";

export const Table = ({
  headers = [], // array of objects with {title, textAlign}
  data = [], // array of objects with keys matching headers
  sizesColumns = [], // array of numbers
  handleClick,
  sortBy,
  sortBy2,
  handleValueSortBy,
  details,
}) => {
  const { loading } = useSelector((state) => state.ui);
  const { fertilizers } = useSelector((state) => state.pay);
  const { status_payment } = fertilizers;

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
                {headers.map(({ title, textAlign, titleDown, icon }, index) =>
                  titleDown && icon ? (
                    <div
                      style={{
                        width: `${sizesColumns[index]}%`,
                        textAlign: `${textAlign}`,
                      }}
                      className={`table__headers__cell ${
                        icon && "table__headers__cell-flex"
                      }`}
                      key={index}
                      onClick={() => handleClick(index)}
                    >
                      <div
                        className={`table__headers__cell-flex-items ${
                          titleDown & icon && "pointer"
                        }`}
                      >
                        <p>{title}</p>
                        {titleDown && <p>{titleDown}</p>}
                      </div>
                      {icon && <i className={icon}></i>}
                      {sortBy && index === 2 && (
                        <FilterSortBy
                          index={index}
                          handleValueSortBy={handleValueSortBy}
                        />
                      )}
                      {sortBy2 && index === 3 && (
                        <FilterSortBy
                          index={index}
                          handleValueSortBy={handleValueSortBy}
                        />
                      )}
                    </div>
                  ) : (
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
                      <div className={`table__headers__cell-flex-items`}>
                        <p>{title}</p>
                      </div>
                    </div>
                  )
                )}
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

                              // color: fertilizers.length > 0 && '#8B9199'


                                // color:
                                //    status_payment === 0
                                //     ? "#AD282C"
                                //     : status_payment === 1
                                //     ? " #8B9199"
                                //     : "#B9B756",
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
