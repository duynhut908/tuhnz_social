import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';
import Message from '../Message/Message';
import './MessRight.css'

const MessRight = ({ room, socket }) => {
    const { currentUser } = useContext(AuthContext)
    const listMessRef = useRef(null);
    const lastMessageRef = useRef(null);
    const inputRef = useRef(null);

    const [messages, setMessages] = useState([]);
    const [newMess, setNewMess] = useState('');

    const { isLoading, error, data: messagesOfRoom } = useQuery({
        queryKey: ["dialog", room], queryFn: () =>
            makeRequest.get("/messages/" + room).then((res) => {
                return res.data;
            })
    })

    const { isLoading: il, error: e, data: member } = useQuery({
        queryKey: ["memberChat", room], queryFn: () =>
            makeRequest.get("/rooms/members?roomId=" + room).then((res) => {
                return res.data;
            })
    })

    const filteredMembers = member ? member.filter(m => m.username !== currentUser?.username) : [];

    useEffect(() => {
        if (!socket) return;

        setMessages([]);
        if (messagesOfRoom) {
            messagesOfRoom.map((message, index) => {
                const isLastMessageByUser =
                    index === messagesOfRoom.length - 1 || // Nếu là tin nhắn cuối cùng trong chuỗi
                    message.username !== messagesOfRoom[index + 1]?.username; // Hoặc tin nhắn tiếp theo thuộc về người khác

                const msg = {
                    username: message.username,
                    content: message.content.trim(),
                    last: isLastMessageByUser ? 'last' : 'none', // Gắn nhãn "last" nếu là tin nhắn cuối của người đó
                };
                setMessages((prevMessages) => [...prevMessages, msg]);
            })
        }

        
        socket.on('receiveMessage', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('receive_message');
        };
    }, [room, socket])

    useEffect(() => {
        if (listMessRef.current) {
            // Lấy màu nền của phần tử cha
            const parentBgColor = window.getComputedStyle(listMessRef.current).backgroundColor;

            // Áp dụng màu nền cho thanh cuộn, đặt giá trị nền của thanh cuộn là transparent
            listMessRef.current.style.setProperty('--scrollbar-track-bg', parentBgColor);
        }
    }, []);

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);


    const handleChange = (e) => {
        setNewMess(e.target.value)
    }

    const onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            handleSendMess()
        }
    }

    const queryClient = useQueryClient()
    const mutationSendMess = useMutation({
        mutationFn: (newMess) => makeRequest.post(`/messages/${room}`, newMess),
        onSuccess: () => {
            // Làm mới dữ liệu sau khi mutation thành công
            queryClient.invalidateQueries({ queryKey: ['dialog', room] });
        },
        onError: (error) => {
            console.error('Failed to send message:', error);
        },
    })

    const handleSendMess = () => {
        if (newMess !== null && newMess.trim() !== '') {
            const msg = {
                username: currentUser?.username,
                content: newMess.trim(),
                last: 'none'
            }
            socket?.emit('sendMessage', { message: msg, member: filteredMembers});
            setMessages((prevMessages) => [...prevMessages, msg]);
            mutationSendMess.mutate(msg);
            setNewMess('')
        } else {
            setNewMess('')
        }
        inputRef.current.focus();
    }
    
    return (
        <div className='mess-right'>
            <div className='heading-mess'>
                <div className='heading-mess-avatar'>
                    <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
                </div>
                <div className='heading-mess-name'>
                    Liu Yao Wen
                </div>
                <div className='heading-mess-more'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="22" height="22" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                        <g><g><g><path d="M52.7,10.4c-4.3,1.2-6,2.8-22.7,20.5c-9,9.6-16.7,18-17.3,18.8c-1.9,2.8-2.7,5.9-2.7,9.7c0,3.1,0.4,4.7,2,9.7c17.1,51.2,50,101.1,90,136c17,14.9,37.4,29.4,55.1,38.9l4,2.1h30h30l10.4-11.1c11.8-12.7,12.1-13.1,13.4-16.5c2-5.4,1.5-11.9-1.3-16.6c-0.6-1.2-7.4-8.7-15-16.8c-15-16-16.2-17-21.6-18c-2.7-0.5-3.6-0.5-6.2,0.2c-1.7,0.5-4.1,1.4-5.3,2.2c-1.2,0.8-5.4,4.9-9.5,9.2c-4,4.3-8.3,8.5-9.4,9.3c-4.9,3.2-11,3.6-16.4,0.9c-2.8-1.4-5.2-3.8-41.5-42.7c-41.9-44.7-40.8-43.4-41.8-49.8c-0.6-3.8,0-7.3,1.8-11.2c1-2.1,3.2-4.8,9-11c4.2-4.5,8.2-9.1,8.8-10.2c2.8-4.7,3.2-11.2,1.2-16.5C96.2,44.1,95.6,43.4,85,32C69,14.8,67.1,13,63.9,11.5C60.4,9.9,56,9.4,52.7,10.4z" /></g></g></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="22" height="22" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                        <g><g><g><path d="M21.1,54.6c-4.2,1.1-7.9,4.2-9.9,8.3L10,65.5v62.7V191l1.2,2.3c1.4,3,4.2,5.7,7.1,7.2l2.3,1.2h77.7H176l2.3-1.2c3-1.4,5.7-4.2,7.1-7.2l1.2-2.3l0.1-18.9l0.1-18.9l24.1,24c21.2,21.2,24.3,24.1,25.8,24.4c3.7,0.7,7.2-1.1,8.5-4.2c1-2.2,1-136.4,0-138.6c-1.3-3.2-4.8-4.9-8.4-4.2c-1.6,0.3-4.7,3.2-25.8,24.4l-24.1,24l-0.1-18.9L186.7,65l-1.1-2.3c-1.5-2.9-4.2-5.7-7.2-7.1l-2.3-1.2l-76.8-0.1C57,54.3,21.9,54.4,21.1,54.6z" /></g></g></g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="22" height="22" viewBox="0 0 256 256" enableBackground="new 0 0 256 256">
                        <g><g><g><path d="M213.6,98.8c-10.9,1-20.9,8.9-24.6,19.4c-5.4,15.6,3,32.8,18.4,37.9c2.9,1,4.3,1.1,9.6,1.1c5.6,0,6.6-0.1,9.6-1.2c8.5-3.1,15.2-9.9,18.3-18.4c0.9-2.6,1.1-3.9,1.1-9.5c0-5.6-0.1-6.9-1.1-9.5C240.2,105.4,227.8,97.6,213.6,98.8z" />
                            <path d="M31.8,99.5c-10.4,2.9-18.4,11.1-21.1,21.5c-1.2,4.6-0.8,12.5,0.8,17.1c3,8.4,10.1,15.3,18.4,18.1c2.9,1,4.3,1.1,9.6,1.1c5.4,0,6.7-0.2,9.2-1.1c8.6-3.1,15.3-9.8,18.4-18.2c1.1-3,1.2-4,1.2-9.6c0-5.4-0.1-6.8-1.1-9.6c-2.7-8.3-9.7-15.4-18.1-18.4c-3-1.1-4.3-1.2-9.2-1.4C36,98.8,33.5,99,31.8,99.5z" />
                            <path d="M120.2,99.7c-10.4,3-18.1,11-20.8,21.3c-1.2,4.6-0.8,12.5,0.8,17.1c3,8.4,10.1,15.3,18.4,18.1c2.9,0.9,4.3,1.1,9.4,1.1s6.5-0.2,9.4-1.1c8.5-2.8,15.9-10.1,18.6-18.6c0.9-2.9,1.1-4.3,1.1-9.4c0-5.1-0.2-6.5-1.1-9.4c-2.7-8.3-9.7-15.4-18.1-18.4C133.5,98.7,124.6,98.3,120.2,99.7z" /></g></g></g>
                    </svg>
                </div>
            </div>
            <div className='list-mess-ab' ref={listMessRef}>
                {messages?.map((message, index) =>
                    <div>
                        <Message mess={message} key={index} />
                        {index === messages.length - 1 && (
                            <div ref={lastMessageRef}></div>
                        )}
                    </div>
                )
                }
            </div>
            <div className='list-tool-mess'>
                <div className='message-tool'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className='message-tool-item'>
                        <g> <path d="M122.9,219.8l68.4-62.1c5.4-4.9,13.7-4.5,18.5,0.9c4.9,5.4,4.5,13.7-0.9,18.5l-72.1,65.6 c-2.4,2.2-5.6,3.4-8.8,3.4H23.1c-7.2,0-13.1-5.9-13.1-13.1l0,0V23.1C10,15.9,15.9,10,23.1,10l0,0h209.8c7.2,0,13.1,5.9,13.1,13.1 l0,0V128c0,7.2-5.9,13.1-13.1,13.1l0,0h-91.8v32.8c0,7.2-5.9,13.1-13.1,13.1c-7.2,0-13.1-5.9-13.1-13.1l0,0V128 c0-7.2,5.9-13.1,13.1-13.1h91.8V36.2H36.2v183.6H122.9L122.9,219.8z" /></g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className='message-tool-item'>
                        <g><g><path d="M216.5,246h-177C23.2,246,10,232.8,10,216.5v-177C10,23.2,23.2,10,39.5,10h177c16.3,0,29.5,13.2,29.5,29.5v177C246,232.8,232.8,246,216.5,246z M24.8,209.6v6.9c0,8.1,6.6,14.8,14.8,14.8h118l-74.2-74.1L24.8,209.6z M69,39.5c-16.3,0-29.5,13.2-29.5,29.5S52.7,98.5,69,98.5S98.5,85.3,98.5,69S85.3,39.5,69,39.5z M231.3,157.5L187,113.2l-62.9,62.9l54.4,55.1h38.1c8.1,0,14.8-6.6,14.8-14.8L231.3,157.5L231.3,157.5z M69,83.8c-8.1,0-14.8-6.6-14.8-14.8c0-8.1,6.6-14.8,14.8-14.8S83.8,60.8,83.8,69C83.8,77.1,77.1,83.8,69,83.8z" /></g></g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className='message-tool-item'>
                        <g><g><g><path d="M10,22.7v12.7h20.1h20V22.7V10h-20H10V22.7z" />
                            <path d="M75.5,22.7v12.7h20h20.1V22.7V10H95.5h-20V22.7z" />
                            <path d="M140.4,22.7v12.7h20.1h20V22.7V10h-20h-20.1V22.7z" />
                            <path d="M205.9,22.7v12.7h20H246V22.7V10h-20.1h-20V22.7L205.9,22.7z" />
                            <path d="M10,128.5v75.1h118h118v-75.1V53.3H128H10V128.5z M136.2,106.8c29.2,16.8,38.6,22.5,38.2,22.9c-0.3,0.3-18.5,10.8-40.4,23.5c-21.9,12.6-40.3,23.2-40.9,23.6l-1.1,0.6v-47.9v-48l2.7,1.5C96.2,83.8,114.9,94.5,136.2,106.8z" />
                            <path d="M10,233.3V246h20.1h20v-12.7v-12.7h-20H10V233.3z" />
                            <path d="M75.5,233.3V246h20h20.1v-12.7v-12.7H95.5h-20V233.3z" />
                            <path d="M140.4,233.3V246h20.1h20v-12.7v-12.7h-20h-20.1V233.3z" />
                            <path d="M205.9,233.3V246h20H246v-12.7v-12.7h-20.1h-20V233.3L205.9,233.3z" /></g></g></g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className='message-tool-item'>
                        <g><g><path d="M218.2,100.3l-92.4,89.8c-12.8,12.4-33.4,12.4-46.2,0c-12.8-12.4-12.8-32.5,0-44.9l77-74.8l15.4,15h0l-77,74.8c-4.2,4.1-4.2,10.8,0,15c4.2,4.1,11.1,4.1,15.4,0l92.4-89.8c12.7-12.4,12.7-32.5,0-44.9c-12.7-12.4-33.4-12.4-46.2,0l-97,94.3v0c-0.1,0.1-0.1,0.1-0.2,0.2c-21.1,20.5-21.1,53.9,0,74.4s55.5,20.5,76.6,0c0.1-0.1,0.1-0.1,0.2-0.2l66.2-64.4l15.4,15l-66.2,64.4l0,0c-0.1,0.1-0.1,0.1-0.2,0.2c-29.7,28.8-77.7,28.8-107.4,0c-29.6-28.9-29.6-75.6,0-104.4c0.1-0.1,0.1-0.1,0.2-0.2l97-94.3c21.2-20.7,55.7-20.7,77,0C239.5,46.1,239.5,79.7,218.2,100.3z" /></g></g>
                    </svg>
                </div>
                <hr className="divider-tool" />
                <div className='message-input'>
                    <input type="text" value={newMess} placeholder="Nhập tin nhắn đi mà..." onKeyDown={onEnterPress} onChange={handleChange} ref={inputRef} />
                    <div className='message-send'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="29" height="29" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className='mess-send-emotion'>
                            <g><g><path d="M128,10C62.9,10,10,62.9,10,128c0,65.1,52.9,118,118,118c65.1,0,118-52.9,118-118C246,62.9,193.1,10,128,10z M128,237.3c-60.3,0-109.3-49-109.3-109.3c0-60.3,49-109.3,109.3-109.3c60.3,0,109.3,49,109.3,109.3C237.3,188.3,188.3,237.3,128,237.3z" />
                                <path d="M202.3,123.6c-2.4,0-4.4,2-4.4,4.4c0,38.6-31.4,69.9-69.9,69.9C89.4,197.9,58,166.6,58,128c0-2.4-2-4.4-4.4-4.4s-4.4,2-4.4,4.4c0,43.4,35.3,78.7,78.7,78.7c43.4,0,78.7-35.3,78.7-78.7C206.7,125.6,204.7,123.6,202.3,123.6L202.3,123.6z" />
                                <path d="M163,119.3c2.4,0,4.4-2,4.4-4.4V88.7c0-2.4-1.9-4.4-4.4-4.4s-4.4,2-4.4,4.4v26.2C158.6,117.3,160.6,119.3,163,119.3z" />
                                <path d="M93,119.3c2.4,0,4.4-2,4.4-4.4V88.7c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4v26.2C88.7,117.3,90.6,119.3,93,119.3z" /></g></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="29" height="29" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className='mess-send-btn' onClick={() => handleSendMess()}>
                            <g><g><path d="M10,139.4l81.4,25.5l100.3-88L114,171.7l87.1,27.8L246,21.3L10,139.4z M111.3,234.7l28.7-40.5l-28.7-8.5V234.7z" /></g></g>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default MessRight