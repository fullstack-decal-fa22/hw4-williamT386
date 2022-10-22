import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const addPosts = (newPost) => {
    let result = [...posts];
    result.unshift(newPost);
    setPosts(result);
  }

  return (
    <div>
      <Menu handleClick={addPosts}></Menu>

      {posts.map(color => <Block text={color} color={color}></Block>)}
    </div>
  );
}

export default Feed;