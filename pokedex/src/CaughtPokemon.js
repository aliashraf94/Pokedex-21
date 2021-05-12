import React, { useState } from "react"



let CaughtPokemon = (props) => {
    const [caught, setCaught] = useState(0)
    const [pokemonNameInput, setPokemonNameInput] = useState(" ")

    const catchPokeman = () => {
        if (pokemonNameInput == "") {
            setCaught([])
        } else {
            setCaught(caught + 1)
            setCaught(caught.concat(pokemonNameInput))
        }
    }


    const handleInputChange = (event) => {
        setPokemonNameInput(event.target.value)
    }

    return (
        <div>
    <p>Caught {caught} Pokemon on {props.date}</p>
    <input type="text" value={pokemonNameInput} onChange={handleInputChange} />
    <button onClick={catchPokeman} >Catch</button>
    <p>{pokemonNameInput}</p>
        </div>
    )
}
 

export default CaughtPokemon