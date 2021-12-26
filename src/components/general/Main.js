import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom'
import { ExpenseRecord } from '../expenseRecord/ExpenseRecord'
import { FertilizerPay } from '../fertilizerPay/FertilizerPay.js'
import { RequestDocument } from '../requestDocument/RequestDocument'
import { RequestGrades } from '../requestGrades/RequestGrades'
import { Modal } from '../ui/Modal'
import { Navbar } from './navbar/Navbar'
import { Texture } from './texture/Texture'
<<<<<<< HEAD
=======
import { useSelector } from 'react-redux'
import { MakePay } from '../makePayment/MakePay'
import { FertilizerPay } from '../fertilizerPay/FertilizerPay'

>>>>>>> origin/paymentsV2


const itemsMenu = [
    { name: "Solicitud de documento", icon: "fas fa-file", css: { transform: "rotate(90deg) scaleX(-1)" } },
    { name: "Consulta de calificaciones", icon: "fas fa-folder-open", css: {} },
    { name: "Registro de gastos", icon: "fas fa-ticket-alt", css: {} },
    { name: "Realizar pago", icon: "fas fa-money-bill", css: {} },
    { name: "Abonos", icon: "fas fa-coins", css: {} },
    { name: "Consultar estado de pago", icon: "fas fa-money-check-alt", css: {} },

]
export const Main = () => {


    const state = useSelector(state => state);
    // const { expenses } = state.expenses;
    const { isModalOpen } = state.ui;
    //Borrar de aqui
    // const {active} = useSelector(state => state.document)


    return (
        <div className={`${isModalOpen ? 'filterModal' : ''}`} >

            {/* <div className={`${ expenses && 'blackFilter'}`}></div> */}

            < Texture />
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
                            <Route path="/abonos" component={FertilizerPay} />
                            {/* <Redirect to="/solicitud_de_documento" /> */}
                        </Switch>
                        {isModalOpen && <Modal />}
                    </div>
                </div>
            </section >
        </div >
    )
}
