import React from 'react'

export const Searchbar = ({ placeholder, setValueSearchFilter, valueSearchFilter }) => {

    const handleInputChange = ({ target }) => {
        setValueSearchFilter(target.value);

    }
    return (
        <div className="sea__container">
            <i className="fas fa-search"></i>
            <input type="sea__container__input" valueSearchFilter={valueSearchFilter} onChange={handleInputChange} placeholder={placeholder} />
        </div>
    )
}
