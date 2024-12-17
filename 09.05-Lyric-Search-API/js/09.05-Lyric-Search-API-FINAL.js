// Lesson 09.05 - Lyric Search API

// Get the DOM elements
const form = document.querySelector("form");
const artistName = document.querySelector("#artist");
const songTitle = document.querySelector("#title");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

// empty the lyrics box when user clicks in Artist or Title input box
artistName.addEventListener('input', () => textarea.textContent = '');
songTitle.addEventListener('input', () => textarea.textContent = '');

// have button call fetchLyrics function
button.addEventListener("click", fetchLyrics);
    
// define the festchLyrics function
// comments are based on search for 'Elton John' / 'Rocket Man'

// try a more advanced version with error handling 
// this version handles what happens when song not found (which gives 404 error)
// a search for 'Billy Joel' / 'Piano Man' fails to find lyrics (response 404)
function fetchLyrics(event) {

    event.preventDefault(); // prevent button from submitting form (reloading page)
    // concat the request string to the API: includes artist_name/song_title

    const promiseObj = fetch(`https://api.lyrics.ovh/v1/${artistName.value}/${songTitle.value}`)

    .then(jsonData => jsonData.json())

    .then(responseObj => {
        console.log(responseObj); // {error: 'No lyrics found'}
        // if response object has no lyrics, it has an error property instead:
        //if(!responseObj.error) { // if response object has NO error property
            let lyrics = responseObj.lyrics;
            lyrics = lyrics.replace('Paroles de la chanson', '');
            lyrics = lyrics.replace('par', 'by');
            lyrics = lyrics.replace(artistName.value, artistName.value + '\n');
            textarea.textContent = lyrics;
        // } else { // response object HAS error property, so no lyrics found
            // textarea.textContent = responseObj.error;
        // }
    })
    .catch(error => textarea.textContent = 'Oops! No lyrics found! Error: ' + error);
}

    
