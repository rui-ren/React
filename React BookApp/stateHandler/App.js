import React, {Component} from 'react';
import Score from './score.js';
import Game from './game.js';
import logo from './logo.svg';


class App extends Component {
    state = {
        correctAnswer: 0,
        numQuestion: 0,
    };

    // update the state here
    handleAnswer = answerWasCorrect => {
        if (answerWasCorrect) {
            this.setState(currState => ({
                correctAnswer: currState.correctAnswer + 1,
            }));
            this.setSet(currState => ({
                numQuestion: currState.numQuestion + 1,
            }))
        }
    }

    render() {
        return (
            <div className='App'>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Calculation</h1>
                </header>
                <div className='game'>
                    <h2> Mental Math</h2>
                    <Game handleAnswer = {this.handleAnswer}/>
                    <Score numCorrect = {this.state.correctAnswer} numQuestion = {this.state.numQuestion}/>
                </div>
            </div>
        );
    }
}

export default App;
