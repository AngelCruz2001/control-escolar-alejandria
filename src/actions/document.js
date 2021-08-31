import {types} from '../types/types'
import Swal from 'sweetalert2'
import {fetchConToken} from '../helpers/fetch';
import { uiStartLoading, uiFinishLoading } from './ui';

export const documentStartGetStudentByMatricula = (matricula) => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        dispatch(documentClearActiveDocument())
        dispatch(documentC)
        try {
            const res = await fetchConToken(`students/${matricula}`, 'GET') 
            const body = await  res.json()
            if(body.ok) {
                dispatch(documentSetActive(body.student));
            }else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
            dispatch(uiFinishLoading())
        }  catch(error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }  
    }
}

export const documentStartRequestDocument = () => {
    return async (dispatch, getState) => {
        try {
            const {idRequest} = getState().document;
            console.log(getState().document)

            const res = await fetchConToken(`documents/${idRequest}`, POST)
            const body = await res.json()
            if(body.ok) {
                console.log(body)
                dispatch(documentClearData())
                Swal.fire({
                    title: "¡LO LOGRAMOOOOOOS!",
                    text: "¡LO LOGRAMOOOOOS!" + '.',
                    icon: 'success',
                })
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}

const documentSetActive = data => ({ type: types.documentSetActive, payload: data})

const documentClearActiveDocument = () => ({type: types.documentClearActive})

const documentSetDocument = (document) => ({ type: types.documentSetDocument })

export const documentClearData = () => ( {type: types.documentClearData})