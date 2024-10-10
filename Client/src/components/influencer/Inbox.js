import React, { useState } from 'react';
import './Inbox.css'; // Include the CSS file

export default function Inbox() {
  const [messages, setMessages] = useState([
    {
      name: 'Jacqueline',
      avatar: 'avatar1.png',
      lastMessage: 'Lorem Ipsum...',
      date: 'Yesterday',
      messages: [
        { text: 'Lorem Ipsum is simply dummy text...', sentByUser: true, time: '5:37 AM' },
      ],
      location: '29-31 Aug Miami, Florida',
    },
    {
      name: 'Tina',
      avatar: 'avatar2.png',
      lastMessage: 'Lorem Ipsum...',
      date: 'Yesterday',
      messages: [
        { text: 'Lorem Ipsum is simply dummy text...', sentByUser: false, time: '5:37 AM' },
      ],
      location: '29-31 Aug Miami, Florida',
    },
  ]);
  const [currentChatIndex, setCurrentChatIndex] = useState(1);
  const[popup,setPopup]=useState(false)

console.log(popup)

  function handlepopup(){
setPopup(!popup);
  }
  const selectChat = (index) => {
    setCurrentChatIndex(index);
  };

  const sendMessage = (messageText) => {
    const updatedMessages = [...messages];
    updatedMessages[currentChatIndex].messages.push({
      text: messageText,
      sentByUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    setMessages(updatedMessages);
  };

  return (
    <div className="inbox">
           <header className="header-influencer-inbox">
        <div className="header-influencer-inbox-left">
        <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise"  />
        </div>

        <div className='header-influencer-inbox-right'>


        </div>
      </header>
      <div className='influencer-inbox-body'>
{/* handling popup */}
{popup ? (
        <div className="view-offer-popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handlepopup}>
              &times;
            </button>
            <img
              src="https://via.placeholder.com/600x300" // replace with your actual image URL
              alt="Offer Image"
              className="popup-image"
            />
            <h2 className="popup-title">Exclusive Offer:</h2>
            <h3 className="popup-heading">Stay Longer, Save More!</h3>
            <p className="popup-description">
              Promote Miami, Florida and enjoy <span>15% off</span> your next stay.
              Comfortable rooms, prime location, and free perks await!
            </p>
            <p className="popup-limited-time">
              Limited time only – promote and book by <span>25/09/2024</span>
            </p>
            <div className="popup-buttons">
              <button className="preview-btn">
                Preview Property
              </button>
              <div style={{display:"flex",justifyContent:"space-between"}}>

              <button className="accept-btn">Accept Offer</button>
              <button className="decline-btn">
                Decline Offer
            
              </button>
              </div>
              <button className="counter-btn">Counter Offer</button>
            </div>


            {/*reservation detail pop up */}

            
          </div>
        </div>
      ) : null}
      <div className="sidebar">
        <SearchBar />
        {/* Pass currentChatIndex as a prop */}
        <MessageSidebar messages={messages} selectChat={selectChat} currentChatIndex={currentChatIndex} />
      </div>
      <div className="chat-container">
        <ChatWindow currentChat={messages[currentChatIndex]} handlepopup={handlepopup}/>
        <MessageForm sendMessage={sendMessage} />
      </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search all messages" />
    </div>
  );
}

function MessageSidebar({ messages, selectChat, currentChatIndex }) {
  return (
    <div className="message-sidebar">
      {messages.map((chat, index) => (
        <div
          key={index}
          className={`chat-preview ${index === currentChatIndex ? 'active' : ''}`}
          onClick={() => selectChat(index)}
        >
          <img src={chat.avatar} alt={chat.name} className="avatar" />
          <div className="chat-info">
            <h4>{chat.name}</h4>
            <p>{chat.lastMessage}</p>
            <span>{chat.location}</span>
            <span className="date">{chat.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ChatWindow({ currentChat,handlepopup }) {
  return (
    <div className="chat-window">
      <div className="header">
       <div style={{display:"flex", width:"200px"}}>

        <img src={currentChat.avatar} alt={currentChat.name} className="avatar" />
        <h2>{currentChat.name}</h2>
       </div>
       <div style={{width:"200px"}}>

       <button onClick={()=>handlepopup()} 
       style={{width:"100px",width:"120px",height:"40px",backgroundColor:"#198E78",borderRadius:"10px",color:"white"}}>View Offer</button>
       </div>
      
      </div>
      <div className="messages">
        {currentChat.messages.map((message, index) => (
          <div key={index} className={`message ${message.sentByUser ? 'sent' : 'received'}`}>
            <p>{message.text}</p>
            <span className="time">{message.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MessageForm({ sendMessage }) {
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      sendMessage(messageText);
      setMessageText('');
    }
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Type Message"
      />
      <button type="submit">Send</button>
    </form>
  );
}
