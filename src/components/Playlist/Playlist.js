import React, { Component } from 'react';
import './playlist.css';
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
            <div className='playlist-container'>
            <div className='playlistTitle'>
            <h5>Playlist</h5></div>
            <div className='playlist'>

                <ul>
                {
                        songsList.length > 0 && 
                        songsList.map(song => (
                            <li className="songsInList" key={song.song_id} onClick={() => {this.props.setCurrentSong(song.song_id)}}>{song.title}</li>
                        ))
                    }
                    {
                        songsList.length == 0 && 
                        <li className="songsInList">No Songs...</li>
                    }
                </ul>
            </div>
            </div>
        );
    }
}

export default Playlist;
