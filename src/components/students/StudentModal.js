import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { useDispatch, useSelector } from 'react-redux';
import { authStartResetPassword } from '../../actions/auth';

export const StudentModal = () => {

    //TODO: ARREGLAR BUG DE ERROR DE LA CONTRASEÑA ANTERIOR ESTA MAL REINICIIAR CUANDO ES TOUCHED


    const dispatch = useDispatch();

    const {error} = useSelector(state => state.auth)

    useEffect(() => {
        
    }, [error])
   
    const { handleSubmit, errors, touched, getFieldProps, handleReset, values, setValues } = useFormik({
        initialValues: {
            oldPass: '',
            newPass: '',
            confirmPass: '',
            showPassword: false,
            showPassword2: false,
            showPassword3: false,
        },

        onSubmit: (values) => {
            dispatch(authStartResetPassword(values.oldPass, values.newPass))
        },
        validationSchema: Yup.object({
            oldPass: Yup.string()
                .required('Requerido'),
            newPass: Yup.string()
                .required('Requerido'),
            confirmPass: Yup.string()
                .oneOf([Yup.ref('newPass')], 'Las contraseñas no coinciden')
                .required('Requerido'),
        })
    });

    const handleClickShowPassword = (number) => {
        const names = ['showPassword', 'showPassword2', 'showPassword3'];
        setValues({ ...values, [names[number]]: !values[names[number]] });
    };

    


    return (
        <>
            <h3>Cambio de contraseña</h3>
            <form onSubmit={handleSubmit} noValidate style={
                {
                    display: 'flex',
                    flexDirection: 'column'
                }
            }>

                <div >

                    <label htmlFor="oldPass">Introduce tu contraseña actual</label>
                    <Input type={values.showPassword ? "text" : "password"} {...getFieldProps('oldPass')} className='color__input'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => handleClickShowPassword(0)}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {!touched.oldPass && error && <span>{error}</span>}
                    {touched.oldPass && errors.oldPass && <span>{errors.oldPass }</span>}
                </div>

                <div>

                    <label htmlFor="newPass">Nueva contraseña</label>
                    <Input type={values.showPassword2 ? "text" : "password"} {...getFieldProps('newPass')} className='color__input'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => handleClickShowPassword(1)}
                                >
                                    {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {touched.newPass && errors.newPass && <span>{errors.newPass}</span>}
                </div>
                <div>

                    <label htmlFor="confirmPass">Confirma tu nueva contraseña</label>
                    <Input type={values.showPassword3 ? "text" : "password"} {...getFieldProps('confirmPass')} className='color__input'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => handleClickShowPassword(2)}
                                >
                                    {values.showPassword3 ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {touched.confirmPass && errors.confirmPass && <span>{errors.confirmPass}</span>}
                </div>
                <div>

                    <button type="submit">Submit</button>.
                    <button type="button" onClick={handleReset}>Cancelar</button>
                </div>


            </form>

        </>
    )
}












