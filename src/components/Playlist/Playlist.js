import React, { Component } from 'react';

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: props.songs
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({songs: nextProps.songs});
    }

    render() {
        var songsList = [];
        Object.keys(this.state.songs).forEach(id => { songsList.push(this.state.songs[id]) });
        return (
            <div className='playlist'>
                <ul>
                {
                        songsList.length > 0 && 
                        songsList.map(song => (
                            <li key={song.song_id} onClick={() => {this.props.setCurrentSong(song.song_id)}}>{song.title}</li>
                        ))
                    }
                    {
                        songsList.length == 0 && 
                        <li>No Songs...</li>
                    }
                </ul>
            </div>
        );
    }
}

export default Playlist;
