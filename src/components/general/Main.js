import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar } from './navbar/Navbar'
import { Texture } from './texture/Texture'

const itemsMenu = [
    { name: "Solicitud de documento", icon: "fas fa-file", css: { transform: "rotate(90deg) scaleX(-1)" } },
    { name: "Consulta de calificaciones", icon: "fas fa-folder-open", css: {} },
    { name: "Registro de gastos", icon: "fas fa-ticket-alt", css: {} },
    { name: "Realizar pago", icon: "fas fa-money-bill", css: {} },
    { name: "Abonos", icon: "fas fa-coins", css: {} },
    { name: "Consultar estado de pago", icon: "fas fa-money-check-alt", css: {} },
    // { name: "Captura de datos" }
]

export const Main = () => {


    //Borrar de aqui
    const {active} = useSelector(state => state.document)
 

    return (
        <div>
            <Texture />
            <Navbar />
            <section>
                <div className="general">
                    <div className="general__menu">
                        {itemsMenu.map((item, index) => (
                            <NavLink className="general__menu__item" activeClassName="active" to={`/${item.name.replace('%20', '_').toLowerCase()}`} key={index}>
                                <i className={`${item.icon}`} style={item.css}></i>
                                <p>{item.name}</p>
                            </NavLink>
                        ))}

                    </div>
                    <div className="general__overtexture">
                        <h1></h1>
                    </div>
                </div>


            </section>
        </div>
    )
}
