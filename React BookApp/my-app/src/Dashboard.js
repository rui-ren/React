import React, {Component} from "react";
import MovieCard from './MovieCard.js'

class MovieCardList extends Component {

    render() {
        const {profiles, users, movies, usersByMovie} = this.props;
        const movieCards = Object.keys(movies).map(id => (
            <MovieCard
                key={id}
                users={users}
                userWhoLikeMovie={usersByMovie[id]}
                movieInfo={movies[id]}
            />
        ));
        return (
            <ul>
                {movieCards}
            </ul>
    )
    }
}

export default MovieCardList