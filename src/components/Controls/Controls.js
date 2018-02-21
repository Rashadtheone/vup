import React, { Component } from 'react';
import 'node-soundcloud'
import { PlayButton, Icons } from 'react-soundplayer/components';
const { SoundCloudLogoSVG } = Icons;
var SC = require('node-soundcloud')

class Controls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: []
        }
        this.playSong = this.playSong.bind(this);
        this.stopSong = this.stopSong.bind(this);
        this.skipSong = this.skipSong.bind(this);
        this.saveSong = this.saveSong.bind(this);
    }
    playSong() {
        
        const client = 'db1a9cf92ac128e893bad0c79db66245'
        var uri = this.props.songs.song_id
        // console.log(uri)
        var song = this.audioStream = new Audio(uri + '/stream?client_id=' + client);
        <audio src='song'/>
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