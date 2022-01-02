import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authStartLogout } from '../../../actions/auth';

// Images imports 
import logoAleNoText from '../../../helpers/resources/images/logoAleNoText.png'


export const Navbar = () => {

    const dispatch = useDispatch();
    const handleClickLogout = (e) => {
        e.preventDefault();
        dispatch(authStartLogout())
    }

    const num = 8;

    return (
        <div className="navbar" >
            <div className="navbar__logo">
                <img src={logoAleNoText} alt="Logotipo del Instituto de Educación y Cultura Alejandría." />
                <p className="navbar__logo__text">Instituto de Educación <br />y Cultura Alejandría S.C. </p>
            </div>
            <div className="navbar__text">
                <h2>Recepción</h2>
            </div>
            <div className="navbar__logout " onClick={handleClickLogout}>
                <i className="fas fa-user-circle btn"></i>
            </div>
               
               
            
        </div>
    )
}
