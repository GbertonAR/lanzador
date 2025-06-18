import React, { useState } from 'react';
import '../styles/Chat.css'; // Mismo archivo de estilos que ChatContainer

function InputArea({ onSendMessage }) {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="input-area">
      <input
        type="text"
        className="message-input"
        placeholder="Escribe tu mensaje..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="send-button" onClick={handleSend}>
        <span className="material-icons">send</span> {/* Icono de envío, necesitarías una librería de iconos */}
      </button>
    </div>
  );
}

export default InputArea;