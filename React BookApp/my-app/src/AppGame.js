
import React, {Component} from 'react'

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3 + value1 + value2 + value3);
const numQuestions = 0;
const numCorrect = 0;

class AppGame extends Component {
    render() {
        state = {
            numCorrect: 0,
            numQuestions: 0
        };
        return (
            <div className = "AppGame">
                <header className = "App-Header">
                    <img src={logo} className="App-logo" alt = 'logo' />
                    <h1 className="App-title"> ReactND - Coding Practice</h1>
                </header>
                <div className="game">
                    <h2>
                        Mental Math
                    </h2>
                    <div className="equation">
                        <p className='text'>{'${value1} + ${value2} + ${value3} = ${proposedAnswer}'}</p>
                    </div>
                    <button> True </button>
                    <botton> False </botton>
                    <p className='text'>
                        Your Score : {this.state.numCorrect} / {this.state.numQuestions}
                    </p>
                </div>
            </div>
        )
    }
}

export default AppGame;


