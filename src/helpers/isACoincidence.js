export const isACoincidenceDate = (creationDateSplit, { day, month, year }) => {
    const searchDate = [...day !== '' ? [day] : [], ...month !== '' ? [month] : [], ...year !== '' ? [year] : [],]
    const isInTheArray = searchDate.filter((item) => ((creationDateSplit.includes(item))));
    return isInTheArray.length === searchDate.length && true;
}

export const isACoincidenceSearch = (data, wordToSearch) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].toLowerCase().match(RegExp(wordToSearch, 'gi'))) return true;
    }
}

