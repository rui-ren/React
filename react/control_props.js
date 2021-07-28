import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Change from './change.js'

class App extends Component {
  
	// this is the Main state that is in charge of all the first name, last name, user name info
	state = {
		users: [
		{fname: 'rui', lname: 'ren', username: 'jaden', games: 0}
		]
	}
	
	saveUser = user => {
		this.setState(prevState => ({
			users: [...prevState.users, user]
		}));
	};
	
	render() {
		return (
			<div className='App'>
				<header className="App-header">
					<img src='logo.svg' className="App-logo" alt="logo" />
					<h1 className="App-title"> ReactND - Coding Practice </h1>
					<p> Excercise 1 - All Together </p>
				</header>
				<main className="App-main">
					<h2> User Game List </h2>
					<div className="container">
						<UserInput users={users} saveUser={this.saveUser} />
						<UserList users={users} />
					</div>
				</main>
			</div>
		)
	}

export default App