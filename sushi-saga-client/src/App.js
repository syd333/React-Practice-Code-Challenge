import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    currentIndex: 0,
    eaten: [],
    money: 333
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({sushis: sushis})
    })
  }

  renderFourSushi = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 4
    })
}
  //take sushis slice them 
  //in slice use currentindex + 4 
  //pass function to handleclick
  // pass handleclick to sushicontainer 
  //pass from sushi container to button
  handleEatSushi = (sushi) => {
    if (this.state.money >= sushi.price) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: this.state.money - sushi.price
      })
    }
}

  render() {
    return (
      <div className="app">
        <SushiContainer eaten={this.state.eaten} handleEatSushi={this.handleEatSushi}renderFourSushi={this.renderFourSushi} sushis={this.state.sushis.slice(this.state.currentIndex, this.state.currentIndex + 4)} />
        <Table eaten={this.state.eaten} money={this.state.money}/>
      </div>
    )
  }
}

export default App;


// - `App` is parent to both `SushiContainer` and `Table`
// - `SushiContainer` is parent to both `Sushi` and `MoreButton`
// Sushi list is properly received from the server

// Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. 
// For this assignment, you don't have to be concerned 
// about what happens when you reach the end of the sushi list.

// Clicking a sushi on a plate will eat the sushi, causing it to be removed from its 
// plate and an empty plate to appear on the table.