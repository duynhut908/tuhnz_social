import React from "react";
import "./MenuMore.css";

function MenuMore({ isMenuMoreOpen, toggleMenuMoreForm }) {
    return (
        <div className={`menumore-container`} onClick={toggleMenuMoreForm}>
            <div className={`menumore-form`} onClick={(e) => e.stopPropagation()}>
                <h2>More</h2>
                <div className="menu-more-others">
                    <div className="item-other-in-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                            <g><g><g><path d="M163.5,15c-12.9,1.6-23.6,9.1-29.4,20.7l-1.5,2.9l4.1,4.1c4,4,8.7,10.3,11,14.9c3.2,6.3,5.7,14.6,6.7,22.5c0.9,6.7,0.3,19.4-1.2,26.5c-3,14.2-9.7,28.9-18.6,40.5c-1.7,2.3-3,4.2-2.9,4.2c0.1,0.1,1.9,0.8,4.1,1.7c2.2,0.8,6.5,2.7,9.6,4.2c21.3,10,35.5,21.7,42.2,34.9l1.6,3.2l4.9-0.3c11.9-0.8,24.4-2.9,32.6-5.7c9.3-3.1,15-7.1,17.7-12.6c1.5-3,1.5-3.2,1.5-9.4v-6.3l-1.8-3.7c-2.4-4.9-9-11.6-16.3-16.3c-8.2-5.4-22.1-12.1-31.8-15.3c-5.3-1.8-6.9-3.7-6.9-8.8c0-4.8,0.7-7,3.3-10.1c7.4-8.6,13-20.4,15.8-33.1c1.4-6.4,1.7-18.3,0.7-24.5c-3.3-19.6-15.7-32-34.3-34.3C170,14.5,168.2,14.5,163.5,15z" />
                                <path d="M83.3,43.5c-26.9,4.9-40.8,30.1-33.9,61.8c2.9,13.3,9.3,25.9,18.9,37.1c1.8,2.1,2.5,5.4,2.3,10.3c-0.1,3.2-0.5,4.5-1.7,6.9c-2.4,4.8-3.7,5.9-10.3,8.5c-8.8,3.4-21.3,9.9-28.5,14.6c-4.7,3.2-7.6,5.5-11.1,8.9c-7.6,7.6-9.3,11.7-8.9,20.9c0.2,4.3,0.4,5.5,1.5,7.9c5.7,12.4,26.5,19,66.1,20.7c25.6,1.1,52.7-0.8,68.8-4.9c10.2-2.6,16.3-5.4,21-9.8c4.4-4,6.1-8.4,6.1-15.6c0-7.2-2.1-12.2-7.8-18.1c-9.2-9.7-23.2-17.7-45.2-26c-2.8-1-3.4-1.5-4.7-3.4c-2-3-2.9-6.5-2.9-11c0-5.4,0.9-8.8,2.9-10.8c4.6-4.8,10.1-13.2,13.6-20.8c12.1-25.9,8.8-53.3-8.2-67.6C111.3,44.8,96.5,41,83.3,43.5z" /></g></g></g>
                        </svg>
                        <div className="name-item-other">Group</div>
                    </div>
                    <div className="item-other-in-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                            <g><g><g><path d="M29.6,10.7c-6.7,1.6-13.3,6.8-16.5,12.9c-3.4,6.4-3.2-1.4-3,105.6l0.1,96.3l1.1,3c2.2,6.2,7.4,12,13.2,14.9c5.6,2.8-0.3,2.6,103.6,2.6c105.7,0,98,0.2,104.4-3.1c4.2-2.2,8.3-6.3,10.5-10.5c3.4-6.4,3.2,1.4,3-105.6l-0.1-96.3l-1.1-3c-3-8.3-10.2-14.8-18.6-16.8C221.9,9.7,33.8,9.7,29.6,10.7z M226.7,143.5v80.5H128H29.3v-80.5V63H128h98.7V143.5z" />
                                <path d="M119,75.3c-17,3.6-30.2,17-33.7,34.2c-1.1,5.3-0.7,14.9,0.7,19.9c3,10.7,9.8,19.5,19.5,25.5c2.5,1.6,3.4,2.4,3.3,3c-1.5,6.3-12.1,55.7-11.9,55.8c0.1,0.1,7.1-4.7,15.6-10.7l15.5-10.9l15.7,11.1c8.6,6.1,15.7,11,15.7,10.8c0-0.1-2.5-13.1-5.5-28.9c-3-15.7-5.5-28.7-5.4-28.7c0.1-0.1,1.7-1.2,3.6-2.4c6.6-4.4,12.5-11.3,15.7-18.3c2.8-6.2,3.5-9.5,3.5-17.8c0-8.5-0.6-11.7-3.6-18.2c-5.7-12.4-17.4-21.6-30.8-24.4C132.2,74.4,123.4,74.4,119,75.3z M134.7,87.2c17,3.6,28.1,21.4,23.7,38.2c-4.6,17.8-23.4,28.1-40.6,22.1c-12.3-4.2-20.4-15.1-21.1-28.1c-0.3-6,0.6-10.4,3.5-16c5.2-10.3,15.8-16.8,27.6-16.9C129.8,86.6,132.9,86.9,134.7,87.2z" /></g></g></g>
                        </svg>
                        <div className="name-item-other">Page</div>
                    </div>
                    <div className="item-other-in-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                            <g><g><path d="M240.8,53.8L190.4,13c-2.7-2.1-5.9-3.1-9.2-2.9H29.3C18.6,10,10,18.7,10,29.3v197.4c0,10.6,8.6,19.3,19.3,19.3h197.4c10.6,0,19.3-8.6,19.3-19.3c0,0,0-162,0-162.1C246,60.2,244,56.3,240.8,53.8z M191.7,211.8H46v-53.1c0-10.6,8.6-19.3,19.3-19.3h107.2c10.6,0,19.3,8.6,19.3,19.3V211.8L191.7,211.8z M191.7,82.8c0,10.6-8.6,19.3-19.3,19.3H65.3c-10.6,0-19.3-8.6-19.3-19.3V29.7h145.7V82.8L191.7,82.8z" /></g></g>
                        </svg>
                        <div className="name-item-other">Storage</div>
                    </div>
                    <div className="item-other-in-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                            <g><g><path d="M222.4,128c0-13,10.6-23.6,23.6-23.6V57.2c0-13-10.6-23.6-23.6-23.6H33.6c-13,0-23.5,10.6-23.5,23.6v47.2c13,0,23.5,10.6,23.5,23.6c0,13-10.5,23.6-23.6,23.6v47.2c0,13,10.6,23.6,23.6,23.6h188.8c13,0,23.6-10.6,23.6-23.6v-47.2C233,151.6,222.4,141,222.4,128z M170.2,184.6L128,157.5l-42.2,27.1L98.5,136l-38.8-31.7l50-3L128,54.9l18.2,46.6l50,2.9l-38.8,31.7L170.2,184.6z" /></g></g>
                        </svg>
                        <div className="name-item-other">Event</div>
                    </div>
                    <div className="item-other-in-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                            <g><g><g><path d="M62.2,21.8C60.9,23,48.6,34.1,34.9,46.6L10,69.2l0.3,3.3c2,17.7,12,30.3,27.3,34.5c5.1,1.4,18.5,1.4,23.5,0c7.5-2,14.1-6.3,18.4-11.7c4.1-5.3,8.6-16.3,8.6-21.1c0-2.6,1-1,1.6,2.8c1.3,7.7,5.3,15.7,10.4,20.8c7.5,7.6,18,11.1,30.8,10.4c15-0.9,25.2-7.2,31.5-19.8c2-4,4.3-11.6,4.3-14.1c0-2.7,0.9-1.1,1.6,2.6c1.3,7.6,5.3,15.8,10.4,20.9c7.4,7.5,18,11.1,30.8,10.3c9-0.6,15.7-2.9,22-7.6c7.2-5.5,12.9-16.8,14.2-28.1l0.3-3.3l-24.9-22.6c-13.7-12.5-26-23.6-27.3-24.8l-2.4-2.1H128H64.6L62.2,21.8z" />
                                <path d="M85.6,108.9c-9.4,8.8-21.3,13-36.7,13h-7.4v39v39h30.9h30.9V169v-30.9H128h24.7V169v30.9h30.9h30.9v-39v-39h-7.4c-15.2,0-26.8-4-36.3-12.6l-3.5-3.2l-3,2.8c-9.7,8.8-21.4,13.1-36.3,13.1c-14.5,0-26.5-4.2-35.8-12.6c-1.9-1.7-3.5-3.1-3.6-3.1C88.5,106.2,87.1,107.3,85.6,108.9z" />
                                <path d="M18.6,202.8l-8.5,8.5v12.5v12.5H128h117.9v-12.5v-12.5l-8.6-8.6c-4.7-4.7-8.8-8.5-9-8.5s-0.4,4.3-0.4,9.5v9.5H128H28.1v-9.5c0-5.3-0.2-9.5-0.4-9.5C27.4,194.2,23.4,198.1,18.6,202.8z" /></g></g></g>
                        </svg>
                        <div className="name-item-other">Market</div>
                    </div>
                    <div className="item-other-in-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                            <g><g><path d="M212.9,40.9c-1.6-5.9-6.1-8.5-12.1-7.6c-6.6,1-9.7,5.2-9.1,11.8c0.2,3,0.8,5.7-2.5,7.7c-11,6.6-21.9,13.4-32.8,20.1c-4.7-5.9-9.3-12-14.2-17.7c-3.9-4.6-7.7-8.5-3.6-15.3c2.5-4.1-0.2-8.4-3.8-11.2c-3.7-2.9-7.8-3.3-12-0.7c-4.1,2.5-7,7-5,10.8c4.8,8.8-1.4,13.2-5.7,18.7c-3.9,4.9-7.8,9.8-11.7,14.7l0,0l0,0C87.2,67.9,77.5,58,65.8,51.5c-2.7-1.5-1.6-3.9-1.4-6.1c0.4-7.1-3.1-11.5-10-12.3c-6-0.7-10.4,2.4-11.4,8.5c-1.2,6.9,1.7,11.9,8.8,13c4.5,0.7,5.9,3,7,6.9c3.6,12.7,7.7,25.2,11.1,37.9c1.2,4.5,2.7,6.7,7.8,6.6c16.2-0.4,32.4-0.4,48.5-0.6c17.8,0.2,35.6,0.1,53.3,0.7c5.3,0.2,6.8-2.5,7.9-6.6c3.4-12.4,6.9-24.7,10.5-37c1.1-3.7,2-7.1,7.1-8.1C211.7,52.9,214.7,47.7,212.9,40.9L212.9,40.9z" />
                            <path d="M52.4,185.7l-19.3-54H10v5.4l37,92.5h11.6l38.2-91.8v-6.2H72.9L52.4,185.7z" />
                            <path d="M142.3,154.1h10v-22.4h-44.3v22.4h11.2v53.2h-11.2v22.4h46.3v-22l-11.9-0.8V154.1L142.3,154.1z" />
                            <path d="M222.5,131.7H175v97.9h22v-24.3l23.5-1.2c0,0,25.5-4.2,25.5-36.6S222.5,131.7,222.5,131.7L222.5,131.7z M216.3,180.7h-18.1v-26.2h17c0,0,8.9,3.5,8.9,13.1C224,177.3,216.3,180.7,216.3,180.7L216.3,180.7z" /></g></g>
                        </svg>
                        <div className="name-item-other">Premium</div>
                    </div>
                    <div className="item-other-in-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                            <g><g><g><path d="M123.2,10.2c-2.8,0.5-6.6,2.6-8.4,4.6c-2.6,2.9-3.4,5.8-5.3,16.6c-0.9,5.6-1.7,10.2-1.8,10.3c0,0-2.6,0.8-5.6,1.8c-6.8,2.1-12.7,4.7-17.6,7.5L81,53.1L72.4,47c-9.5-6.8-11.5-7.7-16.4-7.3c-4,0.3-6.8,1.8-10.7,5.6c-3.9,3.9-5.3,6.7-5.6,10.7C39.2,61,40.2,63,47,72.5L53,81l-2.1,3.6c-2.8,4.9-5.4,10.8-7.5,17.6c-0.9,3-1.7,5.6-1.8,5.6c0,0-4.7,0.8-10.3,1.8c-14.2,2.3-17.1,3.9-20.2,10.5c-1.1,2.3-1.2,3.2-1.2,7.9c0,4.7,0.1,5.6,1.2,7.9c3.1,6.6,6.1,8.1,20.2,10.5c9.7,1.6,10.9,2,10.9,3.4c0,1.3,3,9.9,4.9,14.3c1.1,2.5,2.8,6,3.9,7.8l1.9,3.2l-6,8.3c-6.8,9.5-7.8,11.7-7.4,16.4c0.3,4.2,1.7,7,5.6,10.9c3.9,3.9,6.7,5.3,10.7,5.6c4.9,0.4,6.9-0.5,16.4-7.3l8.5-6.1l4.6,2.6c5.2,2.9,12,5.7,18,7.4c2.3,0.7,4.2,1.3,4.3,1.3c0.1,0.1,0.9,4.7,1.8,10.3c2.3,14.1,3.7,16.9,9.9,19.9c2.9,1.4,3.3,1.5,8.5,1.5s5.5-0.1,8.5-1.5c6.2-3,7.6-5.8,9.9-19.9c0.9-5.6,1.7-10.2,1.8-10.3c0,0,2-0.7,4.3-1.3c6.1-1.8,12.8-4.6,18-7.4l4.6-2.6l8.5,6.1c9.5,6.8,11.5,7.7,16.4,7.3c4-0.3,6.8-1.8,10.7-5.7c3.9-3.9,5.4-6.7,5.7-10.7c0.4-4.9-0.5-6.9-7.3-16.4l-6.1-8.5l2.6-4.6c2.9-5.2,5.7-12,7.4-18c0.7-2.3,1.3-4.2,1.3-4.3c0.1-0.1,4.7-0.9,10.3-1.8c14.2-2.3,17.1-3.9,20.2-10.5c1-2.3,1.2-3.2,1.2-7.9c0-5.2-0.1-5.5-1.5-8.5c-3-6.2-5.8-7.6-19.9-9.9c-5.6-0.9-10.2-1.7-10.3-1.8c0,0-0.7-2-1.3-4.3c-1.8-6.1-4.6-12.8-7.4-18l-2.6-4.6l6-8.5c6.8-9.5,7.7-11.5,7.3-16.4c-0.3-4.1-1.8-6.8-5.6-10.7c-4-4-6.7-5.4-10.9-5.6c-4.7-0.4-7,0.7-16.4,7.4l-8.3,6l-3.2-1.9c-1.8-1.1-5.3-2.8-7.8-3.9c-4.4-2-13-4.9-14.3-4.9c-1.4,0-1.8-1.3-3.4-10.9c-2.3-14.1-3.9-17.2-10.2-20.1C133.4,10.1,127,9.5,123.2,10.2z M135.5,84.5c18.5,3.2,32.8,17.6,36,36c4.2,23.9-12,46.8-36,51c-15.8,2.8-31.9-3.4-42-15.9c-10.2-12.8-12.5-30-6.1-45.2c4.8-11.3,15.1-20.7,27-24.5C120.8,83.9,128.7,83.3,135.5,84.5z" /></g></g></g>
                        </svg>
                        <div className="name-item-other">Setting</div>
                    </div>
                    <div className="item-other-in-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                            <g><g><g><path d="M74.6,229.6c-20.3,0-36.2-5.7-47.6-17.1C15.7,201.1,10,185.2,10,164.9V91.1c0-20.3,5.7-36.2,17.1-47.6s27.2-17.1,47.6-17.1h73.9c2.6,0,4.8,0.9,6.6,2.7c1.8,1.8,2.7,4,2.7,6.6v18.5c0,2.6-0.9,4.8-2.7,6.6c-1.8,1.8-4,2.7-6.6,2.7H65.4c-5.1,0-9.4,1.8-13,5.4c-3.6,3.6-5.4,8-5.4,13v92.3c0,5.1,1.8,9.4,5.4,13c3.6,3.6,8,5.4,13,5.4h83.1c2.6,0,4.8,0.9,6.6,2.7c1.8,1.8,2.7,4,2.7,6.5v18.5c0,2.6-0.9,4.8-2.7,6.5c-1.8,1.8-4,2.7-6.6,2.7L74.6,229.6L74.6,229.6z M183.2,186.5c-1.3,1.2-2.6,1.9-3.9,1.9c-2.1,0-3.1-1.7-3.1-5v-27.7H130c-2.6,0-4.8-0.9-6.5-2.7s-2.7-4-2.7-6.6v-36.9c0-2.6,0.9-4.8,2.7-6.5s4-2.7,6.5-2.7h46.2V72.6c0-3.3,1-5,3.1-5c1.2,0,2.5,0.6,3.9,1.9l59.8,52.4c2,1.6,3,3.6,3,6.1s-1,4.5-3,6.1L183.2,186.5z" /></g></g></g>
                        </svg>
                        <div className="name-item-other">Log Out</div>
                    </div>
                </div>
                {/* <input type="text" placeholder="Search something..." /> */}
            </div>
        </div>
    );
}

export default MenuMore;