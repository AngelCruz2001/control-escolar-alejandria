import React from 'react';

export const Searchbar = ({ placeholder, setValueSearchFilter, searchWord, checkState }) => {
    const handleInputChange = ({ target }) => {
        setValueSearchFilter(prev => ({ ...prev, searchWord: target.value }));
    }
    return (
        <div style={{width: checkState && "58%", marginBottom: checkState && "1.5rem"}} className="sea__container">
            <i className="fas fa-search"></i>
            <input type="sea__container__input" value={searchWord} onChange={handleInputChange} placeholder={placeholder} />
        </div>

    )
}
