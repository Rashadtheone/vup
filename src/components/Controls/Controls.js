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
            isPlaying: false,
            pausedAt: 0, 
            context: new AudioContext(),
            audio: new Audio(),
            source: null, 
            //added the context, and audio, and source so you could access the source from different methods!
        }
        this.playSong = this.playSong.bind(this);
        this.stopSong = this.stopSong.bind(this);
        // this.skipSong = this.skipSong.bind(this);
        // this.saveSong = this.saveSong.bind(this);
    }
    
    playSong(e) {
    e.preventDefault()
        this.setState({
            isPlaying: true
        })
        const client = 'db1a9cf92ac128e893bad0c79db66245'
        const secret = '565ccc1cd70f68daecd6be5a1575a954'
        var stream = this.props.songs.stream
        var uri = this.props.songs.uri
        var context = new AudioContext()
        var audio = new Audio(),
            source,
            url = stream +'?' + 'client_id=' + client

        this.state.audio.src = url
        this.state.source = context.createMediaElementSource(this.state.audio);
        this.state.source.connect(context.destination);
        this.state.source.mediaElement.play();
        this.state.audio.crossOrigin = 'anonymous'
        var playing = this.state.source.context.state 
        console.log(e)
    }

    stopSong (e) {
        e.preventDefault()
        this.setState({
            isPlaying: false
        })
        this.state.source.mediaElement.pause();
    }
  
    render() {
        console.log(this.state.isPlaying)
        return (
            <div>
            <div className='timeBar'>
            </div>
            <div className='controls'>
                <input type='button' value='Forward' onClick={this.skipSong} class='grow'/>
                <input type='button' value='Play' onClick={this.playSong} id='play' class='pulse grow'/>
                <input type='button' value='Stop' onClick={this.stopSong} id='stop' class='pulse grow'/>
                <input type='button' value='Backward' onClick={this.saveSong} class='grow'/>
            </div>
            </div>
        );
    }
}

export default Controls;