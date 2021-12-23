import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { ExpenseRecord } from '../expenseRecord/ExpenseRecord'
import { RequestDocument } from '../requestDocument/RequestDocument'
import { RequestGrades } from '../requestGrades/RequestGrades'
import { Navbar } from './navbar/Navbar'
import { Texture } from './texture/Texture'
import { useSelector } from 'react-redux'
import { MakePay } from '../makePayment/MakePay'



const itemsMenu = [
    { name: "Solicitud de documento", icon: "fas fa-file", css: { transform: "rotate(90deg) scaleX(-1)" } },
    { name: "Consulta de calificaciones", icon: "fas fa-folder-open", css: {} },
    { name: "Registro de gastos", icon: "fas fa-ticket-alt", css: {} },
    { name: "Realizar pago", icon: "fas fa-money-bill", css: {} },
    { name: "Abonos", icon: "fas fa-coins", css: {} },
    { name: "Consultar estado de pago", icon: "fas fa-money-check-alt", css: {} },

]
export const Main = () => {

    
    const {  expenses } = useSelector(state => state.expenses);
    //Borrar de aqui
    // const {active} = useSelector(state => state.document)


    return (
        <div className="">

            {/* <div className={`${ expenses && 'blackFilter'}`}></div> */}

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
                            <Route path="/registro_de_gastos" component={ExpenseRecord} />
                            <Route path="/realizar_pago" component={MakePay} />

                            {/* <Redirect to="/solicitud_de_documento" /> */}
                        </Switch>
                        {/* <div className="general__overtexture__modalEdit">
                            <div className="general__overtexture__modalEdit__content">
                                <div className="general__overtexture__modalEdit__content__title">
                                    <h1>Editar</h1>
                                    <i className="fas fa-times"></i>
                                </div>
                                <div className="general__overtexture__modalEdit__content__body">
                                    <div className="general__overtexture__modalEdit__content__body__item">
                                        <p>Nombre</p>
                                    </div>
                                    <img src={logoAleNoText} alt="Logo alejandría, marca de agua" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
