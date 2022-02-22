import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authStartLogin } from '../../actions/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logoAleNoText from '../../helpers/resources/images/logoAleNoText.png';


export const LoginScreen = () => {
    const { checking } = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            dispatch(authStartLogin(username, password))
            resetForm()

        },
        validationSchema: Yup.object({

            username: Yup.string()
                .required('Requerido'),
            password: Yup.string()
                .required('Requerido'),
        })
    });
    
   
    return (
        <div className="container auth__container">

            <div className="auth__login">
                <form className={`${(checking) && "ui_blur "}`} onSubmit={handleSubmit}>
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
                        onClick={handleClickLogin}
                    >
                        <p>Ingresar</p>
                    </button>
                </form>
                {
                    (checking) &&
                    <div className="ui_fadeIn ui_aniContainer">
                        <div className="ui_loadIcon" />
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

