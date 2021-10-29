import React from 'react'

export const ButtonTable = ({
    type,
    onClick,
    title,
}) => {

    const button = () => {
        switch (type) {
            case 'button':
                return (
                    <button
                        className="btn btn-primary"
                        onClick={onClick}
                    >
                        {title}
                    </button>
                )
        }
    }
    return (

        <>
            {
                type === 'see' ? (
                    <button className="btn btnTableSee"> <i className="fas fa-eye"></i> </button>
                ) : type === 'check' ? (
                    <input />
                ) : null
            }
        </>
    )
}
