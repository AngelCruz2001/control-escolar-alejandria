import React from 'react'
const daysDates = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
];
const monthsDates = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
const yearsDates = [2021, 2020];


export const Filters = ({ valueSearchFilter, setValueSearchFilter }) => {


    const handleInputValue = ({ target }) => {
        setValueSearchFilter(target.value)
    }

    return (
        <div className="req__container__header__filters">

            <p> Filtrar por: </p>

            <div className="reqHistory__dates">
                <select value={valueSearchFilter} onChange={handleInputValue} className="scroll" name="day">
                    <option hidden defaultValue>
                        Día
                    </option>
                    <option>Ninguno</option>
                    {daysDates.map((day) => (
                        <option value={day} key={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select value={valueSearchFilter} onChange={handleInputValue} className="scroll" name="month" required>
                    <option className="select__default" hidden defaultValue>
                        Mes
                    </option>

                    <option>Ninguno</option>
                    {monthsDates.map((month) => (
                        <option value={month} key={month}>
                            {month}
                        </option>
                    ))}
                </select>

                <select value={valueSearchFilter} onChange={handleInputValue} className="scroll" name="year" required>
                    <option hidden defaultValue>
                        Año
                    </option>

                    <option>Ninguno</option>
                    {yearsDates.map((year) => (
                        <option value={year} key={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

