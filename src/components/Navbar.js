import Home from '../components/Home'
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link to="section1" className='navbar-brand' smooth={true}><i className='fa fa-gamepad'></i> Gato</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
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
                </div>
            </div>
        </nav>
    );
}
export default Navbar;