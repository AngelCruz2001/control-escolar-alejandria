import Swal from 'sweetalert2';
import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import { uiFinishLoading, uiStartLoading } from './ui';

export const assistanceStartGetAssistance = () => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try{
            const res = await fetchConToken(`assits`, 'GET')
            const body = await res.json()

            if(body.ok){
                console.log(body);
                // dispatch(teacherSetActiveCouses(body.courses))
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
            dispatch(uiFinishLoading())
        } catch(error){
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}

export const assistanceStartGetAssistanceByType = ( type, id_course ) => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        type = type.toLowerCase();

        try{
            const res = await fetchConToken(`assits/${type}/${id_course}/assistance_days`, 'GET')
            const body = await res.json()

            if(body.ok){
                console.log(body);
                dispatch(assistanceSetActive(body.assistence_days_dates))
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
            dispatch(uiFinishLoading())
        } catch(error){
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}


const assistanceSetActive = data =>({type: types.assistanceSetActive, payload: data})

