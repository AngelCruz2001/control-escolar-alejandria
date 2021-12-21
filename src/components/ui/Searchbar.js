import React, { useState } from 'react'

export const Searchbar = (  {data }  ) => {

    const [searchValue, setSearchValue] = useState('');
    const [displayData, setdisplayData] = useState(data);


    const handleChange = (e) => {
        e.preventDefault();

        let currentSearchValue = e.target.value;
        setSearchValue(currentSearchValue);

        if (!currentSearchValue.length) {
            setdisplayData(data);
            return;
        }

        const newData = data.filter(item => item.toString().toLowerCase().includes(currentSearchValue));

        setdisplayData(newData);

    }

    console.log(searchValue);

    return (
        <div className="sea__container">
            <i className="fas fa-search"></i>
            <input type="sea__container__input" value={searchValue} onInput={handleChange}/>
        </div>
    )
}
