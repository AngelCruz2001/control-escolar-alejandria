import React from 'react'

import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { RequestGrades } from '../requestGrades/RequestGrades'

import { Navbar } from './navbar/Navbar'
import { RequestDocument } from './sections/RequestDocument'
import { Texture } from './texture/Texture'

const itemsMenu = [
    { name: "Solicitud de documento", icon: "fas fa-file", css: { transform: "rotate(90deg) scaleX(-1)" } },
    { name: "Consulta de calificaciones", icon: "fas fa-folder-open", css: {} },
    { name: "Registro de gastos", icon: "fas fa-ticket-alt", css: {} },
    { name: "Realizar pago", icon: "fas fa-money-bill", css: {} },
    { name: "Abonos", icon: "fas fa-coins", css: {} },
    { name: "Consultar estado de pago", icon: "fas fa-money-check-alt", css: {} },

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
                            <NavLink className="general__menu__item" activeClassName="active" to={`/${item.name.replaceAll(' ', '_').toLowerCase()}`} key={index}>
                                <i className={`${item.icon}`} style={item.css}></i>
                                <p>{item.name}</p>
                            </NavLink>
                        ))}

                    </div>
                    <div className="general__overtexture">
                        <Switch>
                            <Route path="/solicitud_de_documento" component={RequestDocument} />
                            <Route path="/consulta_de_calificaciones" component={RequestGrades} />
                            {/* <Redirect to="/solicitud_de_documento" /> */}
                        </Switch>
                    </div>
                </div>


            </section>
        </div>
    )
}
