import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Comments.css'

const Comments = ({ postId }) => {
    const items = ["Hảo Khựa Ai", "Chân Khửa Ái", "Sì tú pịch boi", "Tẩy chay XMJ", "Hao Soai"];
    const [showAll, setShowAll] = useState(false);
    const displayedItems = (postId !== undefined) ? items : items.slice(-4);
    const navigate = useNavigate()
    const toggleDetailPost = () => {
        navigate('/post/' + postId)
    }
    return (
        <div className='comments-container'>
            <div className='up-comment'>
                <div className='input-up-comment'>
                    <input type="text" placeholder="Nhập tin nhắn đi mà..." />
                </div>
                <div className='tool-up-comment'>
                    <div className='tool-attach-comment'>
                        <div className='item-attach-comment'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                                <g><g><path d="M128.1,10.1c16.2,0,31.5,3.1,45.9,9.3c14.4,6.2,26.9,14.6,37.5,25.2c10.6,10.6,19,23.1,25.2,37.5c6.2,14.4,9.3,29.7,9.3,45.9c0,16.4-3.1,31.7-9.3,46c-6.2,14.3-14.6,26.8-25.2,37.5c-10.6,10.7-23.1,19.1-37.5,25.2s-29.7,9.2-45.9,9.2c-16.4,0-31.7-3.1-46-9.2c-14.3-6.1-26.8-14.5-37.5-25.2C34,200.8,25.5,188.3,19.3,174c-6.2-14.3-9.3-29.6-9.3-46c0-16.2,3.1-31.5,9.3-45.9C25.5,67.8,34,55.3,44.7,44.6c10.7-10.6,23.2-19,37.5-25.2C96.5,13.2,111.8,10.1,128.1,10.1L128.1,10.1z M170.7,68.7c-5.2,0-9.6,2.2-13.2,6.5c-3.6,4.3-5.4,9.5-5.4,15.7c0,6.3,1.8,11.6,5.4,15.9c3.6,4.3,8,6.5,13.2,6.5c5.2,0,9.6-2.2,13.2-6.5c3.6-4.3,5.4-9.6,5.4-15.9c0-6.1-1.8-11.3-5.4-15.7C180.4,70.8,176,68.7,170.7,68.7L170.7,68.7z M83.4,69.2c-5,0-9.3,2.2-12.8,6.5c-3.5,4.3-5.3,9.5-5.3,15.7c0,6.3,1.8,11.6,5.3,15.8c3.5,4.2,7.8,6.3,12.8,6.3s9.3-2.1,13-6.3c3.6-4.2,5.4-9.5,5.4-15.8c0-6.1-1.8-11.3-5.4-15.7C92.7,71.3,88.4,69.2,83.4,69.2L83.4,69.2z M129.2,215.6c9.5,0,18.6-1.7,27.1-5.1c8.5-3.4,16.2-8.1,23.1-14c6.8-5.9,12.6-12.9,17.4-20.8c4.8-7.9,8.1-16.4,10.1-25.4V149c0-1.4-0.5-2.7-1.6-3.9c-1.1-1.2-2.4-1.8-4-1.8H56.9c-1.6,0-3.1,0.6-4.5,1.8c-1.3,1.2-1.9,2.5-1.5,3.9c0.4,1.8,0.6,3.1,0.8,3.8c0.2,0.7,0.4,1.3,0.5,1.6c2.3,8.6,5.9,16.7,10.8,24.1C68,186,73.7,192.5,80.2,198c6.6,5.5,14,9.8,22.3,13C110.8,214.1,119.7,215.6,129.2,215.6L129.2,215.6z" /></g></g>
                            </svg>
                        </div>
                        <div className='item-attach-comment'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                                <g><g><path d="M216.5,246h-177C23.2,246,10,232.8,10,216.5v-177C10,23.2,23.2,10,39.5,10h177c16.3,0,29.5,13.2,29.5,29.5v177C246,232.8,232.8,246,216.5,246z M24.8,209.6v6.9c0,8.1,6.6,14.8,14.8,14.8h118l-74.2-74.1L24.8,209.6z M69,39.5c-16.3,0-29.5,13.2-29.5,29.5S52.7,98.5,69,98.5S98.5,85.3,98.5,69S85.3,39.5,69,39.5z M231.3,157.5L187,113.2l-62.9,62.9l54.4,55.1h38.1c8.1,0,14.8-6.6,14.8-14.8L231.3,157.5L231.3,157.5z M69,83.8c-8.1,0-14.8-6.6-14.8-14.8c0-8.1,6.6-14.8,14.8-14.8S83.8,60.8,83.8,69C83.8,77.1,77.1,83.8,69,83.8z" /></g></g>
                            </svg>
                        </div>
                        <div className='item-attach-comment'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                                <g><g><g><path d="M36.8,10.7c-13,2.6-23.5,13.2-26,26.4c-1,5.1-1,176.6,0,181.8c2.6,13.3,13.1,23.8,26.4,26.3c5.1,1,176.6,1,181.8,0c13.3-2.6,23.8-13.1,26.3-26.4c1-5.1,1-176.6,0-181.7c-2.6-13.4-13-23.9-26.3-26.4C214,9.8,41.5,9.8,36.8,10.7z M220.2,26.5c4.1,1.9,7.4,5.2,9.3,9.3l1.5,3.1V128v89.1l-1.5,3.1c-1.9,4.1-5.2,7.4-9.3,9.3l-3.1,1.5H128H38.9l-3.1-1.5c-4.1-1.9-7.4-5.2-9.3-9.3l-1.5-3.1V128V38.8l1.5-3.1c2.4-5.1,7.4-9.3,12.4-10.5c1-0.2,39.7-0.4,90-0.4l88.2,0.1L220.2,26.5z" />
                                    <path d="M57.2,82.7l0.1,7.3l6.7,0.1l6.8,0.1L69,93.8c-2.4,4.6-2.9,7.9-2.3,12.2c1.3,9,8.2,15.9,17.2,17.4c6.1,1,12.9-1.2,17.3-5.7c4.3-4.3,6-8.6,6-14.5c0-4.2-0.8-7.3-2.8-10.4c-0.7-1.2-1.4-2.3-1.4-2.4c0-0.1,3-0.3,6.8-0.3l6.8-0.1l0.1-7.3l0.1-7.2H87H57L57.2,82.7z" />
                                    <path d="M139.1,82.7l0.1,7.3l7.5,0.1l7.5,0.1l-1.4,1.9c-3.6,5-4.3,13.5-1.5,19.4c3.9,8.4,13.1,13.4,21.8,11.9c8.8-1.6,15.4-8.1,17-16.9c0.9-4.7-0.3-10.5-3-14.3l-1.2-1.8l6.3-0.2l6.4-0.2l0.1-7.3l0.1-7.2h-30h-30L139.1,82.7z" />
                                    <path d="M83.8,148.2v7.4h9h9v9.1c0,6.5,0.2,9.9,0.7,11.7c2.5,9.3,10.3,16.9,19.6,19.1c5.8,1.4,13.2,0.4,18.5-2.4c3.5-1.8,9.1-7.6,10.9-11.1c2.4-4.9,2.9-7.3,3.1-17.3l0.3-9.1h8.7h8.7v-7.4v-7.4H128H83.8V148.2z M139.7,164.1c0,9.2-0.2,10.2-2.9,13.3c-5.4,6.1-15.3,4.8-19-2.4c-1.3-2.5-1.3-2.7-1.3-11v-8.4l11.7,0.1l11.6,0.1L139.7,164.1z" /></g></g></g>
                            </svg>
                        </div>
                    </div>
                    <div className='post-comment'>
                        <select id="dropdown">
                            <option value="" disabled>Public</option>
                            <option value="option1">Public</option>
                            <option value="option2">Private</option>
                            <option value="option3">Friend</option>
                        </select>
                        <div className='item-post-comment'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                                <g><g><g><path d="M13.4,17.4c-1.5,0.8-3,1.9-3.3,2.4c-0.4,0.7,4.7,15.6,17,49.2c9.7,26.5,17.7,48.4,17.9,48.6c0.1,0.1,39.9,2.5,88.4,5.2c48.5,2.7,88.2,5,88.2,5.2s-39.7,2.5-88.2,5.2c-48.5,2.7-88.3,5-88.4,5.2c-0.1,0.1-8.2,22-17.9,48.6c-12.3,33.6-17.4,48.6-17,49.2c0.3,0.5,1.8,1.6,3.3,2.4c2.4,1.3,3.5,1.4,7.8,1.3c4.7-0.3,5.8-0.6,17.9-5.8c76.9-33.1,142.4-63.8,174.2-81.6c19.8-11,32.7-20.7,32.7-24.5c0-2.3-6.2-8.1-14.5-13.5C204.7,96.7,135.8,63.7,39.1,22c-12.1-5.2-13.2-5.5-17.9-5.8C16.8,16,15.7,16.2,13.4,17.4z" /></g></g></g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='list-comments'>
                {displayedItems.map((item, index) => (
                    <div className='a-comment'>
                        <div className='avatar-user-comment'>
                            <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
                        </div>
                        <div className='detail-comment'>
                            <div className='content-comment'>
                                <a href={`/profile/tuhnz}`} className="comment-name-link">
                                    <strong>Liu Yao Wen</strong>
                                </a>
                                <span>: {item}</span>
                            </div>
                            <div className='interact-time-comment'>
                                <div className='time-comment'>2024-11-20</div>
                                <div className='interact-comment'>
                                    <div className='item-interact-comment'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="15" height="15" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                                            <g><g><g><path d="M59.5,28.9c-23.1,4-42,21.6-47.9,44.6c-1.6,6-2.1,16.9-1.2,23.3c1.4,9.6,6,20.5,12,28.2c1.3,1.7,24.6,25.3,51.9,52.5c53.8,53.7,50.5,50.8,55.8,49.8c1.8-0.3,7.7-6,52.6-50.9c44.1-44.2,50.9-51.2,53.7-55.5c6-9.3,9-18.7,9.5-29.8c0.4-8.6-0.4-14.4-2.9-22.1c-4.8-14.5-14.8-26.4-28.5-34c-15.6-8.6-37.1-9.3-53.5-1.6c-7.9,3.7-12.2,7-22.8,17.5L128,61L117.9,51c-5.8-5.7-11.9-11.1-14.1-12.6c-5.6-3.7-12.6-6.9-18.9-8.5C78.1,28.2,66.4,27.7,59.5,28.9z" /></g></g></g>
                                        </svg>
                                        <span>500</span>
                                    </div>
                                    <div className='item-interact-comment'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="15" height="15" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                                            <g><g><g><path d="M16.4,32.3c-8.5,8.5-8.5,144.6,0,153.2c3.5,3.5,14.5,6,24.5,6c18,0,19,1,20.5,18.5c1,10,4,19,7.5,20c3.5,1.5,16-7,28-18l22-20.5h57.6c37.5,0,59.1-2,63.1-6c8.5-8.5,8.5-144.7,0-153.2C231.1,23.7,24.9,23.7,16.4,32.3z M94.5,112.8c2,10-12.5,17-20,9.5c-7.5-7.5-0.5-22,9.5-20C89,103.3,93.5,107.8,94.5,112.8z M139.5,112.8c2,10-12.5,17-20,9.5c-7.5-7.5-0.5-22,9.5-20C134,103.3,138.5,107.8,139.5,112.8z M184.6,112.8c2,10-12.5,17-20,9.5c-7.5-7.5-0.5-22,9.5-20C179.1,103.3,183.6,107.8,184.6,112.8z" /></g></g></g>
                                        </svg>
                                        <span>500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {items.length > 4 && !(postId !== undefined) && (
                    <button onClick={toggleDetailPost}>Xem thêm</button>
                )}
            </div>
        </div>
    );
}
export default Comments