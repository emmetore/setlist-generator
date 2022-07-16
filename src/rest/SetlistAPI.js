export const SETLIST_ENDPOINT = "https://62b51cffda3017eabb14e834.mockapi.io/SetlistAPI"


//Here's my POST request...couldn't get all other Requests to work on this page 
  export const createSong = (song) => {

    console.log(song)


       console.log(song, 'singyy')

    fetch(SETLIST_ENDPOINT, {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(song)
    })
    .then(res=> res.json())
    .then(data => { console.log(data, 'data!');
    
    })
    .catch(error => console.log(error))
  }

