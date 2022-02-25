import GamePc from '../components/GamePc'
import UserPc from '../components/UserPc'
import React, { useState } from 'react';
const PlayerPersonPc = () => {
    const [jugador, setJugador] = useState("jugador");
    return (
        <div id="section2" className="menu-inicio">
            <div className="row">
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <div className="col-md-6">
                    <span className="l-br">-</span>
                    <UserPc jugador={jugador} setJugador={setJugador} />
                </div>
                <div className="col-md-6">
                    <span className="l-br">-</span>
                    <GamePc jugador={jugador} />
                </div>
            </div>
        </div>
    );

}
export default PlayerPersonPc;