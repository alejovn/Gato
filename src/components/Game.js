import React, { useState, useEffect } from 'react';
import Board from '../components/Board'
import { calculateWinner } from '../helpers';
const styles = {
    white: '280px',
    margin: '20px auto'
}
const Game = (props) => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const [cont, setCont] = useState(0);

    const [jugador1, setJugador1] = useState(0);
    const [jugador2, setJugador2] = useState(0);
    const [empate, setEmpate] = useState(0);

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
        setCont(cont + 1);
    }
    useEffect(() => {
        if (winner == "X") {
            alert("El ganador es X");
            setJugador1(jugador1 + 1);
            setCont(0);
        }
        else if (winner == "O") {
            alert("El ganador es 0");
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
                    <button className="btn btn-success" onClick={() => limpiar()}>Nuevo</button>
                </div>
            </div>
        );
    }
    return (
        <div id="section2" className="menu-inicio">
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <div className="menu-dos-juego">
                <div className="row">
                    <div className="col-md-6">
                        <div className="user-X">
                            <p>Jugador 1</p>
                            <div className="img-jugador">
                                <img src="img/play.png" />
                            </div>
                            <p>{"partidas ganadas " + jugador1}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="user-0">
                            <p>Jugador 2</p>
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
                    <p>
                        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
                    </p>
                    {nuevaPartida()}
                </div>
            </div>
        </div>
    )
}

export default Game;