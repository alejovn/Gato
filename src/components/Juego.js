import React, { useState, createRef } from 'react'
const Juego = () => {
    const boton1 = createRef();
    const boton2 = createRef();
    const boton3 = createRef();
    const boton4 = createRef();
    const boton5 = createRef();
    const boton6 = createRef();
    const boton7 = createRef();
    const boton8 = createRef();
    const boton9 = createRef();
    const [b1, setB1] = useState("b1");
    const [b2, setB2] = useState("b2");
    const [b3, setB3] = useState("b3");
    const [b4, setB4] = useState("b4");
    const [b5, setB5] = useState("b5");
    const [b6, setB6] = useState("b6");
    const [b7, setB7] = useState("b7");
    const [b8, setB8] = useState("b8");
    const [b9, setB9] = useState("b9");
    const [cont, setCont] = useState(0);

    function actions(boton) {
        if (boton.current.className == "buttons") {
            boton.current.className = "clicked";
            var text;
            if (cont % 2 == 0) {
                text = "X";
            } else {
                text = "O";
            }
            boton.current.value = text;
            boton.current.appendChild(document.createTextNode(text));
            setCont(cont + 1);
            asignation(text, boton);
        } else {
        }
    }
    function asignation(text, boton) {
        
        if (b1 === boton.current.name) {
            setB1(text);
        }
        else if (b2 === boton.current.name) {
            setB2(text);
        }
        else if (b3 === boton.current.name) {
            setB3(text);
        }
        else if (b4 === boton.current.name) {
            setB4(text);
        }
        else if (b5 === boton.current.name) {
            setB5(text);
        }
        else if (b6 === boton.current.name) {
            setB6(text);
        }
        else if (b7 === boton.current.name) {
            setB7(text);
        }
        else if (b8 === boton.current.name) {
            setB8(text);
        }
        else if (b9 === boton.current.name) {
            setB9(text);
        }
        console.log(b1+ b2+ b3)
        if((b1===b2 && b2===b3)||(b1===b5 && b5===b9)||(b3===b5 && b5===b7)||(b4===b5 && b5===b6)||(b7===b8 && b8===b9)||(b1===b4 && b4===b7)||(b2===b5 && b5===b8)||(b3===b6 && b6===b9)){          
            
            var con = window.confirm(text + " has won!!!\nDo you wanna play again?");
            if (con == true) {
                window.location.reload();
            }
        }
    }

    return (
        <div className="menu-inicio">
            <div className="menu-dos-juego">
                <div id="body">
                    <button ref={boton1} id="b11" className="buttons" name="b1" onClick={() => actions(boton1)}></button>
                    <button ref={boton2} id="b12" className="buttons" name="b2" onClick={() => actions(boton2)}></button>
                    <button ref={boton3} id="b13" className="buttons" name="b3" onClick={() => actions(boton3)}></button>
                    <button ref={boton4} id="b21" className="buttons" name="b4" onClick={() => actions(boton4)}></button>
                    <button ref={boton5} id="b22" className="buttons" name="b5" onClick={() => actions(boton5)}></button>
                    <button ref={boton6} id="b23" className="buttons" name="b6" onClick={() => actions(boton6)}></button>
                    <button ref={boton7} id="b31" className="buttons" name="b7" onClick={() => actions(boton7)}></button>
                    <button ref={boton8} id="b32" className="buttons" name="b8" onClick={() => actions(boton8)}></button>
                    <button ref={boton9} id="b33" className="buttons" name="b9" onClick={() => actions(boton9)}></button>
                </div>
            </div>
        </div>
    );
}
export default Juego;