import React from 'react';
import { useSelector } from 'react-redux';
import { SkeletonTable } from './table/SkeletonTable';

export const Table = ({
    headers = [], // array of objects with {title, textAlign}
    data = [], // array of objects with keys matching headers 
    sizesColumns = [], // array of numbers
}) => {
    const { loading } = useSelector(state => state.ui);

    function StarWrapper({ children }) {
        return (
            <div
                style={{
                    display: 'inline-block',
                    clipPath:
                        'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    width: '100px',
                    height: '100px'
                }}
            >
                {children}
            </div>
        )
    }
    // console.log(data)
    return (
        <div className="table ">
            {true ?
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
                            <div className="table__body__row" key={index}>
                                {
                                    item.map((cell, andex) => (
                                        <div className="table__body__row__cell animation__fadeIn" style={{ width: `${sizesColumns[andex]}%`, justifyContent: `${headers[andex].textAlign}`, textAlign: `${headers[andex].textAlign}` }} key={andex}>
                                            {cell}
                                        </div>
                                    ))
                                }
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}
