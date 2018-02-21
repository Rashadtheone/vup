import 'axios'
var SC = require('node-soundcloud')

const SC = new SC ({
    id: 'db1a9cf92ac128e893bad0c79db66245',
    secret: '565ccc1cd70f68daecd6be5a1575a954',
})

export function getNewSongs() {
    axios.get(newsongs) {
        .request('')
    }
}