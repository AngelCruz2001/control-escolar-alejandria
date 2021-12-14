import React from 'react'

export const InformationModal = ({ title, text }) => {
    return (
        <div>
            <p className="title">{title}</p>
            <p className='notitle'>{text}</p>
        </div>
    )
}
