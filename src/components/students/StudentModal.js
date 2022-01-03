import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { useDispatch, useSelector } from "react-redux";

import { authStartResetPassword } from "../../actions/auth";
import logoAleNoText from "../../resources/images/logoAleNoText.png";

export const StudentModal = () => {
  //TODO: ARREGLAR BUG DE ERROR DE LA CONTRASEÑA ANTERIOR ESTA MAL REINICIIAR CUANDO ES TOUCHED

  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.auth);

  useEffect(() => {}, [error]);

  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
    handleReset,
    values,
    setValues,
  } = useFormik({
    initialValues: {
      oldPass: "",
      newPass: "",
      confirmPass: "",
      showPassword: false,
      showPassword2: false,
      showPassword3: false,
    },

    onSubmit: (values) => {
      dispatch(authStartResetPassword(values.oldPass, values.newPass));
    },
    validationSchema: Yup.object({
      oldPass: Yup.string().required("Requerido"),
      newPass: Yup.string().required("Requerido"),
      confirmPass: Yup.string()
        .oneOf([Yup.ref("newPass")], "Las contraseñas no coinciden")
        .required("Requerido"),
    }),
  });

  const handleClickShowPassword = (number) => {
    const names = ["showPassword", "showPassword2", "showPassword3"];
    setValues({ ...values, [names[number]]: !values[names[number]] });
  };

  return (
    <div className="studentsPswd">
      <div className="studentsPswd__header">
        <img src={logoAleNoText} alt="logo" width="150px" height="150px" />
        <p> DSADFJHASFASF </p>
        <h3 className="studentsPswd__header-title">Cambio de contraseña</h3>
      </div>

      <form onSubmit={handleSubmit} noValidate className="studentsPswd__form">
        <div className="studentsPswd__form__row">
          <label htmlFor="oldPass">Introduce tu contraseña actual</label>
          <Input
            type={values.showPassword ? "text" : "password"}
            {...getFieldProps("oldPass")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => handleClickShowPassword(0)}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {!touched.oldPass && error && <span  className="form__error">{error}</span>}
          {touched.oldPass && errors.oldPass && (
            <span className="form__error">{errors.oldPass}</span>
          )}
        </div>

        <div className="studentsPswd__form__row">
          <label htmlFor="newPass">Nueva contraseña</label>
          <Input
            type={values.showPassword2 ? "text" : "password"}
            {...getFieldProps("newPass")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => handleClickShowPassword(1)}>
                  {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {touched.newPass && errors.newPass && (
            <span className="form__error">{errors.newPass}</span>
          )}
        </div>

        <div className="studentsPswd__form__row">
          <label htmlFor="confirmPass">Confirma tu nueva contraseña</label>
          <Input
            type={values.showPassword3 ? "text" : "password"}
            {...getFieldProps("confirmPass")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => handleClickShowPassword(2)}>
                  {values.showPassword3 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {touched.confirmPass && errors.confirmPass && (
            <span className="form__error">{errors.confirmPass}</span>
          )}
        </div>
        <div className="studentsPswd__submit studentReqDoc__submit">
          <button
            // className={`studentReqDoc__submit-btn btn activeCancel `}
            className={`studentReqDoc__submit-btn btn ${
              !touched.newPass ? "ui__disabledEffect" : "activeSubmit"
            }`}
            type="submit"
          >
            Submit
          </button>
          <button
            className={`studentReqDoc__submit-btn btn ${
              !touched.oldPass ? "ui__disabledEffect" : "activeCancel"
            }`}
            type="button"
            onClick={handleReset}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
