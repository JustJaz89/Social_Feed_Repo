import React, { useState } from 'react';
import PostList from "./Components/PostList/PostList";
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [posts, setPosts] = useState([{name: "Jazmin Ivy", post: "This is my Social Feed Project using React!"}])

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
