import React from 'react'
import { useSelector } from 'react-redux';
import { Separator } from '../../ui/Separator';
import { ConceptPayButton } from '../ButtonsPay';
import { paySetConcept } from '../../../actions/pay';

export const ConceptPay = () => {
    const { concept, thingToPay} = useSelector(state => state.pay);
    const { matricula }  = useSelector(state=> state.student)
  
    const payText = (!concept) ? 'Concepto a pagar' : (concept == "Inscripción") ? 'Inscripción a pagar' : (concept == "Materia") ? 'Materia a pagar' : 'Documento a pagar';

    return (
        <div className={`make__conceptPay ${!matricula && 'ui__disabledEffect'}`}>
            <div className="make__conceptPay-way">
                <p  className={`make__titleSection ${
            !matricula && "ui__disabledEffectInfo-title "
          }`}>Concepto de pago</p>
                <div className="btn-payContainer">
                    <ConceptPayButton text="Inscripción" icon={false} setData={paySetConcept} isSelected={concept === "Inscripción"} />
                    <ConceptPayButton text="Materia" setData={paySetConcept} isSelected={concept === "Materia"} />
                    <ConceptPayButton text="Documento" setData={paySetConcept} isSelected={concept === "Documento"} />
                </div>
            </div>
            {/* <Separator /> */}

            <div className="make__conceptPay-data">
                <p  className={`make__titleSection ${!concept && "ui__disabledEffectInfo-title "}`}>{payText}</p>
                <input value={concept === "Inscripción" ? "Inscripción Correspondiente" : thingToPay.name} onChange={() => { console.log("You cannot change me.") }} />
            </div>
            {/*Inscripción correspondiente*/}
            {/* <Separator /> */}

        </div>
    )
}
