import React, { useState } from "react";
import "./Messages.css";

const Messages = () => {
  const contacts = [
    {
      id: 1,
      name: "Jacqueline",
      avatar: "https://via.placeholder.com/40",
      location: "29-31 Aug Miami, Florida",
      messages: [
        {
          id: 1,
          type: "received",
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          time: "5:37 AM",
          date: "Yesterday",
        },
        {
          id: 2,
          type: "sent",
          message: "Lorem Ipsum is simply dummy text of the printing.",
          time: "5:38 AM",
          date: "Yesterday",
        },
      ],
    },
    {
      id: 2,
      name: "Michael",
      avatar: "https://via.placeholder.com/40",
      location: "15 Sep New York, USA",
      messages: [
        {
          id: 1,
          type: "received",
          message: "Hey, how are you doing today?",
          time: "10:00 AM",
          date: "Today",
        },
        {
          id: 2,
          type: "sent",
          message: "I'm doing great, how about you?",
          time: "10:05 AM",
          date: "Today",
        },
      ],
    },
    {
      id: 3,
      name: "Sophia",
      avatar: "https://via.placeholder.com/40",
      location: "10 Oct Los Angeles, USA",
      messages: [
        {
          id: 1,
          type: "received",
          message: "Can we reschedule our meeting?",
          time: "9:00 AM",
          date: "Today",
        },
      ],
    },
  ];

  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedMessages = [
      ...selectedContact.messages,
      {
        id: selectedContact.messages.length + 1,
        type: "sent",
        message: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: "Today",
      },
    ];

    const updatedContact = { ...selectedContact, messages: updatedMessages };
    const updatedContacts = contacts.map((contact) =>
      contact.id === selectedContact.id ? updatedContact : contact
    );

    setSelectedContact(updatedContact);
    setNewMessage("");
  };

  return (
    <div className="messages-container">
      {/* Sidebar */}
      <div className="messages-sidebar">
        <div className="messages-header">
          <h2>Messages</h2>
          <div className="messages-filter-buttons">
            <button className="active">All</button>
            <button>Unread</button>
          </div>
        </div>
        <div className="messages-search-bar">
          <input type="text" placeholder="Search all messages" />
        </div>
        <div className="messages-contact-list">
          {contacts.map((contact) => (
            <div
              className={`messages-contact ${
                selectedContact.id === contact.id ? "active" : ""
              }`}
              key={contact.id}
              onClick={() => handleContactClick(contact)}
            >
              <div className="messages-avatar">
                <img src={contact.avatar} alt={contact.name} />
              </div>
              <div className="messages-contact-info">
                <h3>{contact.name}</h3>
                <p>{contact.messages[0].message.substring(0, 50)}...</p>
                <span>{contact.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="messages-chat-area">
        <div className="messages-chat-header">
          <h2>{selectedContact.name}</h2>
          <button className="messages-reservation-button">
            Reservation details
          </button>
        </div>
        <div className="messages-chat-date">{selectedContact.messages[0].date}</div>
        <div className="messages-messages">
          {selectedContact.messages.map((msg) => (
            <div
              key={msg.id}
              className={`messages-message ${
                msg.type === "sent" ? "messages-sent" : "messages-received"
              }`}
            >
              <p>{msg.message}</p>
              <span className="messages-time">{msg.time}</span>
            </div>
          ))}
        </div>
        <div className="messages-chat-input">
          <input
            type="text"
            placeholder="Type Message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="messages-send-button" onClick={handleSendMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="20px"
              height="20px"
            >
              <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
