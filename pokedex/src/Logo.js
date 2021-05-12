import React from "react"

let Logo = (props) => {
    return (
        <headeer>
        <div>
          <h1> Welcome to the {props.appName} </h1>
          <img onClick={logWhenClicked} src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
        </div>
        </headeer>
    )

}

let logWhenClicked = () => {
  console.log("React is my best freind")
}

export default Logo