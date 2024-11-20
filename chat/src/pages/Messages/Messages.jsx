import React, { useContext, useEffect, useState } from 'react';
import MessBanner from '../../components/MessBanner/MessBanner';
import MessLeft from '../../components/MessLeft/MessLeft';
import MessRight from '../../components/MessRight/MessRight';
import { AuthContext } from '../../context/authContext';
import './Messages.css'

const Messages = ({ socket }) => {
    const [room, setRoom] = useState(null)
    const [isLargeScreen, setIsLargeScreen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsLargeScreen(screenWidth > 800); // Kiểm tra kích thước màn hình
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

console.log(room)
    return (
        <div>
            {isLargeScreen ?
                <div className="mess_container">
                    <div className='leftmess'>
                        <MessLeft setRoom={setRoom} room={room} socket={socket} />
                    </div>
                    <div className='rightmess'>
                        {room ?
                            <MessRight room={room} socket={socket} /> :
                            <MessBanner />}
                    </div>
                </div> :
                <div className="mess_container">
                    {room ?
                        <div className='rightmess'>
                                <MessRight room={room} socket={socket} />
                        </div> :
                        <div className='leftmess'>
                            <MessLeft setRoom={setRoom} room={room} socket={socket} />
                        </div>
                    }
                </div>

            }
        </div>
    );
}
export default Messages