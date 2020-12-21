
// User.js

import React from 'react';

function User(props) {
	
	const {fname, lname, username, games} = props.user;
	
	return (
		<tr>
			<td> {fname} </td>
			<td> {lname} </td>
			<td> {username} </td>
			<td>
				{username} played {props.hide ? '*' : games } games
			</td>
 		</tr>
	);
}

export default User;
