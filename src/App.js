import React, { useState } from 'react';
import PostList from "./Components/PostList/PostList";

function App() {

  const [posts, setPosts] = useState([{name: "Jazmin Ivy", post: "This is my React Social Feed Project!"}])

  return (
    <div>
      <PostList postEntries={posts} />
    </div>
  );
}

export default App;
