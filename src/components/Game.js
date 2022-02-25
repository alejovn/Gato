import React, { useState, useEffect } from 'react';
import Board from './Board'
import { calculateWinner } from '../helpers';
const styles = {
    white: '280px',
    margin: '20px auto',
    textAlign: 'center'
}
const Game = (props) => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const [cont, setCont] = useState(0);

    const [jugador1, setJugador1] = useState(0);
    const [jugador2, setJugador2] = useState(0);
    const [empate, setEmpate] = useState(0);
    const [juega, setJuega] = useState("");

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
        setCont(cont + 1);
    }
    useEffect(() => {
        if (xIsNext === true) {
            setJuega(props.name1);
        } else {
            setJuega(props.name2);
        }
        if (winner == "X") {
            alert("El ganador es: " + props.name1);
            setJugador1(jugador1 + 1);
            setCont(0);
        }
        else if (winner == "O") {
            alert("El ganador es: " + props.name2);
            setJugador2(jugador2 + 1);
            setCont(0);
        } else if (cont === 9) {
            alert("Empate");
            setEmpate(empate + 1);
            setCont(0);
        }
    }, winner);
    const limpiar = () => {
        setBoard(Array(9).fill(null));
        setCont(0);
    }
    const nuevaPartida = () => {
        return (
            <div className="menu-button">
                <div className="btn-menu arriba">
                    <button className="btn btn-success" onClick={() => limpiar()}>Limpiar</button>
                </div>
            </div>
        );
    }
    return (
        <div className="menu-dos-juego">
            <div className="row">
                <div className="col-md-6">
                    <div className="user-X">
                        <p>{props.name1}</p>
                        <div className="img-jugador">
                            <img src="img/play.png" />
                        </div>
                        <p>{"partidas ganadas " + jugador1}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="user-0">
                        <p>{props.name2}</p>
                        <div className="img-jugador">
                            <img src="img/play.png" />
                        </div>
                        <p>{"partidas ganadas " + jugador2}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="board">
                        <Board squares={board} onClick={handleClick} />
                    </div>
                </div>
            </div>

            <div style={styles}>
                <p>{"Empates: " + empate}</p>
                <p>
                    {"Turno de: " + juega}
                </p>
                {nuevaPartida()}
            </div>
        </div>
    )
}

export default Game;