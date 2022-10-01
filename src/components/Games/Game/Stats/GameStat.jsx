import React from 'react'

function GameStat({ value, statName }) {
    return (
        <div className='card w-100 ps-3 pt-2'>
            <h1>{value}</h1>
            <p>{statName}</p>
        </div>
    )
}

export default GameStat
