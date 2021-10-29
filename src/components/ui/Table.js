import React from 'react'

export const Table = ({
    headers = [], // array of objects with {title, textAlign}
    data = [], // array of objects with keys matching headers 
    sizesColumns = [], // array of numbers
}) => {
    return (
        <div className="table">
            <div className="table__headers">
                {headers.map(({ title, textAlign }, index) => (
                    <div className="table__headers__cell" style={{ width: `${sizesColumns[index]}%`, textAlign: `${textAlign}` }} key={index}>{title}</div>
                ))}
            </div>
            <div className="table__body">
                {data.map((item, index) => (
                    <div className="table__body__row" key={index}>
                        {item.map((cell, andex) => (
                            <div className="table__body__row__cell" style={{ width: `${sizesColumns[andex]}%`, justifyContent: `${headers[andex].textAlign}` }} key={andex}>
                                {cell}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>

    )
}
