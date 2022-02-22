import { Link } from "react-scroll";
import Game from '../components/Game';
import Users from '../components/Users';
import React, { useState } from 'react';

const Home = () => {
    const [name1, setName1] = useState("jugador 1");
    const [name2, setName2] = useState("jugador 2");
    return (
        <div id="section1" className="menu-inicio">
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <div className = "row">
                <div className="col-md-4 fon">
                    <div className="menu-dos">
                        <div className="img-menu">
                            <img src="img/tic-tac-toe.png" />
                        </div>
                        <div className="menu-button">
                            <div className="btn-menu arriba">
                                <Link to="section2" className="btn btn-primary" smooth={true}><i className='fa fa-home'></i> nuevo Juego</Link>
                            </div>
                            <div className="btn-menu">
                                <Link to="section3" className="btn btn-dark" smooth={true}><i className='fa fa-user'></i> Jugadores</Link>
                            </div>
                            <div className="btn-menu">
                                <button className="btn btn-primary">Nuevo Juego</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 fon1">
                <Game name1={name1} name2={name2} />
                </div>
                <div className="col-md-4 fon2">
                <Users name1={name1} name2={name2} setName1={setName1} setName2={setName2} />
                </div>
            </div>
        </div>
    );
}
export default Home;