import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollPosition from '../../hooks/useKeepPositionScroll';
import Post from '../Post/Post';
import './Posts.css'

const Posts = ({ postId }) => {

  const [selPost, setSelPost] = useState(-1)
  const navigate = useNavigate()
  const togglePreviousPost = () => {
    navigate(-1)
  }
  return (
    <div className='posts-container'>
      {postId === undefined ?
        <div className='posts-list'>
          <Post post={postId} />
          <Post post={postId} />
          <Post post={postId} />
          <Post post={postId} />
          <Post post={postId} />
          <Post post={postId} />
          <Post post={postId} />
          <Post post={postId} />
          <Post post={postId} />
        </div> :
        <div className='posts-selected'>
          <div className='heading-detail-post'>
            <div className='previous-post'>
              <div className='item-previous-post' onClick={togglePreviousPost}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                  <g><g><path d="M112,128l79.7-79.6c8.8-8.8,8.8-23,0-31.8c-8.8-8.8-23.1-8.8-31.9,0l-95.6,95.5c-8.8,8.8-8.8,23,0,31.8l95.6,95.5c8.8,8.8,23.1,8.8,31.9,0c8.8-8.8,8.8-23,0-31.8L112,128z" /></g></g>
                </svg></div>
            </div>
            <div className='name-user-post'> Liu Yao Wen
            </div>
          </div>
          <div className='body-detail-post'>
            <Post postId={postId} />
          </div>
        </div>}
    </div>
  );
}
export default Posts