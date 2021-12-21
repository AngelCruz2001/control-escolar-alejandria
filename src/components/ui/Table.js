import React from 'react';
import { useSelector } from 'react-redux';
import { SkeletonTable } from './table/SkeletonTable';

export const Table = ({
    headers = [], // array of objects with {title, textAlign}
    data = [], // array of objects with keys matching headers 
    sizesColumns = [], // array of numbers
}) => {
    const { loading } = useSelector(state => state.ui);
    // console.log(data)
    return (
        <div className="table ">
            {loading ?
                <>
                    <SkeletonTable headers={headers} sizesColumns={sizesColumns} />
                </>
                :
                <>
                    <div className="table__headers">
                        {
                            headers.map(({ title, textAlign }, index) => (
                                <div className="table__headers__cell" style={{ width: `${sizesColumns[index]}%`, textAlign: `${textAlign}` }} key={index}>{title}</div>
                            ))
                        }
                    </div>
                    <div className="table__body scroll">
                        {data.map((item, index) => (
                            <>
                                {item.length > 0 &&
                                    <div className="table__body__row" key={index}>
                                        {
                                            item.map((cell, andex) => (
                                                <div className="table__body__row__cell animation__fadeIn" style={{ width: `${sizesColumns[andex]}%`, justifyContent: `${headers[andex].textAlign}`, textAlign: `${headers[andex].textAlign}` }} key={andex}>
                                                    {cell}
                                                </div>
                                            ))
                                        }
                                    </div>}
                            </>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}
