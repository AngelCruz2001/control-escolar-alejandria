import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gradesStartGetGrades } from '../../actions/grades';
import { Searchbar } from '../ui/Searchbar';
import { Table } from '../ui/Table';
import { ButtonTable } from '../ui/table/ButtonTable';
import { SkeletonTable } from '../ui/table/SkeletonTable';
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
    useEffect(() => {
        dispatch(gradesStartGetGrades())
    }, [])
    const dispatch = useDispatch();
    // const [isStudentSeeing, setIsStudentSeeing] = useState(false);
    const { grades, ui } = useSelector(state => state)
    console.log(grades)
    const { loading } = ui;
    const dataShow = grades.data.map(({ student_name, matricula, group_name, major_name }) => (
        [
            <SpanTable text={student_name} />,
            <SpanTable text={matricula} />,
            <SpanTable text={group_name} />,
            <SpanTable text={major_name} />,
            <ButtonTable type={0} onClick={console.log("Hola")} />
        ]
    ));
    return (
        <div className="gra__container">
            <Searchbar placeholder="Buscar por nombre, matrícula o grupo del estudiante" />
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
