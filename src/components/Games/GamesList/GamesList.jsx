import React from 'react'
import GamesTable from '../GamesTable/GamesTable'

function GamesList(props) {
    return (
        <div>
            <div className='card p-5'>
                <h2 className='mb-4'>List of Games</h2>
                <GamesTable />
            </div>
        </div>
    )
}

export default GamesList
