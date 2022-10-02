import React from 'react'
import './GameStat.css';

function GameStat({ value, statName }) {
    return (
        <div className='stat-card card w-100 ps-3 pt-2 border-start border-5 d-flex flex-column justify-content-center'>
            <h1 className='text-white'>{value}</h1>
            <p>{statName}</p>
        </div>
    )
}

export default GameStat
