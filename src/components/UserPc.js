const UserPc = (props) => {
    const handleChange = (e) => {
        const { value } = e.target
        props.setJugador(value)
    }
    return (
        <div>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
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
            </div>
        </div>
    );
}
export default UserPc;