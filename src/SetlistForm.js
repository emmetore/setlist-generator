import React, { useState, useEffect } from "react";
import Song from "./components/Song";
import { createSong } from "./rest/SetlistAPI";
import { SETLIST_ENDPOINT } from "./rest/SetlistAPI";


const SetlistForm = (props) => {
    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [length, setLength] = useState('');

    const handleKeyInput = (event) => {
        setKey(event.target.value);
    };

    const handleLengthInput = (event) => {
        setLength(event.target.value);
    };

    const handleNameInput = (event) => {
        setName(event.target.value);
    };

    const addNewSong = (key, name, length) => {

        console.log('new song added', key, name, length);

        let song = { key: key, name: name, length: length }
        createSong(song);

    }

    const onFormSubmit = (event) => {

        event.preventDefault();
        console.log(key);
        console.log(name);
        console.log(length);
        setName("");
        setKey("");
        setLength("");
        addNewSong(key, name, length);

    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Song name"
                className="song-input"
                value={name}
                required
                onChange={handleNameInput}
                onSubmit={onFormSubmit} />
            <input
                type="text"
                placeholder="Key"
                className="song-input"
                value={key}
                required
                onChange={handleKeyInput}
                onSubmit={onFormSubmit} />
            <input
                type="text"
                placeholder="length"
                className="song-input"
                value={length}
                required
                onChange={handleLengthInput}
                onSubmit={onFormSubmit} />
            <button className="add-button" type="submit">ADD SONG</button>
        </form>
    )
}




export default SetlistForm;
