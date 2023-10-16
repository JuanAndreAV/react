import React from "react";

function Juego(props){
    let [numeroUsuario, setNumeroUsuario] = React.useState(0) 
    let [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random() * props.limite) + 1)
    function comprobarNumero(evento){
        setNumeroUsuario(evento.target.value)
    }

    function comprobarMaquina(){
        if(numeroUsuario == numeroMaquina){
            alert("Adivinaste!")
        } else {
            alert("Perdiste, la respuesta era: "+numeroMaquina)
        }
        setNumeroMaquina((Math.floor(Math.random() * props.limite) + 1))
    }
    return(
        <div>
            <p>Elige un número del 1 al 10</p>
            <input type="number"placeholder="ingresa un número" min={1}max={10}onChange={comprobarNumero}></input>
            <br/>
            <button onClick={comprobarMaquina}>Adivinar</button>
        </div>
    )
}

export default Juego