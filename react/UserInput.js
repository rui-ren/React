
// UserInput.js

import React, { Component } from 'react';

class UserInput extends Component {
	
	// this is the local state that is in charge of local state !
	state = {
		firstName : "",
		secondName: "",
		userName  : "",
		games     : 0,
		unique    : true,
	};
	
	// this is beautiful here 
	// use this type of solution to do the work here
	handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		
		this.setState({
			[name]: value,
			unique: true
		});
	};
	
	fieldsAreValid = event => {
		const {fname, sname, uname} = this.state;
		const valid = fname.length > 0 && sname.length > 0 && uname.length > 0;
		return valid;
	}
	
	addUser = event => {
		
		if (this.props.users.filter(user => user.username === this.state.username)) {
			
			this.setState({unique: false});
		} else {
			this.setState({unique: true});
			this.props.saveUser({...this.state})
		}
	};
	
	render(){
		return (
			<div className='add-user'>
				<h3> Add User </h3>
				
				<form onSubmit={this.addUser}>
					<label>
						<p> First Name </p>
						<Input 
							name='firstName' 
							type='text' 
							value={this.state.firstName} 
							onChange={this.handleChange} 
							className="First-Name"
						/>
					</label>
					</br>
					
					<label>
						<p> Second Name </p>
						<Input 
							name="SecondName"
							type='text'
							value={this.state.secondName}
							onChange={this.handleChange}
							className="Second-Name"
						/>
					</label>
					</br>
					
					<label>
						<p> User Name </p>
						<Input
							name="userName"
							type="text"
							value={this.state.userName}
							onChange={this.handleChange}
							className="userName"
						/>
					</label>
					</br>
					<button disable={!this.fieldAreValid() onClick = {this.addUser}}>Add</button>
				</form>
			</div>
		)
	}
}

export default UserInput;








