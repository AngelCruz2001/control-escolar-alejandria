import React from 'react'

export const StudentInformation = () => {
    
    return (
        <div className="stuInfo">
            <p className="general__titleSection">Información del alumno</p>
            <div className="stuInfo__container">

                <div className="stuInfo__container__containerTwo">

                    <div className="stuInfo__container__containerTwo__row">
                        <div className="stuInfo__container__containerTwo__row__header">
                            <p className="stuInfo__name">Alumno:</p>
                        </div>
                        <div className="stuInfo__container__containerTwo__row__info">
                            Dayana Labrador Espino
                        </div>
                    </div>

                    <div className="stuInfo__container__containerTwo__row">
                        <div className="stuInfo__container__containerTwo__row__header">
                            <p className="stuInfo__name">Grupo:</p>
                        </div>
                        <div className="stuInfo__container__containerTwo__row__info">
                            Domingos B
                        </div>
                    </div>

                    <div className="stuInfo__container__containerTwo__row">
                        <div className="stuInfo__container__containerTwo__row__header">
                            <p className="stuInfo__name">Campus:</p>
                        </div>
                        <div className="stuInfo__container__containerTwo__row__info">
                            INSTITUTO DE EDUCACÍON Y CULTURA ALEJANDRÍA DURANGO
                        </div>
                    </div>

                    <div className="stuInfo__container__containerTwo__row">
                        <div className="stuInfo__container__containerTwo__row__header">
                            <p className="stuInfo__name">Carrera:</p>
                        </div>
                        <div className="stuInfo__container__containerTwo__row__info">
                            Maestria en innovación educativa
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
