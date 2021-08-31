import React from 'react';

export const Matricula = () => {

    return (
        // <form action="" onSubmit={() => console.log("Este debería ser un 'SubmitMatricula', pero no sé realmente si jala. ")}>
        <div className="matri__container">
            <label className="general__titleSection matri__label" htmlFor="matricula">Matrícula</label>
            <input placeholder="0000000000000" maxLength="13" id="matricula" name="matricula" value={"ASDFSADFASDF"} onChange={""} />
        </div>
        // </form>}
    )
}
