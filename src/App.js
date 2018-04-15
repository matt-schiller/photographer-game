import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Photographer from './components/Photographer';
import PhotographerList from './utils/PhotographerList'

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      score: 0,
      topScore: 0,
      photographers: PhotographerList
    };  
    this.onClick = this.onClick.bind(this);
  };

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  onClick = event => {
    console.log(this.state);
    var photographerIndex = this.state.photographers.findIndex(x => x.name === event.target.name);
    if ( this.state.photographers[photographerIndex].clicked === true ) {
      this.endGame();
    } else {
      this.scoreUp(photographerIndex);
    }
  }

  scoreUp = (photographerIndex) => {
    let newPhotographers = this.state.photographers;
    newPhotographers[photographerIndex].clicked = true;
    let newScore = this.state.score + 1;
    this.setState({
      photographers: newPhotographers,
      score: newScore
    }, ()=>{
      let shuffledPhotographers = this.shuffle(this.state.photographers);
      this.setState({
        photographers: shuffledPhotographers
      });
    });
  }

  endGame = () => {
    let maxScore = Math.max(this.state.score,this.state.topScore);
    this.state.photographers.forEach((photographer)=>{
      photographer.clicked = false;
    });
    this.setState({
      score: 0,
      topScore: maxScore
    }, () => {
      this.shuffle(this.state.photographers);
    });
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Can you remember our photographers?</h1>
            <p className="lead">Click on a photographer to earn points, but don't click on any more than once!</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.photographers.map((object,index)=>{
              return (
                <Photographer photographer={object} onClick={this.onClick}/>
              )
            })}
            {/* <Photographer photographer={this.state.photographers[0]} onClick={this.onClick}/> */}
          </div>
        </div>
        </div>
    );
  }
}

export default App;
