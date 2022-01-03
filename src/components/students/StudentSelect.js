import React, { useState } from 'react'


const documentsStudent = [
    {
        id: 1,
        document: 'Constancia de estudios con calificaciones'
    },
    {
        id: 0,
        document: 'Constancia de estudios sin calificaciones'
    },
    {
        id: 10,
        document: 'Kardex'
    },
    {
        id: 3,
        document: 'Solicitud de servicio'
    },
    {
        id: 2,
        document: 'Solicitud de prácticas'
    },
    {
        id: 13,
        document: 'Liberación de servicio'
    },
    {
        id: 14,
        document: 'Liberación de prácticas'
    },
    {
        id: 11,
        document: 'Acta de examen'
    }

]



export const StudentSelect = ({handleRequestDocument, documentSelected, setDocumentSelected}) => {
    const [documents, setDocuments] = useState(documentsStudent)
    
    const handleInputChange = ({ target }) => {
        const { value } = target;
        setDocumentSelected(value)
    }
    const handleCancel = () => {
        setDocumentSelected('')
    }

    return (
        <div>
            <h3>Solicitar documento</h3>
            <select value={documentSelected} onChange={handleInputChange} className="scroll" name="document">
                <option hidden defaultValue>
                    Seleccione
                </option>
                {documents.map(({ document, id }) => (
                    <option value={id} key={document}>
                        {document}
                    </option>
                ))}
            </select>
            {
                documentSelected &&
                (
                    <button
                        onClick={handleCancel}>
                        Cancelar
                    </button>
                )

            }
            <button
                className={`${(!documentSelected) && 'ui__disabledEffect'}`}
                onClick={()=>handleRequestDocument(documentSelected)}
            >
                Solicitar
            </button>
        </div>
    )
}
