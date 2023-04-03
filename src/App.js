import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';


function App() {

  const [posts, setPosts] = useState([{name: "Jazmin Ivy", post: "This is my React Social Feed Project!"}])

  return (
    <div>
      <CreatePostForm />
    </div>
  );
}

export default App;
