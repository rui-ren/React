import React from 'react';

function GameToggle(props) {
	const {hide} = props;
	return (
		<button onClick={props.toggleGame}>
		{
			hide
			? "Show the Number of Games Played"
			: "Hide the Number of Games Played"
		}
		</button>
	)
}

export default GameToggle;

