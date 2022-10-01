import React from 'react'
import Game from '../../components/Games/Game/Game'
import ReviewList from '../../components/Reviews/ReviewList/ReviewList'

function GameView({ game }) {
    return (
        <>
            <div className="row mb-4">
                <div className="col">
                    <Game game={game} />
                </div>
            </div>
            <div className="row">
                <div className='col'>
                    <ReviewList gameId={game.id} />
                </div>
            </div>
        </>
    )
}

export default GameView
