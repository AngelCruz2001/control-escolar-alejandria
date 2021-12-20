import moment from "moment";
import { useEffect, useState } from "react";

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
const yearsDates = [2021, 2020, 2044];
export const Filters = ({ setValueSearchFilter }) => {

    const [maxDays, setMaxDays] = useState(daysDates);
    const [date, setDate] = useState({ day: '', month: '', year: '' });
    const { day, month, year } = date;
    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setDate(prev => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        console.log(date)
        setValueSearchFilter(prev => ({ ...prev, dateSearch: { ...date, month: month ? monthsDates[month] : '' } }));
        if (month !== '') {
            const yearRequestMoment = `${year ? year : moment().year()}`;
            const monthRequestMoment = `${month.length == 1 ? `0${Number(month) + 1}` : Number(month) + 1}`;
            // console.log(`${yearRequestMoment}-${monthRequestMoment}`)
            // console.log(moment(`${yearRequestMoment}-${monthRequestMoment}`, "YYYY-MM").daysInMonth());
            setMaxDays(daysDates.slice(0, moment(`${yearRequestMoment}-${monthRequestMoment}`, "YYYY-MM").daysInMonth()));
        }
    }, [date])
    return (

        <div className="req__container__header__filters">

            <p> Filtrar por: </p>
            {/* <DatePicker locale="es" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
            <div className="reqHistory__dates">
                <select value={day} onChange={handleInputChange} className="scroll" name="day">
                    <option hidden defaultValue>
                        Día
                    </option>
                    <option>Ninguno</option>
                    {maxDays.map((day) => (
                        <option value={day} key={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select value={month} onChange={handleInputChange} className="scroll" name="month" required>
                    <option className="select__default" hidden defaultValue>
                        Mes
                    </option>
                    {monthsDates.map((month, index) => (
                        <option value={index} key={month}>
                            {monthsDates[index]}
                        </option>
                    ))}
                </select>

                <select value={year} onChange={handleInputChange} className="scroll" name="year" required>
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

