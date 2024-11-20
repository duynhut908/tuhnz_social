import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import './Message.css'

const Message = ({ mess }) => {
  const { currentUser } = useContext(AuthContext)
  console.log(mess)
  const typemess = mess?.username === currentUser?.username ? 'sent' : 'received';

  return (
    <div className='message-card'>
      {mess.last === 'last' && typemess === 'received' ?
        <div className='avatar-last-mess'>
          <img src="https://i.pinimg.com/736x/0a/1c/37/0a1c37b332ac2ab84db55464a8e81e9a.jpg" />
        </div> :
        <div>
          <div className='avatar-last-mess'>
          </div>
        </div>}
      <div className={`message-${typemess}`}>{mess?.content}</div>
    </div>
  );
}
export default Message