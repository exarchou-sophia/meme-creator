import React from 'react';
import './PostItNote.css';

export const PostItNote = () => {
    return (
        <div className="postit-note rounded-md">

            <ul className="text-xl">Create your meme here!
                <li className="mt-2 text-md">
                    Search for a picture </li>
                <li> Add your own text,</li>
                <li>Save it in your gallery if you like it, </li>
                <li>Discard it if you don't </li>
                <li>and start over! 😉</li>
            </ul>
        </div>
    );
};

;