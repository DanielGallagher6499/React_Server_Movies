import React, { Component } from 'react';
import '../App.css'
import Movies from './Movies';
import axios from 'axios';

export class Read extends Component {
    
    state={
        movies: [ ]//End of Array

    };//End of state

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772')
        .then((response)=>{
            this.setState({movies: response.data.Search});
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                <h2>Movies</h2>
                <Movies myMovies={this.state.movies}></Movies>
            </div>
        );
    }
}
export default Read;