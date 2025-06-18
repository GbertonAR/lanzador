// src/components/ChatContainer.jsx
import React from 'react';
import ReactWebChat from 'botframework-webchat'; // Importar ReactWebChat directamente

import '../styles/Chat.css'; // Estilos para el contenedor del chat

function ChatContainer({ directLine, store, styleSet, activityMiddleware, userID, username, locale, botAvatarInitials, userAvatarInitials, botAvatarImage, userAvatarImage }) {
  return (
    <div className="chat-container">
      {/* El componente ReactWebChat renderiza toda la UI del chat */}
      <ReactWebChat
        directLine={directLine}
        store={store}
        styleSet={styleSet}
        activityMiddleware={activityMiddleware}
        userID={userID}
        username={username}
        locale={locale}
        botAvatarInitials={botAvatarInitials}
        userAvatarInitials={userAvatarInitials}
        botAvatarImage={botAvatarImage}
        userAvatarImage={userAvatarImage}
      />
      {/* Si quieres un InputArea custom, tendrías que pasar sendMessage a él
          y el WebChat no tendría su propia caja de texto.
          Por ahora, WebChat incluye su propia caja de texto.
      */}
    </div>
  );
}

export default ChatContainer;
