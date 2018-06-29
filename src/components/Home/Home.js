import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Playlist from '../Playlist/Playlist';
import {Row, Col,Card,CardTitle} from 'react-materialize'
import Equalizer from '../Visuals/Equalizer';
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
}).then(data => {
    var songs = {}; 
    data.forEach(song => {
        songs[song.id] = {
            song_id: song.id,
            uri: song.uri,
            title: song.title,
            songDuration: song.duration,
            trackUri: song.uri,
            plays: song.playback_count,
            downloads: song.download_count,
            likes: song.favoritings_count,

            name: song.user.username,
            idU: song.user.id,
            pic: song.user.avatar_url,
            scl: song.user.permalink_url,

            artwork: song.artwork_url,
            genre: song.genre,
            stream: song.stream_url,
            sl: song.permalink_url
        }
    })
    console.log('songs: ', songs)
    this.setState({songs: songs})

})
}

setCurrentSong(id) {
    var song = this.state.songs[id];
    console.log('song: ', id, song);
    this.setState({currentSong: song});
}


// componentWillMount(id) {
//     fetch('https://api.soundcloud.com/users/${this.state.songs.user.id}?client_id=db1a9cf92ac128e893bad0c79db66245')
//         .then(res => {
//             return res.json()
//             console.log(res)
//         }).then(data => {
//             console.log(data)
//             var users = {}; 
//             data.forEach(user => {
//                 users[user.id] = {
    
//                 }
//             })
            
//             console.log('users: ', users)
//             this.setState({users: users})
//             // console.log("state", this.state.songs)
//         })
//     }

    render() {
        // console.log("rendered state", this.state)
        return (
            <div className="main-container">
            <Row>
            <Col s={3} className='grid-example'>
                    { this.state.currentSong && 
            // <div className="row">
            // <div className="col s12 m12">
            // <div className="card">
            //     <div className="card-image">
            //     <img className="responsive-img" src={this.state.currentSong.pic || this.state.currentSong.artwork} />
            //     <span class="card-title"><h4>{this.state.currentSong.title}</h4></span>
            //     <a href={this.state.currentSong.scl} target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons" >cloud</i></a>
            //     </div>
            //     <div className="card-content">
            //     { this.state.currentSong && <div className="cover">
            //             <img src={this.state.currentSong.artwork} />
            //             <h6>{this.state.currentSong.title}</h6>
            //         </div>}
            //     </div>
            // </div>
            // </div>
            // </div>
            <Card header={
            <CardTitle 
                reveal image={this.state.currentSong.pic || this.state.currentSong.artwork} 
                waves='light'/>}
                title={this.state.currentSong.name}
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p>
                        <a href={this.state.currentSong.scl}>Soundcloud</a>
                        <div className="followers">
                        <h1>{this.state.currentSong.followers}</h1>
                        </div>
                    </p>
            </Card>

            
                    }
            </Col>
            <Col s={5}>
            <Equalizer
            song = {this.state.currentSong}/>
            </Col>
            <Col s={4}>
            <Playlist
                    songs = {this.state.songs} 
                    setCurrentSong = {this.setCurrentSong}/>
                </Col>
            </Row>
            <Row>

               
                <Controls
                        song = {this.state.currentSong}/>
            </Row>
            </div>
        );
    }
}

export default Home;
