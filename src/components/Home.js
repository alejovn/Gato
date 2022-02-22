import { Link } from "react-scroll";
const Home = () => {
    return (
        <div id="section1" className="menu-inicio">
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
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
    );
}
export default Home;