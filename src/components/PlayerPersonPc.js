import GamePc from '../components/GamePc'
import UserPc from '../components/UserPc'
import React, { useState, useEffect } from 'react';
const PlayerPersonPc = () => {
    const [jugador, setJugador] = useState("jugador");
    const [dificultad, setDificultad] = useState("dFacil");
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count%2===0){
            setDificultad("Facil")
        }else{
            setDificultad("Dificil")
        }
    });
    return (
        <div id="section2" className="menu-inicio">
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <h1 className="h1-title">Jugador vs Pc</h1>
            <div className="linea-habilidad"></div>
            <div className="row">
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <div className="col-md-6">
                    <span className="l-br">-</span>
                    <UserPc setCount={setCount} count={count} jugador={jugador} setJugador={setJugador} />
                </div>
                <div className="col-md-6">
                    <span className="l-br">-</span>
                    <GamePc jugador={jugador} dificultad={dificultad} />
                </div>
            </div>
        </div>
    );

}
export default PlayerPersonPc;