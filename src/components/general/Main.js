import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom'
import { useAccess } from '../../hooks/useAccess'
import { Modal } from '../ui/Modal'
import { Navbar } from './navbar/Navbar'
import { Texture } from './texture/Texture'

export const Main = () => {

    const { isModalOpen } = useSelector(state => state.ui);
    const [roles, componentsAccess] = useAccess();

    return (

        <p>
            {
                roles[0] === 8 ?
                    <p>Alumnos</p>
                    :
                    <div className={`${isModalOpen ? 'filterModal' : ''}`} >
                        <Texture />
                        <Navbar />
                        <section>
                            <div className="general">
                                <div className="general__menu">

                                    {
                                        componentsAccess.map((component, index) => (
                                            <>
                                                <NavLink className="general__menu__item" activeClassName="active" to={component.path} key={index}>
                                                    <i className={`${component.icon}`} style={component.css}></i>
                                                    <p>{component.name}</p>
                                                </NavLink>
                                                {
                                                    component.subMenu.map((subItem, index) => (
                                                        <NavLink key={index} className="general__menu__item__subMenu" activeClassName="general__menu__item__subMenu__active" to={subItem.path}>
                                                            <i className={`${subItem.icon}`} style={subItem.css}></i>
                                                            <p>{subItem.name}</p>
                                                        </NavLink>
                                                    ))
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                                <div className="general__overtexture">
                                    <Switch>
                                        {/* <Redirect from="/captura_de_datos/" to="/captura_de_datos/alumnos" /> */}
                                        {
                                            componentsAccess.map((componentData, index) => (
                                                <Route path={`${componentData.path}/:name?`} component={componentData.component} key={index} />
                                            ))
                                        }

                                    </Switch>
                                    {isModalOpen && <Modal />}
                                </div>
                            </div>
                        </section >
                    </div>
            }
        </p>

    )
}
