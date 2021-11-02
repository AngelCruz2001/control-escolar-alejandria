import React from 'react'
import {  useHistory  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { authStartChecking, authStartLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
// Images imports 
import logoAleNoText from '../../helpers/resources/images/logoAleNoText.png'

export const LoginScreen = () => {
    const dispatch = useDispatch()

    const history = useHistory()
    console.log(history)
    const lastPath = localStorage.getItem('lastPath')
    console.log(lastPath)

    const { checking } = useSelector(state => state.auth)
    const [formValues, handleInputChange,] = useForm({
        username: "admin",
        password: "sud0_c34_r00t"
    })
    const { username, password } = formValues;
    const handleClickLogin = () => {
        // e.preventDefault();
        dispatch(authStartLogin(username, password))
        history.replace(lastPath)
    }
   
    return (
        <div className="container auth__container">
            <div className="auth__login">
                <form className={`${(checking) && "ui_blur "}`} onSubmit={handleClickLogin}>
                    <div className="auth__login-inputs">

                        <input
                            className="auth__login-inputs-input"
                            placeholder="Usuario"
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleInputChange}

                        />
                        <i className="auth__login-inputs-icon fas fa-user-alt"></i>
                    </div>
                    <div className="auth__login-inputs">
                        <input
                            className="auth__login-inputs-input"
                            placeholder="Contraseña"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}

                        />
                        <i className="auth__login-inputs-icon fas fa-key"></i>
                    </div>
                    <button
                        className="auth__login-submit btn"
                        type="submit"
                        // onClick={handleClickLogin}
                    >
                        <p>Ingresar</p>
                    </button>
                </form>
                {
                    (checking) &&
                    <div className="ui_fadeIn ui_aniContainer animation__loadIcon">
                        <div className="animation__loadIcon" />
                    </div>
                }
            </div>


            <div className="auth__hero">
                <img className="auth__hero-logo" src={logoAleNoText}  alt="Logo Alejandría" />
                <h1 className="auth__hero-text">Instituto de Educación <br /> y Cultura Alejandría S.C.</h1>
            </div>

        </div >
    )
}

