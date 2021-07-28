import React, {Component} from 'react'
import ListContacts from "./ListContacts";
// eslint-disable-next-line

class MovieLikes extends Component {

    render() {

        const MovieLikes = {};

        for (let item in this.props.movies){
            const movie = this.props.movies[item].name;
            MovieLikes[movie] = [];
        }

        this.props.profiles.map((profile) => {
            const id = profile.id;
            const movieID = profile.favoriteMovieID;
            const name = this.props.users[id].name;
            const movie = this.props.movies[movieID];
            return MovieLikes[movie.name].push(name);
        });

        function response(item) {
            return item !== undefined ? item : 'Nothing';
        }

        return (
            Object.keys(MovieLikes).map((movie) => {
                return (
                    <div>
                    <h2 className={movie}> {movie} </h2>
                    <p> Liked By </p>
                    {MovieLikes[movie].map((user) => {
                        return (
                            <ul key = {response(user)}>
                                <li key={response(user)}>
                                    {console.log(response(user))}
                                    {response(user)}
                                </li>
                            </ul>
                        )
                    }
                    )}
                    </div>
                )
            })
        )
    }
}
export default MovieLikes;
