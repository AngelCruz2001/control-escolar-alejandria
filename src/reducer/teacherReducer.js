import {types} from "../types/types"

const initialValue = {
    // id_gro_cou: 1,
    // id_major: null,
    // id_group: null,
    // major_name: "",
    // id_course: null,
    // course_name: "",
    // group_name: "",
    // status: null,
    // start_date: "",
    // end_date: "",
    // type: "",
    courses:[]
}

export const teacherReducer = ( state = initialValue, action ) => {
    switch ( action.type ) {
        
        case types.teacherSetCourses:
            return{
                ...state,
                courses: action.payload
            }

        default:
            return state;
    }
}