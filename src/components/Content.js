import React, { Component } from 'react';
import '../App.css'

export class Content extends React.Component {
    render() {
        return (
            <div ClassName="App">

                <h1>Hello World From Content!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <h1>*Working*</h1>

            </div>

        );
    }
}

export default Content;