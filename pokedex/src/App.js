import React from "react";
import Logo from "./Logo"
import BestPokemon from "./BestPokemon"
import CaughtPokemon from "./CaughtPokemon"
import PokemonMovesSelector from "./PokemonMovesSelector"
import PokemonCity from "./PokemonCity"

const App = () => {
  return (
    <div>
    <Logo appName="Pokedex" />
    <BestPokemon abilities = {['Anticipation', 'Adaptability', 'Run-Away']}/>
    <CaughtPokemon date = {new Date().toLocaleDateString()}/>
    <PokemonCity />
    <PokemonMovesSelector />
    </div>
  )
} 

export default App;
