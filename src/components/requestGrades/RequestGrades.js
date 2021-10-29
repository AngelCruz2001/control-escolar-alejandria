import React from 'react'
import { useDispatch } from 'react-redux';
import { authStartLogout } from '../../actions/auth';
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
    const data = [
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="Domingos B" />,
            <SpanTable text="Licenciatura en innovación educativa" />,
            <ButtonTable type={'see'} title="Ver" />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="Domingos B" />,
            <SpanTable text="Licenciatura en innovación educativa" />,
            <ButtonTable type={'see'} title="Ver" />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="Domingos B" />,
            <SpanTable text="Licenciatura en innovación educativa" />,
            <ButtonTable type={'see'} title="Ver" />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="Domingos B" />,
            <SpanTable text="Licenciatura en innovación educativa" />,
            <ButtonTable type={'see'} title="Ver" />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="Domingos B" />,
            <SpanTable text="Licenciatura en innovación educativa" />,
            <ButtonTable type={'see'} title="Ver" />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="Domingos B" />,
            <SpanTable text="Licenciatura en innovación educativa" />,
            <ButtonTable type={'see'} title="Ver" />
        ],
        [
            <SpanTable text="Dayana Labrador Espino" />,
            <SpanTable text="XXX0002B0000" />,
            <SpanTable text="Domingos B" />,
            <SpanTable text="Licenciatura en innovación educativa" />,
            <ButtonTable type={'see'} title="Ver" />
        ],



    ];
    return (
        <div className="gra__container">
            <Searchbar placeholder="Buscar por nombre, matrícula o grupo del estudiante" />
            <h4>Todos los alumnos</h4>
            <Table
                headers={headers}
                data={data}
                sizesColumns={[29, 15, 15, 35, 7]}
            />
        </div>
    )
}
