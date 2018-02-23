import React, { Component } from 'react';
import Visuals from '../Visuals/Visuals';
import Navi from '../Navi/Navi';
import Controls from '../Controls/Controls';
import Playlist from '../Playlist/Playlist';
import {Row, Col} from 'react-materialize'
import './home.css';


class Home extends Component {
    constructor () {
        super()
        this.state = {
            songs : []
        }
    }

componentDidMount() {
fetch('https://api.soundcloud.com/tracks?client_id=db1a9cf92ac128e893bad0c79db66245')
//lifestyle method fetch api!  attach on client ID
.then(res => {
    return res.json()
    console.log(res)
}).then(data => {
    console.log(data)
    const songs = data.map(song => {
        return (
            data = {
                song_id: song.id,
                uri: song.uri,
                title: song.title,
                songDuration: song.duration,
                trackUri: song.uri,

                name: song.user.username,
                id: song.user.id,
                pic: song.user.avatar_url,
                scl: song.user.permalink_url,

                artwork: song.artwork_url,
                genre: song.genre,
                stream: song.stream_url,
                sl: song.permalink_url
            }
        )
    })
    // console.log(songs)
    this.setState({songs: data})
    // console.log("state", this.state.songs)
})


}
    render() {
        // console.log("rendered state", this.state)
        return (
            <div className="main-container">
            <Row>
            <Col s={3} className='grid-example'>
                    <h4>{this.state.songs.name}</h4>
                    <a src ={this.state.songs.scl} >
                    <img src ={this.state.songs.pic} />
                    </a>
            </Col>
            <Col s={6}>
            <Visuals
            songs = {this.state.songs}/>
            </Col>
            <Col s={3}>

                    <div className="cover">
                        <img src={this.state.songs.artwork} />
                        <h3>{this.state.songs.title}</h3>
                    </div>
                </Col>
            </Row>
            <Row>

                <Col s={12} className='grid-example'>
                        <Controls
                        songs = {this.state.songs}/>
                </Col>
            </Row>
            <Row>
            <Col s={12} className='grid-example'>
                    <Playlist
                    songs = {this.state.songs}/>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Home;
