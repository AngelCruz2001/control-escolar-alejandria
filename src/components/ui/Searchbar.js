import React from 'react'

export const Searchbar = ({placeholder}) => {
    return (
        <div className="sea__container">
            <i className="fas fa-search"></i>
            <input type="sea__container__input" placeholder={placeholder}/>
        </div>
    )
}
