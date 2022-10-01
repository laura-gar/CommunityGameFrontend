import React from 'react'
import GamesTable from '../GamesTable/GamesTable'

function GamesList({ onGameSelection }) {
    return (
        <div>
            <h2>List of Games</h2>
            <GamesTable onGameSelection={onGameSelection} />
        </div>
    )
}

export default GamesList
