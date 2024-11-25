import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Story.css'

const Story = () => {
    return (
        <div className='story-container'style={{
            backgroundImage: `url('https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg')`, // Gán ảnh từ props
            backgroundSize: "cover",                 // Căn chỉnh nền
            backgroundPosition: "center",            // Canh giữa
            backgroundRepeat: "no-repeat"
        }}>
            <div className='avatar-story-dialog'>
                <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
            </div>
            <div className='name-story-dialog'>Liu Yao Wen</div>
        </div>
    );
}
export default Story