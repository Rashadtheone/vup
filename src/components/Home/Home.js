import React, { Component } from 'react';
import Visuals from '../Visuals/Visuals';
import Navi from '../Navi/Navi';
import Controls from '../Controls/Controls';
import Playlist from '../Playlist/Playlist';
import {Row, Col} from 'react-materialize'
import './home.css';
import 'axios'


class Home extends Component {
    constructor () {
        super()
        this.state = {
            songs : {},
            currentSong: null
        }
        this.setCurrentSong = this.setCurrentSong.bind(this);
    }

componentDidMount() {
fetch('https://api.soundcloud.com/tracks?client_id=db1a9cf92ac128e893bad0c79db66245')
// fetch('https://api.soundcloud.com/users?client_id=db1a9cf92ac128e893bad0c79db66245')
//lifestyle method fetch api!  attach on client ID
.then(res => {
    return res.json()
    console.log(res)
}).then(data => {
    console.log(data)
    var songs = {}; 
    data.forEach(song => {
        songs[song.id] = {
            song_id: song.id,
            uri: song.uri,
            title: song.title,
            songDuration: song.duration,
            trackUri: song.uri,

            name: song.user.username,
            id: song.user.id,
            pic: song.user.avatar_url,
            scl: song.user.permalink_url,
            followers: song.user.followers,

            artwork: song.artwork_url,
            genre: song.genre,
            stream: song.stream_url,
            sl: song.permalink_url
        }
    })
    console.log('songs: ', songs)
    this.setState({songs: songs})
    // console.log("state", this.state.songs)
})

}

setCurrentSong(id) {
    var song = this.state.songs[id];
    console.log('song: ', id, song);
    this.setState({currentSong: song});
}
    render() {
        // console.log("rendered state", this.state)
        return (
            <div className="main-container">
            <Row>
            <Col s={3} className='grid-example'>
                    { this.state.currentSong && 
            <div className="row">
            <div className="col s12 m12">
            <div className="card">
                <div className="card-image">
                <img className="responsive-img" src={this.state.currentSong.pic} />
                <span class="card-title"><h4>{this.state.currentSong.title}</h4></span>
                <a href={this.state.currentSong.scl} target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons" >cloud</i></a>
                </div>
                <div className="card-content">
                { this.state.currentSong && <div className="cover">
                        <img src={this.state.currentSong.artwork} />
                        <h6>{this.state.currentSong.title}</h6>
                    </div>}
                </div>
            </div>
            </div>
            </div>
                    }
            </Col>
            <Col s={5}>
            <Visuals
            song = {this.state.currentSong}/>
            </Col>
            <Col s={4}>
            <Playlist
                    songs = {this.state.songs} 
                    setCurrentSong = {this.setCurrentSong}/>
                </Col>
            </Row>
            <Row>

                <Col s={12} className='grid-example'>
                <Controls
                        song = {this.state.currentSong}/>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Home;
