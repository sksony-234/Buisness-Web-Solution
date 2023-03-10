import React from 'react'
import './App.css'


class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      id: null,
      affiliations: [],
      loadedCharacter: false,
      wiki:null,
      img:"",
    }
  }

  getNewCharacter = () => {
    const randNum = Math.floor(Math.random() *88)
    // const url = `https://swapi.dev/api/people/${randNum}/`;
    const url = `https://akabab.github.io/starwars-api/api/id/${randNum}.json`;
    fetch(url).then(response => response.json())
    .then(data => {
      this.setState({
        name: data.name,
        height: data.height,
        homeworld: data.homeworld,
        id : data.id,
        loadedCharacter: true,
        wiki: data.wiki,
        img : data.image
      })
    })
  }
  render() {
    return (
      <>
        {this.state.loadedCharacter &&
          <div className="char-info">
            <div className="img"><img src={this.state.img} alt={this.state.name} /></div>
            <h1>{this.state.name}</h1>
            <p>Height: {this.state.height}</p>
            <p className="homeworld">HomeWorld:<a href={this.state.wiki}> {this.state.homeworld}</a></p>
          </div>
        }
        <button type="button" className="btn" onClick={() => this.getNewCharacter()}>Randomize Character</button>
      </>
    )
  }
}

const App = () => {
  return (
    <div className="App">
      <StarWars />
    </div>
  )
}

export default App