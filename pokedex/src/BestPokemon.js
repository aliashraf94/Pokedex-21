import React from "react"

let myFav = ["Squirtle", "Pikach", "Snorlax"]


let BestPokemon = (props) => {
    return(
        <div>
        <p>My favourite Pokemons are following</p>
        <ul>
            {myFav.map((name)=>(
                <li>{name}</li>
                ))}
        </ul>
        Following are there abilities
        <ul>
            {props.abilities.map((ability) => (
                <li>{ability}</li>
            ))}
        </ul>
        </div>

    )
}


export default BestPokemon