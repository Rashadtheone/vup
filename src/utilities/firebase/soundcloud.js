import 'axios'
//imported from soundcloud-audio.js 

const SoundCloudAudio = require('soundcloud-audio');

// create new instance of audio
// clientId is optional but without it you cannot play SoundCloud tracks
const scPlayer = new SoundCloudAudio('YOUR_CLIENT_ID');

// if you have a SoundCloud api stream url you can just play it like that
scPlayer.play({streamUrl: 'https://api.soundcloud.com/tracks/185533328/stream'});

// OR if you want to play a NON-SoundCloud audio
scPlayer.play({streamUrl: 'https://example.com/plain/audio/file'});

// OR if you need to load a SoundCloud track and resolve it's data
scPlayer.resolve('https://soundcloud.com/djangodjango/first-light', function (track) {
    // do smth with track object
    // e.g. display data in a view etc.
    console.log(track); 

    // once track is loaded it can be played
    scPlayer.play();

    // stop playing track and keep silence
    scPlayer.pause();
});

// OR a SoundCloud playlist and resolve it's data
scPlayer.resolve('http://soundcloud.com/jxnblk/sets/yello', function (playlist) {
    // do smth with array of `playlist.tracks` or playlist's metadata
    // e.g. display playlist info in a view etc.
    console.log(playlist);

    // once playlist is loaded it can be played
    scPlayer.play();

    // for playlists it's possible to switch to another track in queue
    // e.g. we do it here when playing track is finished 
    scPlayer.on('ended', function () {
        scPlayer.next();
    });

    // play specific track from playlist by it's index
    scPlayer.play({playlistIndex: 2});
});