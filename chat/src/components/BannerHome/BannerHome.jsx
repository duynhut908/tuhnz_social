import React, { useState } from 'react';
import './BannerHome.css'
import PropTypes from 'prop-types';
import PostArticle from '../PostArticle/PostArticle';

const BannerHome = ({ isLargeScreen, setIsLargeScreen }) => {

    const expand = () => {
        setIsLargeScreen(!isLargeScreen)
    }

    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleOpenForm = () => setIsFormOpen(true);
    const handleCloseForm = () => setIsFormOpen(false);
    return (
        <div className='banner-home'>
            <div className='heading-banner-home'>TUHNZ</div>
            <div className='tool-banner-home'>


                {!isLargeScreen && <div className='item-banner-home'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="25" height="25" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                        <g><g><g><path d="M59.3,34.7v24.7h-5.1h-5.1v-9.9v-9.9h-9.5c-5.3,0-10.9,0.2-12.5,0.5c-8.7,1.2-15.4,8-16.7,16.7c-0.3,1.7-0.5,30.8-0.5,67c0,68.4,0,67.6,2.2,72c2.4,4.7,6.7,8.4,11.5,9.9c3,0.9,4.1,0.9,63.3,0.9h60.3v-9.7V187h-59h-59v-49.3V88.4h78.8H187v29.5v29.5h9.7h9.7l-0.1-46.5l-0.1-46.4l-1-2.5c-2-4.8-6.1-8.9-11.3-11c-2.5-1-3.8-1.2-9.9-1.4l-7.1-0.2V24.7V10h-9.7h-9.7v24.7v24.7h-5.1h-5.1v-9.9v-9.9H113H78.7V24.8V10H69h-9.7V34.7z" />
                            <path d="M197.1,182.4v14.8h-14.8h-14.8v9.7v9.7h14.8h14.8v14.8V246h9.7h9.7v-14.8v-14.8h14.8H246v-9.7v-9.7h-14.8h-14.8v-14.8v-14.8h-9.7h-9.7L197.1,182.4L197.1,182.4z" /></g></g></g>
                    </svg>
                </div>}
                <div className='item-banner-home' onClick={handleOpenForm}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="25" height="25" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                        <g><g><g><path d="M83,10.9c-1.6,0.5-4,1.7-5.4,2.7C73.9,16.3,31.4,65.2,29.4,69c-2.9,5.8-2.8,3-2.8,75.4c0,63.3,0,66.2,0.9,68c1,2.2,2.6,3.8,4.5,4.5c0.9,0.4,14.3,0.5,41.8,0.5h40.4v-12.8v-12.8l-31.6-0.1c-31.1-0.1-31.6-0.1-32.9-1.1c-0.7-0.5-1.8-1.6-2.3-2.3c-1-1.3-1-1.6-1.1-54l-0.1-52.7l1-1.6c2.5-3.6,2.2-3.5,17.5-3.8c19.3-0.3,17.8,1.3,18.1-19.8c0.3-17.4,0.3-17.6,4.3-19.7l2.1-1h36.7h36.7l2.1,1c1.2,0.7,2.5,1.8,3.1,2.8c1,1.6,1,2.5,1.1,47.7l0.1,46.1h9.5h9.5l-0.1-59.2L187.7,15l-1.1-1.6c-0.6-0.9-2-2-3-2.5c-1.8-1-3-1-49.8-0.9C87.9,10,85.7,10.1,83,10.9z" />
                            <path d="M67.7,98.3l0.1,8l39.6,0.1l39.6,0.1v-8.1v-8.1h-39.7H67.6L67.7,98.3z" />
                            <path d="M67.6,128.2v7.9h39.7H147v-7.9v-7.9h-39.7H67.6V128.2z" />
                            <path d="M160.8,162v16.9l-17.2,0.1l-17.3,0.1l-0.1,16.3l-0.1,16.3l17.2,0.1l17.3,0.1l0.1,17l0.1,17h16.9h16.9l0.1-17l0.1-17l17.3-0.1l17.2-0.1l-0.1-16.3l-0.1-16.3l-17.2-0.1l-17.3-0.1V162v-16.9h-16.9h-16.9V162z" />
                            <path d="M67.6,158v8.1h39.7H147V158v-8.1h-39.7H67.6V158z" /></g></g></g>
                    </svg>
                </div>
                {isFormOpen && <PostArticle onClose={handleCloseForm} />}
            </div>
        </div>
    );
}

export default BannerHome