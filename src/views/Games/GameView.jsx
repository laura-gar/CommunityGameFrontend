import React from 'react'
import Game from '../../components/Games/Game/Game'

function GameView({ game }) {
    return (
        <>
            <div className="row">
                <div className="col">
                    <Game game={game} />
                </div>
            </div>
            <div className="row">
                <div></div>
            </div>
        </>
    )
}

export default GameView
