import React from 'react'
import GameStat from './Stats/GameStat'

function Game({ game }) {
    return (
        <div className="card p-5">
            <div className="row mb-3">
                <div className="col d-flex align-items-center justify-content-center">
                    <img src={game.image} alt="Game Screen" style={{ width: '100%' }} />
                </div>
                <div className="col px-1">
                    <div className="row">
                        <div className="col">
                            <h2>{game.title}</h2>
                            <h4>Description</h4>
                            <p>{game.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="col-12">
                                <h4>Platform</h4>
                                <p>{game.platform}</p>
                            </div>
                            <div className="col-12">
                                <h4>Release date</h4>
                                <p>{game.releaseDate}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-12">
                                <h4>Genre</h4>
                                <p>{game.genre}</p>
                            </div>
                            <div className="col-12">
                                <h4>Updated at</h4>
                                <p>{game.updatedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <GameStat value={game.playingCount} statName={"Players"} />
                </div>
                <div className="col">
                    <GameStat value={game.backlogCount} statName={"Players"} />
                </div>
                <div className="col">
                    <GameStat value={game.beatCount} statName={"Players"} />
                </div>
                <div className="col">
                    <GameStat value={game.retiredCount} statName={"Defeated players"} />
                </div>
            </div>
        </div>
    )
}


export default Game
