import React from 'react';
import '../styles/Messages.css';

function MessageBubble({ message }) {
  const isUser = message.from === 'user';
  const className = `message-bubble ${isUser ? 'user-message' : 'bot-message'}`;

  // Puedes añadir lógica para renderizar HeroCards o Attachments aquí si decides
  // construir el UI de mensajes completamente custom en lugar de usar <WebChat />
  // Este componente sería más útil si construyes el chat desde cero.

  return (
    <div className={className}>
      <div className="message-content">
        {message.text}
        <span className="message-timestamp">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}

export default MessageBubble;