import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom'
import { uiIsSubMenuOpen } from '../../actions/ui'
import { useAccess } from '../../hooks/useAccess'
import { Modal } from '../ui/Modal'
import { Navbar } from './navbar/Navbar'
import { Texture } from './texture/Texture'

export const Main = () => {
    const dispatch = useDispatch()
    const { isModalOpen, isShowMenuOpen } = useSelector(state => state.ui);
    const [roles, componentsAccess] = useAccess();
    const handleClickMenuSection = ({ target }) => {
        dispatch(uiIsSubMenuOpen(target.name));
        console.log(target)
    }
    console.log(componentsAccess)
    return (
        <div>
            {roles[0] === 8 ?
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
                                            <NavLink name={component.name} key={index} className="general__menu__item" activeClassName="active" to={component.path} >
                                                <button className='btn' onClick={handleClickMenuSection} name={component.name}>
                                                    <div className='general__menu__item__content'>
                                                        <i className={`${component.icon}`} style={component.css}></i>
                                                        <p>{component.text}</p>
                                                    </div>
                                                </button>

                                            </NavLink>
                                            {isShowMenuOpen.feed &&
                                                component.subMenu.map((subItem, index) => (
                                                    <NavLink key={index} className="general__menu__item__sub__item" activeClassName="general__menu__item__sub__item__active" to={subItem.path}>
                                                        <i className={`${subItem.icon}`} style={subItem.css}></i>
                                                        <p>{subItem.text}</p>
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
                                            <Route key={index} path={`${componentData.path}/:name?`} component={componentData.component} key={index} />
                                        ))
                                    }

                                </Switch>
                                {isModalOpen && <Modal />}
                            </div>
                        </div>
                    </section >
                </div>
            }
        </div>

    )
}
