import React from 'react'

// Images imports 
import logoAleNoText from '../../../helpers/resources/images/logoAleNoText.png'


export const Navbar = () => {
    return (
        <div className="navbar" >
            <div className="navbar__logo">
                <img src={logoAleNoText} alt="Logotipo del Instituto de Educación y Cultura Alejandría." />
                <p className="navbar__logo__text">Instituto de Educación <br />y Cultura Alejandría S.C. </p>
            </div>
            <div className="navbar__text">
                <h2>Recepción</h2>
            </div>
            <div className="navbar__logout">
                <i className="fas fa-user-circle"></i>
            </div>
        </div>
    )
}
