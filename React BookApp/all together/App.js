import React, {Component} from 'react';
import display from './display';


class App extends Component {

    // keep the state here
    state = {
        1: {'firstName': '',
            'lastName' : '',
            'userName' : ''
        }
    };

    addNewUser = event => {
        this.setState(currState => {
            this.state[this.state.length + 1] = {};
            this.state[this.state.length + 1].firstName = currState.firstName;
            this.state[this.state.length + 1].lastName  = currState.lastName;
            this.state[this.state.length + 1].userName  = currState.userName;
        })
    };

    deleteNewUser = event => {
        this.setState(currState => {
            delete this.state[currState.id];
        })
    }

    // 
    render() {
        return (
            <div className = 'players'>   
                <h1 className = 'user'>User for the App</h1>
                <display dispaly={this.state}/>
            </div>
        )
    }
}

export default App;

