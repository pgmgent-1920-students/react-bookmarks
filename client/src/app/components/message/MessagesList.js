import React, { useEffect, useState } from 'react';
import { useFirestore } from '../../services';

const MessagesList = () => {
  const [messages, setMessages] = useState();
  const {getMessages} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMessages();
      setMessages(data);
    }

    fetchData();    
  }, []);

  return (
    <div className="messages-list">
    {!!messages 
      ? messages.map((msg) => {
        return (
          <article className="message" key={msg.uid}>
            <div className="message__body">
              {msg.content}
            </div>
            <div className="">
              {msg.sender}
            </div>
          </article>
        )
      })
      : <p>No messages</p>
    }
    </div>
  );
};

export default MessagesList;