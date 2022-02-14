import React from 'react'
import { NavLink } from 'react-router-dom'
/**
    * @description ButtonTable component
    * @param {int} type - type of button
    * @param {function} onClick - function to be called on click
    * @param {string} title - title of button
    * @returns {object} ButtonTable component
    * 
    * @type: 
    * 0 : See. 
    * 1 : Edit.
    * 2 : Delete. 
    * 
 */
export const ButtonTable = ({
    type,
    onClick,
    title = '',
    title2 = '',
    id
}) => {

    const buttonGenerator = () => {
        switch (type) {
            case 0:
                return (
                    <button className="btn btnTable btnBlue" onClick={(data) => onClick(data)}> <span>{title}</span> <i className="fas fa-eye"> </i> </button>
                )
            case 1:
                return (
                    <button className="btn btnTable btnBlue" onClick={() => onClick(id)}> <span>{title}</span> <i className="fas fa-edit"></i> </button>
                )
            case 2:
                return (
                    <button className="btn btnTable btnRed" onClick={() => onClick(id)}> <span>{title}</span> <i className="fas fa-trash"></i> </button>
                )
            case 3:
                return (
                    <button className="btn btnTable btnBlue" onClick={() => onClick(id)}> <span className="btnBlue">Cancelar</span> <i className="fas fa-times-circle"></i> </button>
                )
            case 4:
                return (
                    <button className="btn btnTable btnGreen" onClick={() => onClick(id)}> <span className="btnGreen">Efectuado</span> <i className="fas fa-check-circle"></i> </button>
                )
            case 5:
                return (
                    <NavLink className="btn btnTable" to={`/realizar_pago/${id}`}>
                        <p>LIQUIDAR O ABONAR</p>
                        <i className={`fas fa-chevron-circle-right`}></i>
                    </NavLink>
                )
            case 6:
                return (
                    <div className='btnTable__container__acceptDecline'>
                        <button className='btn btnTable accept' onClick={() => onClick(id)} > <i className="fas fa-check-circle"></i> </button>
                        <button className='btn btnTable cancel' onClick={() => onClick(id)} > <i className="fas fa-times-circle"></i> </button>
                    </div>
                )

                case 7:
                    return (
                        <button className="btn btnTable btnStudentRequest btnYellow" onClick={() => onClick(id)}> 
                            <i className="fas fa-times-circle"></i> 
                            <span className="btnYellow">{title}</span>
                         </button>
                    )
                    
                case 8:
                    return (
                        <div className=" btn btnTable btnStudentRequest btnBlueStudent" > 
                            <i className="fas  fa-check-circle"></i> 
                            <span className="">{title}</span>
                         </div>
                    )
                
                case 9:
                    return (
                        <span className='btnTableCourses' onClick={id}>{title}</span>
                    )

                case 10:
                    return (
                        <span className='btnTableCourses' onClick={id}>{title} / {title2}</span>
                    )

            default:
                return (
                    <></>
                )
        }
    }
    return (buttonGenerator())
}
