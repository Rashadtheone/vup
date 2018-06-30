import React, { Component } from 'react';
import 'node-soundcloud'
import 'cors'


class Controls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            song: props.song,
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
        
        // this.saveSong = this.saveSong.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({song: nextProps.song});
    }
    
    playSong(e) {
        e.preventDefault()

        const client = 'db1a9cf92ac128e893bad0c79db66245'
        var stream = this.props.song.stream
        var context = new AudioContext()
        var audio = new Audio(),
            url = stream +'?' + 'client_id=' + client;
        audio.src = url;

        this.setState({
            audio: audio,
            source: context.createMediaElementSource(this.state.audio)
        }, () => {
            this.state.source.connect(context.destination);
            this.state.source.mediaElement.play();
            this.setState.audio.crossOrigin = 'anonymous' 
        });        
    }

    stopSong (e) {
        e.preventDefault()
        this.setState({
            isPlaying: false
        })
        this.state.source.mediaElement.pause();
    }
  
    render() {
        return (
            <div>
            <div className='timeBar'>
            </div>
            <div className='controls'>
                {   this.state.song && 
                    <div>
                        <input type='button' value='Play' onClick={this.playSong} id='play' className='pulse grow'/>
                        <input type='button' value='Stop' onClick={this.stopSong} id='stop' className='pulse grow'/>
                        <div className='timer' />
                    </div>
                }
            </div>
            </div>
        );
    }
}

export default Controls;


