import React from 'react'
import TopNavBar from '../../TopNavBar/TopNavBar'
import GamesTable from '../GamesTable/GamesTable'

function GamesList({ onGameSelection }) {
    return (
        <div>
        <TopNavBar />
            <h2>List of Games</h2>
            <GamesTable onGameSelection={onGameSelection} />
        </div>
    )
}

export default GamesList
