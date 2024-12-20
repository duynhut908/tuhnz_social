import React, { useState } from 'react';
import './PostArticle.css';

const PostArticle = ({ onClose }) => {

    return (
        <div className="post-article-container" onClick={onClose}>
            <div className="post-article-content" onClick={(e) => e.stopPropagation()}>
                <div className='title-new-post'>
                    <div>New Post</div>
                    <select id="dropdown">
                        <option value="" disabled>Public</option>
                        <option value="option1">Public</option>
                        <option value="option2">Private</option>
                        <option value="option3">Friend</option>
                    </select>
                </div>
                <form>
                    <div className="form-content">
                        <textarea placeholder="Enter your content"></textarea>
                        <div className='tool-new-post'>
                            <div className='item-new-post'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                                    <g><g><path d="M128.1,10.1c16.2,0,31.5,3.1,45.9,9.3c14.4,6.2,26.9,14.6,37.5,25.2c10.6,10.6,19,23.1,25.2,37.5c6.2,14.4,9.3,29.7,9.3,45.9c0,16.4-3.1,31.7-9.3,46c-6.2,14.3-14.6,26.8-25.2,37.5c-10.6,10.7-23.1,19.1-37.5,25.2s-29.7,9.2-45.9,9.2c-16.4,0-31.7-3.1-46-9.2c-14.3-6.1-26.8-14.5-37.5-25.2C34,200.8,25.5,188.3,19.3,174c-6.2-14.3-9.3-29.6-9.3-46c0-16.2,3.1-31.5,9.3-45.9C25.5,67.8,34,55.3,44.7,44.6c10.7-10.6,23.2-19,37.5-25.2C96.5,13.2,111.8,10.1,128.1,10.1L128.1,10.1z M170.7,68.7c-5.2,0-9.6,2.2-13.2,6.5c-3.6,4.3-5.4,9.5-5.4,15.7c0,6.3,1.8,11.6,5.4,15.9c3.6,4.3,8,6.5,13.2,6.5c5.2,0,9.6-2.2,13.2-6.5c3.6-4.3,5.4-9.6,5.4-15.9c0-6.1-1.8-11.3-5.4-15.7C180.4,70.8,176,68.7,170.7,68.7L170.7,68.7z M83.4,69.2c-5,0-9.3,2.2-12.8,6.5c-3.5,4.3-5.3,9.5-5.3,15.7c0,6.3,1.8,11.6,5.3,15.8c3.5,4.2,7.8,6.3,12.8,6.3s9.3-2.1,13-6.3c3.6-4.2,5.4-9.5,5.4-15.8c0-6.1-1.8-11.3-5.4-15.7C92.7,71.3,88.4,69.2,83.4,69.2L83.4,69.2z M129.2,215.6c9.5,0,18.6-1.7,27.1-5.1c8.5-3.4,16.2-8.1,23.1-14c6.8-5.9,12.6-12.9,17.4-20.8c4.8-7.9,8.1-16.4,10.1-25.4V149c0-1.4-0.5-2.7-1.6-3.9c-1.1-1.2-2.4-1.8-4-1.8H56.9c-1.6,0-3.1,0.6-4.5,1.8c-1.3,1.2-1.9,2.5-1.5,3.9c0.4,1.8,0.6,3.1,0.8,3.8c0.2,0.7,0.4,1.3,0.5,1.6c2.3,8.6,5.9,16.7,10.8,24.1C68,186,73.7,192.5,80.2,198c6.6,5.5,14,9.8,22.3,13C110.8,214.1,119.7,215.6,129.2,215.6L129.2,215.6z" /></g></g>
                                </svg>
                            </div>
                            <div className='item-new-post'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                                    <g><g><path d="M216.5,246h-177C23.2,246,10,232.8,10,216.5v-177C10,23.2,23.2,10,39.5,10h177c16.3,0,29.5,13.2,29.5,29.5v177C246,232.8,232.8,246,216.5,246z M24.8,209.6v6.9c0,8.1,6.6,14.8,14.8,14.8h118l-74.2-74.1L24.8,209.6z M69,39.5c-16.3,0-29.5,13.2-29.5,29.5S52.7,98.5,69,98.5S98.5,85.3,98.5,69S85.3,39.5,69,39.5z M231.3,157.5L187,113.2l-62.9,62.9l54.4,55.1h38.1c8.1,0,14.8-6.6,14.8-14.8L231.3,157.5L231.3,157.5z M69,83.8c-8.1,0-14.8-6.6-14.8-14.8c0-8.1,6.6-14.8,14.8-14.8S83.8,60.8,83.8,69C83.8,77.1,77.1,83.8,69,83.8z" /></g></g>
                                </svg>
                            </div>
                            <div className='item-new-post'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                                    <g><g><g><path d="M121.3,10.1c-13.6,1.9-22.7,5.2-32.1,11.5C67.4,36.1,55.7,60.4,57.7,86.8c1.3,17.2,7.1,33.7,18.6,52.3c4.9,8.1,7.9,12.3,20.2,28.8c14.9,19.9,20.2,28.2,22.8,35.8c1.7,4.8,4.5,7.1,8.8,7.1c2.6,0,5.6-1.4,6.8-3.2c0.5-0.7,1.6-3.1,2.5-5.2c3.1-7.9,7.7-15,21.8-33.8c16.5-22,22.4-31,28.5-43.8c5.6-11.5,8.5-20.7,10.1-31.5c1-6.6,1-18,0-23.8c-2.5-15.2-9.4-28.6-20.3-39.3c-5.6-5.5-11.3-9.6-18.2-13c-10.1-5-18-6.9-29.4-7.2C126,9.9,122.1,10,121.3,10.1z M135.9,47.8c12.1,2.9,21.5,12.2,24.9,24.5c1.2,4.4,1.1,12.2-0.2,16.8c-4.2,15-17.2,24.9-32.5,24.9c-15.5,0-28.7-10.3-32.7-25.5c-1.2-4.4-1.1-12.1,0.3-16.9C99.2,58.9,109,50,122.7,47.1C125.4,46.6,132.3,47,135.9,47.8z" />
                                        <path d="M79.5,172.7c-2.3,1-10.7,9.6-12.6,12.9c-7.4,12.7-6.4,25.5,2.6,37.3c12.3,16,40.9,25.5,68.4,22.6c21.4-2.2,38.9-10.3,48.6-22.5c5.2-6.6,7.6-13.1,7.5-20.7c0-8.6-3.2-16-9.5-22.7c-6.9-7.2-10.4-8.9-13.8-6.6c-2.2,1.4-3.4,4.1-3,6.3c0.2,1.3,1.3,2.7,5.3,6.6c5.3,5.2,7.3,8.3,8.4,13c2.7,11.6-8.1,24-26.2,30.3c-14.1,4.9-30,5.8-45.1,2.5c-13.5-2.9-25.4-9.4-31.1-17c-3.2-4.3-4.4-7.6-4.4-12.6c0-3.6,0.2-4.3,1.8-7.6c1.5-3.2,2.5-4.4,6.6-8.4c5.3-5.1,6.1-6.5,5.3-9.4C87.2,172.7,83.3,171,79.5,172.7z" /></g></g></g>
                                </svg>
                            </div>
                            <div className='item-new-post'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                                    <g><g><g><path d="M132.3,10.4c-1.2,0.3-14.6,13.4-60,58.7c-32.2,32-59,58.9-59.7,59.8c-2.6,3.3-3.3,8.4-1.7,12.9c1,2.5,2.4,4,24.6,26c66.7,65.9,76.5,75.5,78.9,76.9c2.1,1.2,2.8,1.4,6.1,1.4c3,0,4.2-0.2,5.9-1.1c1.7-0.8,15.5-14.4,60-59.2c32.3-32.5,58.2-58.9,58.7-59.8c1-1.8,1-2.1,1-53.5V20.7l-1.2-2.3c-1.4-3-4.2-5.7-7.2-7.2l-2.3-1.2L184.6,10C151.9,10,133.3,10.1,132.3,10.4z M202.2,40.8c10.9,4.1,16.8,15.3,13.8,26.5C213,78.7,200.6,86,189.3,83c-4.1-1.1-7.2-2.9-10.3-6c-3.5-3.4-5.4-7.2-6.2-12.1c-1.8-10.8,5.3-21.7,16.3-24.8C192.5,39.2,198.6,39.5,202.2,40.8z" /></g></g></g>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" onClick={onClose} style={{color:'black'}}>
                            Cancel
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default PostArticle