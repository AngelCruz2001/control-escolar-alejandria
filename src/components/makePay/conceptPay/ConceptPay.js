import React from 'react'
import { useSelector } from 'react-redux';
import { ConceptPayButton } from '../ButtonsPay';
import { paySetConcept } from '../../../actions/pay';

export const ConceptPay = () => {
    const { concept, thingToPay, active } = useSelector(state => state.pay);

    const payText = (!concept) ? 'Concepto a pagar' : (concept === "Inscripción") ? 'Inscripción a pagar' : (concept === "Materia") ? 'Materia a pagar' : 'Documento a pagar';

    return (
        <div className={`make__conceptPay ${!active && 'ui__disabledEffect'}`}>
            <div>
                <p className="make__titleSection">CONCEPTO DE PAGO</p>
                <div className="btn-payContainer">
                    <ConceptPayButton text="Inscripción" icon={false} setData={paySetConcept} isSelected={concept === "Inscripción"} />
                    <ConceptPayButton text="Materia" setData={paySetConcept} isSelected={concept === "Materia"} />
                    <ConceptPayButton text="Documento" setData={paySetConcept} isSelected={concept === "Documento"} />
                </div>
            </div>
           

            <div className="make__conceptPay-data">
                <p className="make__subTitleSection">{payText}</p>
                <input value={concept === "Inscripción" ? "Inscripción Correspondiente" : thingToPay.name} onChange={() => { console.log("You cannot change me.") }} />
            </div>
            {/*Inscripción correspondiente*/}
           

        </div>
    )
}
