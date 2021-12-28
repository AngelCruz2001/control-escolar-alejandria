import { types } from "../types/types";

const initialValue = {
    id_student: '',
    matricula: '',
    student_fullname: '',
    name_group: '',
    id_group: 5,
    campus_name: '',
    major_name: '',
    ins_date: '',
    course_name: '',
    student_name:'',
    educational_level:''

}

export const studentReducer = (state = initialValue, action) => {
    switch (action.type) {
        case types.studentSetActive:
            return {
                ...state,
                ...action.payload
            }
        case types.studentClearData:
            return {
                ...state,
                ...initialValue
            }

        default:
            return state;
    }
}
