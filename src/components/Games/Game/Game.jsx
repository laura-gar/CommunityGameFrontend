import React from 'react'
import GameStat from './Stats/GameStat'

function Game({ game }) {
    return (
        <div className="card p-5">
            <div className="row mb-4">
                <div className="col p-0 me-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'black' }}>
                    <img src={game.image} alt="Game Screen" style={{ width: '100%' }} />
                </div>
                <div className="col px-1">
                    <div className="row mb-3">
                        <div className="col">
                            <h2 className='mt-2 mb-4'>{game.title}</h2>
                            <div>
                                <h4>Description</h4>
                                <p>{game.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="col-12">
                                <h5>Platform</h5>
                                <p>{game.platform}</p>
                            </div>
                            <div className="col-12">
                                <h5>Release date</h5>
                                <p>{game.releaseDate}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-12">
                                <h5>Genre</h5>
                                <p>{game.genre}</p>
                            </div>
                            <div className="col-12">
                                <h5>Updated at</h5>
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
                    <GameStat value={game.backlogCount} statName={"Users about to play"} />
                </div>
                <div className="col">
                    <GameStat value={game.beatCount} statName={"Winners"} />
                </div>
                <div className="col">
                    <GameStat value={game.retiredCount} statName={"Defeated players"} />
                </div>
            </div>
        </div>
    )
}


export default Game
