import React, {Component} from 'react'

class ListContacts extends Component {
    render(){
        // return the file here
        return (
            <ol className = "movie-contact">
                {this.props.profiles.map((profile) => {
                    const name = this.props.users[profile.id].name;
                    const movie = this.props.movies[profile.favoriteMovieID].name;
                    return (
                        <div key={profile.id}>
                            <li>
                                <p> "{name} 's favorite movie is {movie}" </p>
                            </li>
                        </div>
                    )
                })
                }
            </ol>
        )
    }
}

export default ListContacts;