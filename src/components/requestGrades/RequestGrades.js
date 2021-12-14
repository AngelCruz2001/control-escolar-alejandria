import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gradesStartGetGrades } from '../../actions/grades';
import { Searchbar } from '../ui/Searchbar';
import { Table } from '../ui/Table'
import { ButtonTable } from '../ui/table/ButtonTable';
import { SpanTable } from '../ui/table/SpanTable';

export const RequestGrades = () => {
    const headers = [{
        title: "Nombre del alumno",
        textAlign: 'left'
    },
    {
        title: "Matricula",
        textAlign: 'center'
    },
    {
        title: "Grupo",
        textAlign: 'center'
    },
    {
        title: "Carrera",
        textAlign: 'left'
    },
    {
        title: "Ver",
        textAlign: 'center'
    }];

    const dispatch = useDispatch();
    const { grades } = useSelector(state => state.grades)
    console.log(grades)
    useEffect(() => {
        dispatch(gradesStartGetGrades())
    }, [])
    // const dataShow = grades.data.map((i) => (
    //     [
    //         <SpanTable text="Dayana Labrador Espino" />,
    //         <SpanTable text="XXX0002B0000" />,
    //         <SpanTable text="Domingos B" />,
    //         <SpanTable text="Licenciatura en innovación educativa" />,
    //         <ButtonTable type={0} />
    //     ]
    // ))

    return (
        <div className="gra__container">
            <Searchbar placeholder="Buscar por nombre, matrícula o grupo del estudiante" />
            <h4>Todos los alumnos</h4>
            <Table
                headers={headers}
                data={[]}
                sizesColumns={[29, 15, 15, 35, 7]}
            />
        </div>
    )
}
