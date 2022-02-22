const Home = () => {
    return(
        <div className="menu-inicio">
            <div className="menu-dos">
                <div className="img-menu">
                    <img src="img/tic-tac-toe.png" />
                </div>
                <div className="menu-button">
                    <div className="btn-menu arriba">
                        <a href="/game" className="btn btn-primary">Nuevo Juego</a>
                    </div>
                    <div className="btn-menu">
                        <a href="/users" className="btn btn-dark"><i className="fa fa-user"></i> Jugadores</a>
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