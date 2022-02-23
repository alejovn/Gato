import React, { useState, useEffect } from 'react';
import Board from '../components/Board'
import { calculateWinner } from '../helpers';
const About = (props) => {
    const positionsArray = [
        { id: 0, poss: 10, },
        { id: 1, poss: 11, },
        { id: 2, poss: 12, },
        { id: 3, poss: 13, },
        { id: 4, poss: 14, },
        { id: 5, poss: 15, },
        { id: 6, poss: 16, },
        { id: 7, poss: 17, },
        { id: 8, poss: 18, }
    ];
    const [positions, setPositions] = useState(positionsArray);

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const [cont, setCont] = useState(0);

    const [jugador1, setJugador1] = useState(0);
    const [jugador2, setJugador2] = useState(0);
    const [empate, setEmpate] = useState(0);
    const [juega, setJuega] = useState("");

    const handleClick = (i) => {
        setPositions(
            positions.map((position) =>
                position.id === i
                    ? { ...position, poss: i }
                    : { ...position }
            )
        );
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
        setCont(cont + 1);
    }
    useEffect(() => {
        if (xIsNext === true) {
            setJuega(props.jugador);
        }else {
            setJuega("PC");
            let i=0;
            positions.map((position) => {
                if(position.poss===i){               
                }else{
                    if(position.poss !== 4){
                        handleClick(4)
                    }
                }
                i++; 
                console.log(i)
            });
        }
        if (winner == "X") {
            alert("El ganador es: " + props.jugador);
            setJugador1(jugador1 + 1);
            setCont(0);
        }
        else if (winner == "O") {
            alert("El ganador es: PC");
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
        <div>
            <div id="section4" className="menu-inicio">
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <div className="menu-dos-juego">
                    <div className="board">
                        <Board squares={board} onClick={handleClick} />
                    </div>
                    <div>
                        <p>
                            {"Turno de: " + juega}
                        </p>
                        {nuevaPartida()}
                    </div>
                </div>

            </div>
        </div>
    );
}
export default About;