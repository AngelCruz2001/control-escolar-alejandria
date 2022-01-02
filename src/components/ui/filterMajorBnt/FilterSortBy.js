import React from "react";

export const FilterSortBy = ({index, handleValueSortBy}) => {


    const filterData = [
       { name:'Mayor'},
       { name:'Menor'},
       { name:'Borrar filtros'},
        
    ]


  return (
    <>  
        <div className={`filterBy ${index === 2 ? 'paid' : 'owe'}`}  >
            {filterData.map((data)=> (
                <p onClick={()=>{ handleValueSortBy(index,data.name)}} key={data.name} className="filterBy__items"> {data.name} </p>
            ))}
        </div>  
    </>
  );
};
