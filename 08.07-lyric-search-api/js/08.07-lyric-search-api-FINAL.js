// Lesson 08.07 - PROG
// Lyric Search API

// Get the DOM elements
const artistInput = document.querySelector('#artist');
const titleInput = document.querySelector('#title');
const getLyricsBtn = document.querySelector('button');
const lyricsBox = document.querySelector('textarea');

// empty the lyrics box when user clicks in Artist or Title input box
artistInput.addEventListener('input', () => lyricsBox.textContent = "");
titleInput.addEventListener('input', () => lyricsBox.textContent = "");

// have button call fetchLyrics function
getLyricsBtn.addEventListener('click', fetchLyrics);
    
// define the festchLyrics function
// comments are based on search for 'Elton John' / 'Rocket Man'
// try a more advanced version with error handling 
// this version handles what happens when song not found (which gives 404 error)
// a search for 'Billy Joel' / 'Piano Man' fails to find lyrics (response 404)

/*
{ "lyrics":"It's nine o'clock on a Saturday\r\nThe regular crowd shuffles in\r\nThere's an old man sitting next to me\r\nMaking love to his tonic and gin\r\nHe says, \"Son can you play me a memory\n\nI'm not really sure how it goes\n\nBut it's sad and it's sweet\n\nAnd I knew it complete\n\nWhen I wore a younger man's clothes\ etc. }
*/

/*
CHALLENGE: 
Add artist and title to output; desired output:

Lyrics for Rocket Man by Elton John

She packed my bags, last night pre-flight
Zero hour none a.m.
etc.
*/

function fetchLyrics(event) {

    // prevent button from submitting form (reloading page)
    event.preventDefault();

    // concat the request string to the API: includes artist_name/song_title: https://api.lyrics.ovh/v1/Billy%20Joel/Piano%20Man
    let artist = artistInput.value;
    let title = titleInput.value;
    let lyricsURL = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    
    fetch(lyricsURL, {method: "GET"})
    .then(jsonData => jsonData.json())
    // .then(obj => lyricsBox.innerHTML = obj.lyrics)
    .then(obj => {
        console.log(obj);
        // if response obj has error property {error: 'No lyrics found'} 
        if(obj.error) {
            lyricsBox.textContent = obj.error + '\nPlease try again.';
        } else { // response obj has no error property, so output lyrics:
            // some results come w French header, which needs to be removed
            let lyrics = obj.lyrics;
            let str = "Paroles de la chanson";
            let snip = 0;
            if(lyrics.includes(str)) {
                snip = lyrics.indexOf("\n");
                lyrics = lyrics.slice(snip);
            }
            lyricsBox.textContent = `${title} by ${artist}\n\n${lyrics}`;
        }
    })

} // close fetchLyrics() function