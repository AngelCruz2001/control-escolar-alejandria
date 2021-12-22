import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gradesStartGetGrades } from '../../actions/grades';
import { buildDataGrades } from '../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../helpers/isACoincidence';
import { Searchbar } from '../ui/Searchbar';
import { Table } from '../ui/Table';
import { SkeletonTable } from '../ui/table/SkeletonTable';

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
    useEffect(() => {
        dispatch(gradesStartGetGrades())
    }, [])
    const dispatch = useDispatch();
    // const [isStudentSeeing, setIsStudentSeeing] = useState(false);
    const { grades, ui } = useSelector(state => state)
    const [valueSearchFilter, setValueSearchFilter] = useState({ searchWord: '' })
    const [dataShow, setDataShow] = useState([])
    const { loading } = ui;

    const handleClickSetActiveStudent = (idStudent) => {
        dispatch(gradesStartGetGrades(idStudent))
    }

    const generateData = () => {
        const dataToShow = [];
        const { searchWord } = valueSearchFilter;
        grades.data.forEach(({ id_student, student_name, matricula, group_name, major_name }) => {
            const coincidence = isACoincidenceSearch([student_name, matricula, group_name, major_name], searchWord)
            const dataBuilded = buildDataGrades(id_student, student_name, matricula, group_name, major_name, handleClickSetActiveStudent, coincidence)
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
    }, [loading, valueSearchFilter])
    return (
        <div className="gra__container">
            <Searchbar placeholder="Buscar por nombre, matrícula o grupo del estudiante" setValueSearchFilter={setValueSearchFilter} valueSearchFilter={valueSearchFilter} />
            <h4>Todos los alumnos</h4>
            {loading ?
                <SkeletonTable
                    headers={headers}
                    sizesColumns={[29, 15, 15, 35, 7]}
                />
                :
                false ?
                    <>
                        {/* <div className="gra__container__header">
                            <button className="btn btn__back" onClick={() => setIsStudentSeeing(false)}>
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <Searchbar setValueSearchFilter={setValueSearchFilter} valueSearchFilter={valueSearchFilter} />
                            <Filters setValueSearchFilter={setValueSearchFilter} />
                        </div>
                        <h4>Historial de solicitud de documentos</h4>

                        <Table
                            headers={headers}
                            data={dataShow}
                            sizesColumns={[30, 15, 15, 30, 10]}
                            loading={true}

                        /> */}
                    </>
                    :
                    <>

                        <Table
                            headers={headers}
                            data={dataShow}
                            sizesColumns={[29, 15, 15, 35, 7]}
                        />
                    </>
            }



        </div >
    )
}
