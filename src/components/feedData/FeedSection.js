import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { feedStartGetData } from '../../actions/feed';
import { Searchbar } from '../ui/Searchbar';
import { Table } from '../ui/Table';
import dataSections from './dataSections.json';
export const FeedSection = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { name } = useParams()
    const [dataSection, setDataSection] = useState({})
    const { headers, endpoint, nameSection, placeholder, sizesColumn, dataEndpointName } = dataSection;
    useEffect(() => {
        if (name === undefined) {
            history.push('/captura_de_datos/alumnos')
        } else {
            const data = dataSections[name];
            setDataSection(data)
            dispatch(feedStartGetData(data.endpoint, data.nameSection, data.dataEndpointName))
        }
    }, [])

    return (
        <>
            <div className='feed__headers'>
                <Searchbar
                    placeholder={placeholder}
                />
                <button className='btn btn__add feed__headers__addButton'>
                    <i className='fas fa-plus-circle'></i>
                    <span>Agregar nuevo</span>
                </button>
            </div>
            <div className='feed__body'>
                <div className='feed__body__title'>
                    <p className="">Registro de {nameSection}</p>
                </div>
                <div className='feed__body__content'>
                    <Table
                        headers={headers}
                        data={[]}
                        sizesColumns={sizesColumn}
                    />
                </div>
            </div>
        </>
    )
}
