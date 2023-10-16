import imagen from "./lupa.png";

function Titulo(){
    return (
        <div>
            <h1>ACERTIJO</h1>
            <hr/>
            <img src={imagen} alt='Lupa'></img>
        </div>
    )
}

export default Titulo;