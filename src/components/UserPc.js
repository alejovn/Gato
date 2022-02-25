const UserPc = (props) => {
    const handleChange = (e) => {
        const { value } = e.target
        props.setJugador(value)
    }
    return (
        <div>
            <div className="menu-dos-nombre">
                <div className="form-nombre">
                    <form>
                        <label>Nombre del jugador uno:
                            <input
                                className="form-control"
                                type="text"
                                name="name1"
                                value={props.jugador}
                                onChange={handleChange}
                            />
                        </label>
                    </form>
                </div>
                <div className="dificultad">
                <p>Dificultad</p>  
                <label className="switch">
                    <input type="checkbox" className="switch-input" onClick={() => props.setCount(props.count + 1)} />
                    <span className="switch-label" data-on="FACIL" data-off="DIFICIL"></span>
                    <span className="switch-handle"></span>
                </label>
                </div>
            </div>
        </div>
    );
}
export default UserPc;