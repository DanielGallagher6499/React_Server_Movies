import React, { Component } from 'react';
import '../App.css'
import MovieItem from './movieItem';

export class Movies extends Component {
    render() {
        return this.props.myMovies.map((movie)=>{
            console.log(movie);
            return <MovieItem movie={movie}></MovieItem>
        });
    }
}
export default Movies;