import React, {Component} from 'react'


class games extends Component {

    constructor(props) {
        super(props);
        const valuesArray = this.makeNewQuestion();
        this.state = {
            value1: valuesArray[0],
            value2: valuesArray[1],
            value3: valuesArray[2],
            proposedAnswer: valuesArray[3],
        }
    }

    randomGenerator = () => {
        return Math.floor(Math.random() * 100);
    };

    makeNewQuestion = () => {
        const value1 = this.randomGenerator();
        const value2 = this.randomGenerator();
        const value3 = this.randomGenerator();
        const proposedAnswer = Math.floor(Math.random() * 3 + value1 + value2 + value3);
        return [value1, value2,  value3,  proposedAnswer];
    };

    updateState = newValueArray => {
        this.setState(currState => ({
            value1: newValueArray[0],
            value2: newValueArray[1],
            value3: newValueArray[2],
            proposedAnswer: newValueArray[3],
        }));
    };

    handleAnswer = event => {
        const newValuesArray = this.makeNewQuestion();
        this.updateState(newValuesArray);
        const answerWasCorrect = this.evaluateAnswer(event.target.name);
        this.props.handleAnswer(answerWasCorrect);
    };

    evaluateAnswer(givenAnswer) {
        const {value1, value2, value3, proposedAnswer} = this.state;
        const corrAnswer = value1 + value2 + value3;
        return (
            (corrAnswer === proposedAnswer && givenAnswer === 'true') ||
            (corrAnswer === proposedAnswer && givenAnswer === 'false')
        );
    };

    render() {
        const {value1, value2, value3, proposedAnswer} = this.state;
        return (
            <div>
                <div className='equation'>
                    <p className='text'>{'${value1} + ${value2} + ${value3} = ${proposedAnswer}'}</p>
                </div>
                <button onClick={this.handleAnswer} name= 'true'>
                    True
                </button>
                <button onClick={this.handleAnswer} name="false">
                    False
                </button>
            </div>
        )
    }
}


export default games;