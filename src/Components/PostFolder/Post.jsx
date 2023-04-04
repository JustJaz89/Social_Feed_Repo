import React, { useState } from 'react';

const Post = (props) => {

    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDislikes] = useState(props.dislikes);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    return (
        <div className="buttons">
            <button onClick={() => setLikes(likes + 1)}>Like</button>
            <span>{likes}</span>
            <button onClick={() => setDislikes(dislikes + 1)}>Dislike</button>
            <span>{dislikes}</span>
        </div>
    );
}

export default Post;