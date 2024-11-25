import React, { useContext, useState } from 'react';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import MessDialog from '../MessDialog/MessDialog';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import './MessLeft.css'

const MessLeft = ({ setRoom, room, socket }) => {
    const listmess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    const { currentUser } = useContext(AuthContext)
    const { isLoading, error, data } = useQuery({
        queryKey: ["rooms", currentUser?.username], queryFn: () =>
            makeRequest.get("/rooms/user?username=" + currentUser?.username).then((res) => {
                return res.data;
            })
    })
    
    return (
        <div className='mess-left'>
            <div className='heading-mess-left'>Messages</div>
            <div className="search-mess-acc">
                <input type="text" placeholder="Search..." />
                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="24" height="24" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" fill='white'>
                    <g><g><g><path d="M94.7,10.8c-43.4,6.5-77.8,41.3-84,84.8c-1.4,9.4-0.9,25,1,33.7c9,42.5,43.1,73.8,86.1,79.2c6.3,0.7,19.1,0.6,25.4-0.3c9.7-1.4,19-4.1,27.6-8.1l4.8-2.2l21.7,21.5c23.2,23.2,24.1,23.8,31.1,25.6c4.1,1,11.5,1.1,15.5,0c10.1-2.7,18.7-11.3,21.4-21.4c1-4,1-11.4,0-15.5c-1.8-7-2.4-7.9-25.6-31.1L198,155.6l2.2-4.8c5.9-12.8,8.8-26.1,8.8-40.8c0-16.9-3.2-30.7-10.7-45.5c-14.9-29.3-42.2-49-74.7-53.8C116.9,9.8,101.6,9.8,94.7,10.8z M126.2,26.1c41.4,8.7,70,45.1,68.2,86.8c-0.6,14.8-4.8,28.6-12.5,41.1l-2.4,3.9l25.1,25.2c22.6,22.7,25.2,25.5,26,27.8c4.1,12.4-7.4,23.8-19.8,19.8c-2.3-0.8-5-3.4-27.8-26l-25.2-25.1l-3.9,2.4c-24.8,15.3-56.4,16.7-82.1,3.8c-24-12.1-40.2-33.2-45.9-59.8c-1.6-7.4-1.8-23.6-0.3-31.5c5.7-30.9,27.7-56,57.2-65.7c5.3-1.7,10.7-2.9,17.7-3.9c0.9-0.1,5.8-0.2,10.9-0.1C118.6,24.9,122.3,25.3,126.2,26.1z" />
                        <path d="M103.1,39.6C66.8,43.1,39.6,72.9,39.5,109c-0.1,15,3.7,27.7,12.1,40.1c3.4,5.1,13.1,14.8,18.1,18.2c8.4,5.6,18.2,9.6,27.8,11.3c6,1,17.3,1,23.7,0.1c28.9-4.7,52.8-28.6,57.4-57.4c1-6.4,1-17.7-0.1-23.7C177,88,173,78.1,167.4,69.8c-3.4-5-13-14.7-18.2-18.1c-5.5-3.6-12.1-7-17.8-8.8C123,40.1,111.6,38.8,103.1,39.6z M125,48.7c11.2,2.9,19.7,7.7,28.2,16.2c8.9,8.8,14.1,17.7,17.2,29.4c1.8,6.7,2.2,18.4,1,25.6c-4.5,26.5-25.2,47.2-51.7,51.7c-7.2,1.2-18.9,0.8-25.6-1C74,165.2,57.3,150,50.3,130.7c-4.6-12.9-4.7-29.4-0.1-42.2c7.3-20.3,25-35.9,45.7-40.3C104.7,46.2,116.4,46.4,125,48.7z" /></g></g></g>

                </svg>
            </div>
            <div className='list-mess'>
                {error ? "Error" : isLoading ? "Loading" : data?.map((chat) =>
                    <MessDialog setRoom={setRoom} room={room} roomChat={chat.roomId} key={chat.roomId} />
                )
                }
            </div>
        </div>
    );
}
export default MessLeft