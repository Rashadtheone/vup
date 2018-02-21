import React, { Component } from 'react';
import 'node-soundcloud'
import { PlayButton, Icons } from 'react-soundplayer/components';
const { SoundCloudLogoSVG } = Icons;
var SC = require('node-soundcloud')

class Controls extends Component {
    constructor(props) {
        super(props)
        this.playSong = this.playSong.bind(this);
        this.stopSong = this.stopSong.bind(this);
        this.skipSong = this.skipSong.bind(this);
        this.saveSong = this.saveSong.bind(this);
    }
    playSong() {
        console.log("play")
        var song = this.audioStream = new Audio(this.props.trackUri +'/stream?client_id='+ this.props.clientId);
        console.log(song)
    }
    stopSong () {
        console.log("stop")
    }
    skipSong () {
        console.log("skip")
    }
    saveSong () {
        console.log("save")
    }
    render() {
        return (
            <div className='controls'>
                <input type='button' value='Forward' onClick={this.skipSong}/>
                <input type='button' value='Play' onClick={this.playSong}/>
                <input type='button' value='Stop' onClick={this.stopSong}/>
                <input type='button' value='Backward' onClick={this.saveSong}/>
            </div>
        );
    }
}

export default Controls;