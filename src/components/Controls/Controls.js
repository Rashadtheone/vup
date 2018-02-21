import React, { Component } from 'react';

class Controls extends Component {
    constructor() {
        super(props)
    }
    function playSong () {
    
    }
    function stopSong () {

    }
    function skipSong () {

    }
    function saveSong () {

    }
    render() {
        return (
            <div className='controls'>
                <input type='button' value='Play' />
                <input type='button' value='Forward' />
                <input type='button' value='Backward' />
            </div>
        );
    }
}

export default Controls;