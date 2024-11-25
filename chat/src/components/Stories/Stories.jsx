import React, { useState } from 'react';
import Story from './Story';
import './Stories.css'

const Stories = () => {


    return (
        <div className='stories-container'>
            <div className='list-stories'>
            <Story /><Story /><Story /><Story /><Story /><Story /><Story /><Story />
            </div>
        </div>
    );
}
export default Stories