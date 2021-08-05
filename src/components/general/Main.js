import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './navbar/Navbar'
import { Texture } from './texture/Texture'

const itemsMenu = [
    { name: "Solicitud de documento", icon: "fas fa-file" },
    { name: "Consulta de calificaciones", icon: "fas fa-folder-open" },
    { name: "Registro de gastos", icon: "" },
    { name: "Realizar pago", icon: "fas fa-money-bill" },
    { name: "Abonos", icon: "fas fa-coins" },
    { name: "Consultar estado de pago", icon: "fas fa-money-check-alt" },
    // { name: "Captura de datos" }
]

export const Main = () => {
    return (
        <div>
            <Texture />
            <Navbar />
            <section>
                <div className="general">
                    <div className="general__menu">
                        {itemsMenu.map((item, index) => (
                            <div className="general__menu__item">
                                <i className={`${item.icon}`}></i>
                                <Link to={`/${item.name}`} key={index}>{item.name}</Link>
                            </div>
                        ))}

                    </div>
                    <div className="general__overtexture">
                        <h1>Hola a todos, Rafa no se baña. </h1>
                    </div>
                </div>


            </section>
        </div>
    )
}
