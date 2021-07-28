import React from 'reat';

export default class App extends React.Component {
    render() {
        var users = [
            {name: 'Robin'},
            {name: 'Markus'},
        ];

        return (
            <ul>
                {users
                    .filter(user => user.isDeveloper)
                    .map(user => <li>{user.name}</li>)
                }
            </ul>
        );
    }
}