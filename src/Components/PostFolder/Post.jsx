import React, { useState } from 'react';

const Post = (props) => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    // const handleLike = () => {
    //     setLikes(likes + 1);
    // };

    // const handleDislike = () => {
    //     setDislikes(dislikes + 1);
    // };

    const handleLike = () => {
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
            if (disliked) {
                setDislikes(dislikes - 1);
                setDisliked(false);
            }
        }   else {
            setLikes(likes - 1);
            setLiked(false);
        }
    };

    const handleDislike = () => {
        if (!disliked) {
            setDislikes(dislikes + 1);
            setDisliked(true);
            if (liked){
                setLikes(likes - 1);
                setLiked(false);
            }
        }   else {
            setDislikes(dislikes - 1);
            setDisliked(false);
        }
        
    };

    return (
        <div className="buttons">
            <button onClick={handleLike}>Like({likes})</button>
            <button onClick={handleDislike}>Dislike({dislikes})</button>
        </div>
    );
}

export default Post;