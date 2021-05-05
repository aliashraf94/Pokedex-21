import React, { useState } from "react"



let CaughtPokemon = (props) => {
    const [caught, setCaught] = useState(0)

    const catchPokeman = () => {
        setCaught(caught + 1)
    }

    return (
        <div>
    <p>Caught {caught} Pokemon on {props.date}</p>
    <button onClick={catchPokeman} >Catch</button>
        </div>
    )
}
 

export default CaughtPokemon