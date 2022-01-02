import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gradesStartGetGradesByMatricula } from '../../actions/grades';
import { studentStartGetStudentByMatricula } from '../../actions/student';
import { buildDataGradesStudent } from '../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../helpers/isACoincidence';
import { StudentsNavbar } from '../general/navbar/StudentsNavbar'
import { Searchbar } from '../ui/Searchbar';
import { StudentInformation } from '../ui/StudentInformation';
import { Table } from '../ui/Table';


const headers = [{
    title: "Clave",
    textAlign: 'center'
},
{
    title: "Materia",
    textAlign: 'center'
},
{
    title: "Docente",
    textAlign: 'center'
},
{
    title: "Calificación",
    textAlign: 'center'
},
{
    title: "Fecha de impartición",
    textAlign: 'center'
},
{
    title: "Estatus",
    textAlign: 'center'
},
{
    title: "Tipo curso",
    textAlign: 'center'
},
];

export const MainStudentScreen = () => {

    const { auth, student, grades, ui } = useSelector(state => state)
    // TODO: sacar la matricula del selector y ponerla en los dispatch y sacar el promedio del usuario
    // TODO: preguntarle a retana que onda con el status de la grade
    const dataInformation = {
        headers: ['matricula', 'alumno', 'carrera', 'campus', 'promedio'],
        data: [
            student.matricula,
            student.student_name,
            student.major_name,
            student.status,
            '9.8'

        ]
    };

    const [dataShow, setDataShow] = useState([]);
    const [valueSearchFilter, setValueSearchFilter] = useState({ searchWord: '' })


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(studentStartGetStudentByMatricula('qwerry2'))
        dispatch(gradesStartGetGradesByMatricula('qwerry2'))


    }, [])

    const generateData = () => {
        const dataToShow = [];
        const { searchWord } = valueSearchFilter;
        grades.activeStudentGrade.forEach(({ key, course, teacher, grade, date, status = "Aprobado", type }) => {
            const coincidence = isACoincidenceSearch([key, course, teacher, grade, date, status, type], searchWord)
            const dataBuilded = buildDataGradesStudent(key, course, teacher, grade, date, status, type, coincidence)
            if (searchWord === '') {
                dataToShow.push(dataBuilded)
            } else if (coincidence.includes(true)) {
                dataToShow.push(dataBuilded)
            }


        });
        setDataShow(dataToShow)
    }
    useEffect(() => {

        generateData()

    }, [grades])


    return (
        <>
            <StudentsNavbar />

            <main>

                <StudentInformation
                    studentInformation={dataInformation} />
                <Searchbar />

                <div className='mainStudent__tableContainer'>
                    <Table
                        headers={headers}
                        data={dataShow}
                        sizesColumns={[19, 10, 15, 35, 7, 3, 9]}
                    />
                </div>
            </main>

        </>
    )
}
