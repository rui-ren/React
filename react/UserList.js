
import React, { Component } from 'react';
import User from './User';
import GameToggle from './GameToggle';

class UserList extends Component {
	
	state = {
		hide: false
	};
	
	toggleGame = () => {
		this.setState(prevState => ({
			// set to the opposite direction
			hide: !prevState.hide			
		}));
	};
	
	render(){
		const { users } = this.props;
		const { hide } = this.state;
		return (
			<div>
				<h3> Users </h3>
				{users.length > 0 && (
					<table>
						<thread>
							<tr>
								<td> First Name </td>
								<td> Last Name </td>
								<td> User Name </td>
								<td> Games </td>
							</tr>
						</thread>
						<tbody>
						{
							users.map((user) => (
								<User  key={user.username} user={user} hide={hide} />
							))}
						</tbody>
					</table>
				)}
				<GameToggle toggleGame={this.toggleGame} hide={hide} />
			</div>
		)
		
	}
}

export default UserList;

