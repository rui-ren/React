import React, { Component } from 'react';

class App extends Component {
	
	state = {
		correctScore: 0,
		totalNumber : 0,
	}
	
	handleAnswer = (answerWasCorrect) => {
		if (answerWasCorrect) {
			this.setState((currentState) => (
			{correctScore: currentState.correctScore + 1};
			))
		}
		this.setState((currentState) => (
		{totalNumber: currentState.totalNumber + 1};
		))
	}
	
	render(){
		return (
			<div className="App">
				<header className="App-header">
				    <img src={logo} className="App-logo" alt="logo" />
				    <h1 className="App-title">ReactND - Coding Practice</h1>
				</header>
				<div className="game">
					<h2> Metal Math </h2>
					<Game handleAnswer={this.handleAnswer} />
					<Score numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestions} />
				</div>
			</div>
		)
	}
}


