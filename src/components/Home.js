import { Link } from "react-scroll";
import Game from '../components/Game';
import Users from '../components/Users';
import React, { useState } from 'react';

const Home = () => {
    const [name1, setName1] = useState("jugador 1");
    const [name2, setName2] = useState("jugador 2");
    return (
        <div id="section1" className="menu-inicio">
            <div className="row">
            <span className="l-br">-</span>
            <span className="l-br">-</span>
                <div className="col-md-4">
                <span className="l-br">-</span>
                    <Users name1={name1} name2={name2} setName1={setName1} setName2={setName2} />
                </div>
                <div className="col-md-8">
                <span className="l-br">-</span>
                    <Game name1={name1} name2={name2} />
                </div>
            </div>
        </div>
    );
}
export default Home;