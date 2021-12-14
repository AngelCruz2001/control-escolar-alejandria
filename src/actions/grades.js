import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"

export const gradesStartGetGrades = () => {
    return async (dispatch) => {
        try {
            const res = await fetchConToken(`grades/all`)
            const body = await res.json()
            if (body.ok) {
                console.log(body)
                dispatch(gradesSetGrades(body.grades))
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



const gradesSetGrades = (grades) => ({ type: types.gradesSetGrades, payload: grades })