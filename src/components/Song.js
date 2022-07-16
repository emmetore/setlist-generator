import React from "react";
import { SETLIST_ENDPOINT } from "../rest/SetlistAPI.js";
import { useState, useEffect } from "react";
import { ArrowRight } from 'react-bootstrap-icons';

export const SETLIST_DELETE_ENDPOINT = `https://62b51cffda3017eabb14e834.mockapi.io/SetlistAPI/`



const Song = () => {
    const [songs, setSongs] = useState([]);


    //GET REQUEST Working but not refreshing...
    useEffect(() => {
        fetch(SETLIST_ENDPOINT)
            .then((res) => res.json())
            .then((result) => {

                console.log(result, 'result')
                setSongs(result);
            });
    }, []);



    //DELETE REQUEST ** Working but not refreshing...
    const deleteSong = (song) => {
    // console.log("songid", song._id)
    fetch(`${SETLIST_DELETE_ENDPOINT}/${song._id}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'DELETE',
    })
    .then(res=> res.json())
    .then(data => { console.log(data, 'data!');
    
    })
    .catch(error => console.log(error))

    }

    //PUT REQUEST
    const updateSong = (song) => {

        console.log(song, 'PUT data');

        fetch(`${SETLIST_DELETE_ENDPOINT}/${song._id}`, {
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(song)
        })
        .then(res=> res.json())
        .catch(error => console.log(error))

        //creating a PUT request to the server. Need to get it to edit the data inside the generator

    }


    //Map and render individual songs in mockAPI. Needs work getting spacking between name, key, length
    return (
        <div>
            {songs.map((song) => (
                <li className="song-list-item" key={song._id} >
                     {song.name} 
                     {song.key.toString()} 
                     {song.length} 
                
                <button onClick={() => {updateSong(song)}}>Edit</button> 
                
                <button onClick={() => {deleteSong(song)}}>Delete</button></li>
            ))}
        </div>
    );
}

export default Song;