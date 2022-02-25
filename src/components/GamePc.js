import React, { useState, useEffect } from 'react';
import Board from './Board'
import { calculateWinner } from '../helpers';
const styles = {
    white: '280px',
    margin: '20px auto',
    textAlign: 'center'
}
const GamePc = (props) => {
    const [valoresPosicions, setValoresPosicions] = useState([
        { id: 0, valor: null },
        { id: 1, valor: null },
        { id: 2, valor: null },
        { id: 3, valor: null },
        { id: 4, valor: null },
        { id: 5, valor: null },
        { id: 6, valor: null },
        { id: 7, valor: null },
        { id: 8, valor: null }
    ]);
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const [cont, setCont] = useState(0);

    const [jugador1, setJugador1] = useState(0);
    const [jugador2, setJugador2] = useState(0);
    const [empate, setEmpate] = useState(0);
    const [juega, setJuega] = useState("");

    useEffect(() => {
        if (xIsNext === true) {
            setJuega(props.jugador);
        } else {
            setJuega("PC");
            lanzarJugador2();
        }

        if (winner == "X") {
            alert(winner)
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

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
        setCont(cont + 1);

        if (xIsNext === true) {
            setValoresPosicions(
                valoresPosicions.map((valoresPosicion) =>
                    valoresPosicion.id === i
                        ? { ...valoresPosicion, valor: "X" }
                        : { ...valoresPosicion }
                )
            );
            console.log(xIsNext)
        } else {
            console.log(xIsNext)
            setValoresPosicions(
                valoresPosicions.map((valoresPosicion) =>
                    valoresPosicion.id === i
                        ? { ...valoresPosicion, valor: "O" }
                        : { ...valoresPosicion }
                )
            );
        }
    }
    const limpiar = () => {
        setBoard(Array(9).fill(null));
        setCont(0);
        setValoresPosicions(
            valoresPosicions.map((valoresPosicion) =>
                valoresPosicion.id < 10
                    ? { ...valoresPosicion, valor: null }
                    : { ...valoresPosicion }
            )
        );
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
    const lanzarJugador2 = () => {
        try {
            let resultados = [null, null, null, null, null, null, null, null, null];
            let conClone = 0;
            valoresPosicions.map((valoresPosicion) => {
                if (valoresPosicion.valor === null) {
                    let clonArray = [null, null, null, null, null, null, null, null, null];
                    let con = 0;
                    valoresPosicions.map((valoresPosicion) => {
                        clonArray[con] = valoresPosicion.valor;
                        con++;
                    })
                    clonArray[conClone] = 'O';
                    resultados[conClone] = calculoMiniMax('O', clonArray);
                }
                conClone++;
            });

            let min = 9999;
            let pos = -1;
            for (var i = 0; i < resultados.length; i++) {
                if (resultados[i] != null && resultados[i] < min) {
                    min = resultados[i];
                    pos = i;
                }
            }
            handleClick(pos)
        } catch (exception) {
            console.log(exception);
        }
    }
    const obtenerValorEstadoTerminal = (arrayValores) => {

        if ((arrayValores[0] != null && arrayValores[0] === arrayValores[1] && arrayValores[0] === arrayValores[2])) {

            if (arrayValores[0] == 'X') {
                return 1;
            } else {
                return -1;
            }

        }
        if ((arrayValores[3] != null && arrayValores[3] === arrayValores[4] && arrayValores[3] === arrayValores[5])) {
            if (arrayValores[3] == 'X') {
                return 1;
            } else {
                return -1;
            }
        }

        if (arrayValores[6] != null && arrayValores[6] === arrayValores[7] && arrayValores[6] === arrayValores[8]) {
            if (arrayValores[6] == 'X') {
                return 1;
            } else {
                return -1;
            }
        }

        if (arrayValores[0] != null && arrayValores[0] === arrayValores[3] && arrayValores[0] === arrayValores[6]) {
            if (arrayValores[0] == 'X') {
                return 1;
            } else {
                return -1;
            }
        }
        if (arrayValores[1] != null && arrayValores[1] === arrayValores[4] && arrayValores[1] === arrayValores[7]) {
            if (arrayValores[1] == 'X') {
                return 1;
            } else {
                return -1;
            }
        }
        if (arrayValores[2] != null && arrayValores[2] === arrayValores[5] && arrayValores[2] === arrayValores[8]) {
            if (arrayValores[2] == 'X') {
                return 1;
            } else {
                return -1;
            }
        }

        if (arrayValores[0] != null && arrayValores[0] === arrayValores[4] && arrayValores[0] === arrayValores[8]) {
            if (arrayValores[0] == 'X') {
                return 1;
            } else {
                return -1;
            }
        }

        if (arrayValores[6] != null && arrayValores[6] === arrayValores[4] && arrayValores[6] === arrayValores[2]) {
            if (arrayValores[6] == 'X') {
                return 1;
            } else {
                return -1;
            }
        }

        let existeNull = false;
        for (let valor of arrayValores) {
            if (valor === null) {
                return null;
            }
        }

        if (!existeNull) {
            return 0;
        }

        return null;

    }

    const calculoMiniMax = (simboloActual, arrayValores) => {

        let valorEstadoTerminal = obtenerValorEstadoTerminal(arrayValores);
        if (valorEstadoTerminal != null) {
            return valorEstadoTerminal;
        }

        if (simboloActual == 'O') {

            let resultados = [null, null, null, null, null, null, null, null, null];
            for (var i = 0; i < arrayValores.length; i++) {
                if (arrayValores[i] == null) {
                    let clonArray = arrayValores.slice();
                    clonArray[i] = 'X';
                    resultados[i] = calculoMiniMax('X', clonArray);
                }
            }
            let max = -9999;
            for (let valor of resultados) {
                if (valor != null && valor > max) {
                    max = valor;
                }
            }
            return max;

        } else {
            let resultados = [null, null, null, null, null, null, null, null, null];
            for (var i = 0; i < arrayValores.length; i++) {
                if (arrayValores[i] == null) {
                    let clonArray = arrayValores.slice();
                    clonArray[i] = 'O';
                    resultados[i] = calculoMiniMax('O', clonArray);
                }
            }
            let min = 9999;

            for (let valor of resultados) {
                if (valor != null && valor < min) {
                    min = valor;
                }
            }
            return min;
        }
    }

    return (
        <div className="menu-dos-juego">
            <div className="row">
                <div className="col-md-6">
                    <div className="user-X">
                        <p>{props.jugador}</p>
                        <div className="img-jugador">
                            <img src="img/play.png" />
                        </div>
                        <p>{"partidas ganadas " + jugador1}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="user-0">
                        <p>PC</p>
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
                <div style={styles}>
                    <p>{"Empates: " + empate}</p>
                    <p>
                        {"Turno de: " + juega}
                    </p>
                    {nuevaPartida()}
                </div>
            </div>

        </div>
    );
}
export default GamePc;