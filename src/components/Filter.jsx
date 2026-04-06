import React from 'react'

const Filter = () => {
  return (
    <div className='filter'>
        <h2>Filtar: </h2>
        <div className="filter-options">
            <div className="">
                <p>Status: </p>
                <select>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética: </p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter