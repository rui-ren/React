import React, {Component} from 'react'

// statless
function display(props){

    return (
        <div className = 'User'>
            <h1 className = 'players'> The players here </h1>
            {
                props.map(user => {
                    const firstName = Object.values(user)[0];
                    const lastName  = Object.values(user)[1];
                    const userName  = Object.values(user)[2];
                    <div className = {Object.keys(user)}>
                        <p className = {first} > '${firstName} + ' ' + ${lastName} + ' ' + ${userName}' </p>;
                        <Button name = 'delete' onClick = {props.addNewUser}>
                            'X'
                        </Button>
                        <Button name = 'add' onClick = {props.deleteNewUser}>
                            '-'
                        </Button>
                    </div>
                })
            }
        </div>
    )
}


export default display;

