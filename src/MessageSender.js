import React, { useState } from 'react'
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from "firebase"

function MessageSender() {
    const [{ user }] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");
    };
    return (
        <div className="messageSender">
            <div className="messageSender__top" >
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        className="messageSender__input"
                        placeholder={`What's on your mind, ${user.displayName}?`}
                        type="text"
                    />
                    <input
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)}
                        placeholder="image URL (optional)" type="text"
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <EmojiEmotionsOutlinedIcon style={{ color: "orange" }} />
                    <h3>Felling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
