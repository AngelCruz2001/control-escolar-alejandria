import Swal from 'sweetalert2';
import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import { uiFinishLoading, uiStartLoading } from './ui';

export const teacherStartGetCoursesById = (idTeacher, status = undefined) => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try{
            const res = await fetchConToken(`teachers/${idTeacher}/courses?${status !== undefined ?  `status=${status}` : ''}`,'GET')
            console.log(`teachers/${idTeacher}/courses?${status !== undefined ?  `status=${status}` : '' }`)
            const body = await res.json()

            if(body.ok){
                console.log(body);
                dispatch(teacherSetActiveCouses(body.courses))
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

const teacherSetActiveCouses = data => ({ type: types.teacherSetCourses, payload: data })