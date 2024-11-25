import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import './MessDialog.css'

const MessDialog = ({ setRoom, room, roomChat }) => {

    const { currentUser } = useContext(AuthContext)
    const handleSetRoom = () => {
        setRoom(roomChat)
    }
    

    const { isLoading, error, data } = useQuery({
        queryKey: ["dialog", roomChat], queryFn: () =>
            makeRequest.get("/messages/" + roomChat).then((res) => {
                return res.data;
            })
    })
    const lastMess = data ? data[data.length - 1] : null;
    const lastSent = data ? (lastMess?.username === currentUser?.username) ? "Bạn" : lastMess?.name : null;


    const { isLoading: il, error: e, data: member } = useQuery({
        queryKey: ["memberChat", roomChat], queryFn: () =>
            makeRequest.get("/rooms/members?roomId=" + roomChat).then((res) => {
                return res.data;
            })
    })

    const filteredMembers = member ? member.filter(m => m.username !== currentUser?.username) : [];

    const { isLoading: ir, error: er, data: inforoom } = useQuery({
        queryKey: ["infoRoom", roomChat], queryFn: () =>
            makeRequest.get("/rooms/info?id=" + roomChat).then((res) => {
                return res.data;
            })
    })



    return (

        <Link className={`link-mess-dialog`} onClick={() => handleSetRoom()}>
            <div className={`mess-dialog${room === roomChat ? '-active' : ''}`}>
                <div className='avatar-mess-dialog'>
                    <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
                </div>
                <div className='content-mess-dialog'>
                    <div className='name'>{filteredMembers.map(m => m.name).join(', ')}</div>
                    <div className='lastmess'>{lastSent}{lastMess?.content ? `: ${lastMess.content}` : ''}</div>
                </div>
            </div>

        </Link>
    );
}
export default MessDialog