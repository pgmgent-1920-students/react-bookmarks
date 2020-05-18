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
  }, [getMessages]);

  return (
    <div className="row messages-list">
    {!!messages 
      ? messages.map((msg) => {
        return (
          <article className="media message" key={msg.uid}>
            <span className="">
              {msg.sender}
            </span>
            <div className="media-body message__body">
              {msg.content}
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