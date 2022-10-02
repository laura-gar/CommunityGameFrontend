import React from 'react'
import GamesTable from '../GamesTable/GamesTable'

function GamesList({ onGameSelection }) {
    return (
        <div className='card p-5'>
            <h2 className='mb-4'>List of Games</h2>
            <GamesTable onGameSelection={onGameSelection} />
        </div>
    )
}

export default GamesList
