import React, { Component } from "react";
import { Players } from '../shared/ListOfPlayers'
import { useState } from "react";
export default function Player() {
    const[player, setPlayer] = useState([])
    return (

        <div className="container">
            {Players.map((player) => (
                <div className="column">
                    <div className="card">
                        <img src={player.img} />
                        <h3>{player.name}</h3>
                        <p className="title">{player.club}</p>
                        <p><button onClick={()=>{setPlayer(player)}}> <a href='#popup1' id='openPopup'>Detail</a> </button></p>
                    </div>
                </div>
            ))}
            <div id='popup' className="overplay">
                    <div className="popup">
                        <img src={player.img} alt="" />
                        <h2>{player.name}</h2>
                        <a href="#" className="close"></a>
                        <div className="content">
                            {player.info}
                        </div>
                    </div>
                </div>
        </div>
    )

}