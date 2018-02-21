import React, { Component } from 'react';
import 'node-soundcloud'
import { PlayButton, Icons } from 'react-soundplayer/components';
import 'cors'
var ProgressBar = require('progressbar.js')
const { SoundCloudLogoSVG } = Icons;
var SC = require('soundcloud')

class Controls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            duration: 0,
        }
        this.playSong = this.playSong.bind(this);
        this.stopSong = this.stopSong.bind(this);
        // this.skipSong = this.skipSong.bind(this);
        // this.saveSong = this.saveSong.bind(this);
    }
    
    playSong() {
        const client = 'db1a9cf92ac128e893bad0c79db66245'
        const secret = '565ccc1cd70f68daecd6be5a1575a954'
        var stream = this.props.songs.stream
        var uri = this.props.songs.uri
        var context = new AudioContext()
        var audio = new Audio(),
            source,
            url = stream +'?' + 'client_id=' + client

        audio.src = url
        source = context.createMediaElementSource(audio);
        source.connect(context.destination);
        source.mediaElement.play(); 
        audio.crossOrigin = 'anonymous'
        console.log(audio)
    }
    stopSong () {
        const client = 'db1a9cf92ac128e893bad0c79db66245'
        const secret = '565ccc1cd70f68daecd6be5a1575a954'
        var stream = this.props.songs.stream
        var uri = this.props.songs.uri
        var context = new AudioContext()
        var audio = new Audio(),
            source,
            url = stream +'?' + 'client_id=' + client

        audio.src = url
        source = context.createMediaElementSource(audio);
        source.connect(context.destination);
        source.mediaElement.pause(); 
        audio.crossOrigin = 'anonymous'
        console.log(audio)
    }
    timeBar(props) {
        const Play = props.id
        if (e === true) {
            React.createElement(
                ProgressBar.circle,
                {
                color: '#FCB03C',
                duration: 3000,
                easing: 'easeInOut'}
            )
            
        };
        }
    // skipSong () {
    //     console.log("skip")
    // }
    // saveSong () {
    //     console.log("save")
    // }
    render() {
        return (
            <div>
            <div className='timeBar'>
            </div>
            <div className='controls'>
                <input type='button' value='Forward' onClick={this.skipSong} class='changeSong'/>
                <input type='button' value='Play' onClick={this.playSong} id='play'/>
                <input type='button' value='Stop' onClick={this.stopSong} id='stop'/>
                <input type='button' value='Backward' onClick={this.saveSong} class='changeSong'/>
            </div>
            </div>
        );
    }
}

export default Controls;