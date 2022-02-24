const Users = (props) => {
    const handleChange = (e) => {
        const { value } = e.target
        props.setName1(value)
    }
    const handleChange1 = (e) => {
        const { value } = e.target
        props.setName2(value)
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
                                value={props.name1}
                                onChange={handleChange}
                            />
                        </label>
                        <span className="l-br">-</span>
                        <label>Nombre del jugador dos:
                            <input
                                className="form-control"
                                type="text"
                                name="name2"
                                value={props.name2}
                                onChange={handleChange1}
                            />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Users;

