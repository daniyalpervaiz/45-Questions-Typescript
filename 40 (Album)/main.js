"use strict";
function make_album(artist_name, album_name, tracks) {
    let musicAlbum = {
        artist: artist_name,
        album: album_name,
    };
    if (tracks !== undefined) {
        musicAlbum.track = tracks;
    }
    return musicAlbum;
}
let album1 = (make_album("artist1", "album1"));
let album2 = (make_album("artist2", "album2"));
let album3 = (make_album("artist3", "album3", 5));
console.log(album1);
console.log(album2);
console.log(album3);
