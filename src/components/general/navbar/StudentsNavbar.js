import React from 'react'

// Images imports 
import logoAleNoText from '../../../helpers/resources/images/logoAleNoText.png'

export const StudentsNavbar = () => {
    return (
        <nav className="navStudent">
            <div className="navStudent__logo">
                <img src={logoAleNoText} alt="Logotipo del Instituto de Educación y Cultura Alejandría."/>
                <h1>Instituto de Educación <br />y Cultura Alejandría S.C.</h1>
            </div>
            <div className="navStudent__info">
                <div className="navStudent__info-password"><button className='btn'> Cambiar contraseña </button></div>
                <p>DEG012323C872</p>

                <img className="navStudent__info-img" src={logoAleNoText}alt="Logotipo del Instituto de Educación y Cultura Alejandría."/>
                
            </div>
        </nav>
    )
}
