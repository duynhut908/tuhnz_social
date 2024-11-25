import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import './Post.css'

const Post = ({ postId }) => {

    console.log(postId)
    const [isLargeScreen, setIsLargeScreen] = useState(true);
    const [openComment, setOpenComment] = useState(postId === undefined ? false : true);
    useEffect(() => {
        if (postId !== undefined) {
            setOpenComment(true)
        }
    }, [postId])
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsLargeScreen(screenWidth > 900); // Kiểm tra kích thước màn hình
        };

        // Lắng nghe sự kiện thay đổi kích thước cửa sổ
        window.addEventListener("resize", handleResize);

        // Gọi hàm lần đầu tiên khi component mount
        handleResize();

        // Cleanup khi component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleOpenComment = () => {
        if (openComment) setOpenComment(false)
        else setOpenComment(true)
    }
    return (
        <div className={`post-container-${postId === undefined ? '' : 'select'}`}>
            <div className='info-user-post'>
                <div className='avatar-user-post'>
                    <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
                </div>
                <div className='info-post'>
                    <div className='name-user-post'>Liu Yao Wen</div>
                    <div className='time-user-post'>Now</div>
                </div>
            </div>
            <div className='info-content-post' style={{ marginLeft: isLargeScreen ? '3rem' : '0' }}>
                <div className='desc-content-post'>Mặc định, CSS tính toán kích thước của các phần tử theo mô hình content-box, khiến padding và border được thêm vào kích thước width và height, dẫn đến kích thước vượt quá dự kiến.</div>
                <div className='list-attach-conten-post'>
                    <div className='img-content-post'>
                        <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
                    </div>
                    <div className='img-content-post'>
                        <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
                    </div>
                    <div className='img-content-post'>
                        <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
                    </div>
                </div>
            </div>

            <hr className="divider-tool" />
            <div className='tool-interact-post'>
                <div className='item-interact-post'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={`${isLargeScreen ? 'liked' : ''}`}>
                        <g><g><g><path d="M171.7,55.5v14.7l-4.7,0.3c-26.5,1.7-49.6,12.4-69.1,32.1c-13,13.1-24.2,30.5-28.8,44.9c-1.5,4.6-2.6,10.5-1.9,10.5c0.1,0,2.8-1.9,6-4.3c34.3-26.1,69.9-38.2,95.3-32.4l3.3,0.8v16.1c0,9.4,0.2,16.1,0.4,16.1c1,0,14.7-10.7,35.8-27.9c18.1-14.8,24.6-20,32.2-25.8c3.2-2.4,5.9-4.7,5.9-4.9s-1.7-1.6-3.8-3c-6.7-4.7-14.2-10.4-26-20.1c-14-11.4-19.5-15.6-26.9-20.9c-5-3.5-16.8-10.9-17.4-10.9C171.8,40.8,171.7,47.4,171.7,55.5z" />
                            <path d="M24.4,58.4C19.1,59.7,14,64,11.5,69.3L10,72.4v64.2v64.1l1.7,3.5c2.1,4.3,5.2,7.3,9.5,9.3l3.1,1.5l101,0.1c91.2,0.1,101.2,0,103.6-0.6c5.4-1.5,9.6-5.5,11.7-11.1c1-2.7,1-3,1.2-32.9c0-16.5,0-30.1-0.1-30.1s-5.1,4.1-11.1,9l-10.8,9v17.5v17.5h-94.1H31.5v-56.8V80h21.4h21.4l15.6-10.9c8.6-6,15.8-11,15.9-11.1C106.1,57.7,26.1,58,24.4,58.4z" /></g></g></g>
                    </svg>
                    <span>1</span>
                </div>
                <div className='item-interact-post' onClick={handleOpenComment}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={`${isLargeScreen ? 'liked' : ''}`}>
                        <g><g><g><path d="M16.4,32.3c-8.5,8.5-8.5,144.6,0,153.2c3.5,3.5,14.5,6,24.5,6c18,0,19,1,20.5,18.5c1,10,4,19,7.5,20c3.5,1.5,16-7,28-18l22-20.5h57.6c37.5,0,59.1-2,63.1-6c8.5-8.5,8.5-144.7,0-153.2C231.1,23.7,24.9,23.7,16.4,32.3z M94.5,112.8c2,10-12.5,17-20,9.5c-7.5-7.5-0.5-22,9.5-20C89,103.3,93.5,107.8,94.5,112.8z M139.5,112.8c2,10-12.5,17-20,9.5c-7.5-7.5-0.5-22,9.5-20C134,103.3,138.5,107.8,139.5,112.8z M184.6,112.8c2,10-12.5,17-20,9.5c-7.5-7.5-0.5-22,9.5-20C179.1,103.3,183.6,107.8,184.6,112.8z" /></g></g></g>
                    </svg>
                    <span>100.8M</span>
                </div>
                <div className='item-interact-post'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={`${isLargeScreen ? 'liked' : ''}`}>
                        <g><g><g><path d="M59.5,28.9c-23.1,4-42,21.6-47.9,44.6c-1.6,6-2.1,16.9-1.2,23.3c1.4,9.6,6,20.5,12,28.2c1.3,1.7,24.6,25.3,51.9,52.5c53.8,53.7,50.5,50.8,55.8,49.8c1.8-0.3,7.7-6,52.6-50.9c44.1-44.2,50.9-51.2,53.7-55.5c6-9.3,9-18.7,9.5-29.8c0.4-8.6-0.4-14.4-2.9-22.1c-4.8-14.5-14.8-26.4-28.5-34c-15.6-8.6-37.1-9.3-53.5-1.6c-7.9,3.7-12.2,7-22.8,17.5L128,61L117.9,51c-5.8-5.7-11.9-11.1-14.1-12.6c-5.6-3.7-12.6-6.9-18.9-8.5C78.1,28.2,66.4,27.7,59.5,28.9z" /></g></g></g>
                    </svg>
                    <span>500M</span>
                </div>
            </div>
            {openComment && <Comments openComment={openComment} setOpenComment={setOpenComment} postId={postId} />}
        </div >
    );
}
export default Post