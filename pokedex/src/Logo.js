import React from "react"
import BestPokemon from "./BestPokemon"
import CaughtPokemon from "./CaughtPokemon"


let Logo = (props) => {
    return (
        <headeer>
        <div>
          <h1> Welcome to the {props.appName} </h1>
          <img onClick={logWhenClicked} src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
        </div>
        <div>
        <BestPokemon abilities = {['Anticipation', 'Adaptability', 'Run-Away']}/>
        <CaughtPokemon date = {new Date().toLocaleDateString()}/>
        </div>
        </headeer>
    )

}

let logWhenClicked = () => {
  console.log("React is my best freind")
}

export default Logo