import React from 'react'
import { useDispatch } from 'react-redux'
import { uiSetModalOpen } from '../../actions/ui'
import { InformationModal } from '../expenseRecord/InformationModal'
import { ButtonTable } from './table/ButtonTable'

export const Modal = () => {
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(uiSetModalOpen(false));
    }

    return (
        <div className="general__overtexture__modalEdit">
            <div className="general__overtexture__modalEdit__content">
                <div className="general__overtexture__modalEdit__content__title">
                    <button className="btn btn__back" onClick={handleCloseModal}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                </div>
                <div className="general__overtexture__modalEdit__content__body">
                    <InformationModal title="Fecha" text="08 de julio de 2021" />
                    <InformationModal title="Tipo de gasto" text="Pago de transporte" />
                    <InformationModal title="Cantidad" text="$75.50 (Setenta y cinto pesos y cincuenta centavos)" />
                    <InformationModal title="Descripción" text="Se pagó a Lupita Contreras transporte para llegar al Instituto. Taxi : $75.50" />
                </div>
                <div className="general__overtexture__modalEdit__content__footer">
                    <ButtonTable type={1} title="Editar" />
                    <ButtonTable type={2} title="Borrar" />
                </div>


            </div>
        </div>
    )
}
