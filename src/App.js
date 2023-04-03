import React, { useState } from 'react';
import PostList from "./Components/PostList/PostList";
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import "./App.css";

function App() {

  const [posts, setPosts] = useState([{name: "Jazmin Ivy", post: "This is my Social Feed Project using React!"}])

  function addNewPost(post) {

    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border-box"> 
            <CreatePostForm addNewPostProperty={addNewPost} />
          </div>
          <div className="border-box"> 
            <PostList postEntries={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
