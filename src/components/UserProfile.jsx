import React, { useState } from 'react';
import '../styles/Branding.css'; // Puedes usar el mismo archivo de estilos

function UserProfile({ userName, onSetUserName }) {
  const [editing, setEditing] = useState(false);
  const [tempName, setTempName] = useState(userName);

  const handleSave = () => {
    onSetUserName(tempName);
    setEditing(false);
  };

  return (
    <div className="user-profile-card">
      {editing ? (
        <>
          <input
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            placeholder="Introduce tu nombre"
          />
          <button onClick={handleSave}>Guardar</button>
        </>
      ) : (
        <>
          <span>Hola, {userName}</span>
          <button onClick={() => setEditing(true)}>Cambiar</button>
        </>
      )}
    </div>
  );
}

export default UserProfile;