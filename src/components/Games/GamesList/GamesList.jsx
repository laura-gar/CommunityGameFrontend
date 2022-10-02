import React from 'react'
import TopNavBar from '../../TopNavBar/TopNavBar'
import GamesTable from '../GamesTable/GamesTable'

function GamesList({ onGameSelection }) {
    return (
        <div>
            <TopNavBar />
                <h2>List of Games</h2>
            <div className='card p-5'>
                <h2 className='mb-4'>List of Games</h2>
                <GamesTable onGameSelection={onGameSelection} />
            </div>
        </div>
    )
}

export default GamesList
