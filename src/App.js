import React, { useState } from 'react';
import PostList from "./Components/PostList/PostList";
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';

function App() {

  const [posts, setPosts] = useState([{name: "Jazmin Ivy", post: "This is my React Social Feed Project!"}])

  function addNewPost(post) {

    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
  }

  return (
    <div>
      <PostList postEntries={posts} />
      <CreatePostForm addNewPostProperty={addNewPost} />
    </div>
  );
}

export default App;
