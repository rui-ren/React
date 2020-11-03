import React, {Component} from 'react';


class App extends Component {

    state  = {'value': "" };

    changeState = event => (
        this.setState({'value': event.target.value})
        )
    render() {

        return (
            <div className = 'App'>
                <header>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    <input 
                        type='text'
                        value = {this.state.value}
                        onChange = {this.changeState}
                        placeholder = "say hello"/>
                    <p className="echo"> Echo: {this.state.value}</p>
                </div>
            </div>
        )
    }
}


/* controler*/

