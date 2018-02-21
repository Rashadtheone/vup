import React, { Component } from 'react';
import Navi from '../Navi/Navi';
import Controls from '../Controls/Controls';
import Playlist from '../Playlist/Playlist';
import {Row, Col} from 'react-materialize'

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
    // console.log(res)
}).then(data => {
    console.log(data)
    const songs = data.map(song => {
        return (
            data = {
                song_id: song.id,
                title: song.title,
                songDuration: song.duration,
                trackUri: song.uri,
                user: {
                    name: song.user.username,
                    id: song.user.id,
                    pic: song.user.avatar_url,
                    scl: song.user.permalink_url
                },
                artwork: song.artwork_url,
                genre: song.genre,
                stream: song.stream_url,
                sl: song.permalink_url
            }
        )
    })
    // console.log(songs)
    this.setState({songs: data})
    console.log("state", this.state.songs)
})


}
    render() {
        console.log("rendered state", this.state)
        return (
            <div className="main-container">
            <Row>
                <Col s={12} className='grid-example'>
                    <div className='songLables'>
                        <h3>{this.state.songs.title}</h3>
                    </div>
                    <div className="cover">
                        <img src={this.state.songs.artwork} />
                    </div>
                </Col>
            </Row>
            <Row>
                <div className='trackProgression'>
                track progression
                </div>
                <Col s={12} className='grid-example'>
                        <Controls 
                        {...this.props}/> 
                </Col>
            </Row>
            <Row>
            <Col s={12} className='grid-example'>
                    <Playlist /> 
                </Col>
            </Row>
            </div>
        );
    }
}

export default Home;