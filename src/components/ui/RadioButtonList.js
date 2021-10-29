import React from 'react'

export const RadioButtonList = ({
    items = ["Constancia de estudios",
        "Constancia con calificaciones",
        "Credencial pvc",
        "Carta pasante",
        "Certificado de licenciatura",
        "Certificado de maestría",
        "Título de licenciatura",
        "Título de maestría",
        "Curso de titulación de licenciatura",
        "Curso de titulación de maestría",
    ],
    onChangeValueDocument,
}) => {
    return (
        <div className="radioButtonList">
            <p className="general__titleSection">Documento a solicitar</p>
            <div className="radioButtonList__container" onChange={onChangeValueDocument}>
                {items.map((item, index) => (
                    <div className="pretty-radio" key={index}>
                        <input type="radio" class="radio" name="document" onClick={() => console.log("Click")} />
                        <span class="radio-look"></span>
                        <span>{item}</span>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
