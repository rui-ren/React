import React from 'react';

class Game extends Component {
	
	// here we define an array
	constructor(props) {
		super(props);
		const valueArray = this.makeNewQuestion();
		this.state = {
			'value1': valueArray[0],
			'value2': valueArray[1],
			'value3': valueArray[2],
			'proposedAnswer': valueArray[3]
		};
	}
	
	// generate the new array here
	makeNewQuestion = () => {
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		const proposedAnswer = Math.floor(Math.random() * 3 + value1 + value2 + value3);
		return [value1, value2, value3, proposedAnswer];
	}
	
	// update the new array here
	updateState = newValuesArray => {
		this.setState(currentState => ({
			value1: newValuesArray[0],
			value2: newValuesArray[1],
			value3: newValuesArray[2],
			proposedAnswer: newValuesArray[3]
		}))
	}
	
	// evaluate the answer
	evaluateAnswer = givenAnswer => {
		const {value1, value2, value3, proposedAnswer} = this.state;
		const correctAnswer = value1 + value2 + value3;
		return (
			(correctAnswer === proposedAnswer && givenAnswer === 'true') ||
			(correctAnswer !== proposedAnswer && givenAnswer === 'false')
		)
	}
	
	// event trigger here
	handleAnswer = event => {
		const newValueArray = this.makeNewQuestion();
		this.updateState(newValueArray);
		const answerWasCorrect = this.evaluateAnswer(event.target.name);
		this.props.handleAnswer(answerWasCorrect);
	}
	
	render() {
		const { value1, value2, value3, proposedAnswer } = this.state;
		return (
			<div> 
				<div className='equation'>
					<p className='text'> {`${value1} + ${value2} + ${value3} = ${proposedAnswer}`} </p>
				</div>
				<button onClick={this.handleAnswer} name='true'>
					True
				</button>
				
				<button onClick={this.handleAnswer} name='false'>
					False
				</button>
			</div>
		)
	}
}

export default Game;

