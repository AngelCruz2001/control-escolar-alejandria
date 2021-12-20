import React from 'react';

export const SkeletonTable = ({ headers, sizesColumns }) => {
    return (
        <>
            <div className="table__headers">
                {
                    headers.map(({ title, textAlign }, index) => (
                        <div className="table__headers__cell" style={{ width: `${sizesColumns[index]}%`, textAlign: `${textAlign}` }} key={index}>{title}</div>
                    ))
                }
            </div>
            <div className="table__body scroll">
                {
                    new Array(7).fill(0).map(({ }, index) => (
                        <div className="table__body__row noselect skeleton__row" key={index}>
                            {
                                headers.map((header, index) => (
                                    <div className="table__body__row__cell skeleton__cell" style={{ color: 'transparent', width: `${sizesColumns[index]}%`, justifyContent: `${headers[index].textAlign}`, textAlign: `${headers[index].textAlign}` }} key={index}>
                                        .
                                    </div>
                                ))
                            }
                        </div>
                    ))}
            </div>
        </>
    )
}
