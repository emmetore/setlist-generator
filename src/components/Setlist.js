import React, { useState } from "react";
import SetlistForm from "../SetlistForm";
import Song from './Song'
import { setlistApi } from "../rest/SetlistAPI";

const Setlist = (props) => {
    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [length, setLength] = useState('');
    const [_id] = useState('');
    const [song, addNewSong] = [];

    return (
        <div >
            <div>
                <SetlistForm
                    name = {name}
                    key = {key}
                    length = {length}
                    setName = {setName}
                    setKey = {setKey}
                    setLength = {setLength}
                    

                />
            </div>

            <div className="Setlist card">
                <Song
                name = {name}
                id={_id}
                key = {key}
                length = {length}
                
                
                />
            

            </div>

        </div>
    )
}

export default Setlist





// export default class Setlist extends React.Component {
//     state = {
//         songs : []
//     };

//     componentDidMount() {
//         this.fetchSongs();
//     };

//     fetchHouses = async () => {
//         const songs  = await setlistApi.get();
//         this.setState({ songs });
//         console.log(songs);
//     };

//     updateSong = async (updatedSong) => {
//         console.log(updatedSong);
//         await setlistApi.put(updatedSong);
//         this.fetchSongs();
//     };

//     deleteSong = async () => {
//         const songs  = await setlistApi.delete();
//         this.setState({ songs });
//     };


//     render() {
//         return (
//             <div className="set-list">
//                 <SetlistForm />
//                 {this.state.songs.map((song) => (
                    
//                     <Song
                        
//                         _id={_id}
//                         name={name}
//                         key={key}
//                     />
//                 ))}
//             </div>
//         )
//     }


// }