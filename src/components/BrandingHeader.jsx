import React from 'react';
import '../styles/Branding.css'; // Estilos específicos para el branding
import ansvLogo from '../assets/ansv_logo.png'; // Asegúrate de tener el logo en assets

function BrandingHeader() {
  return (
    <header className="branding-header">
      <img src={ansvLogo} alt="Logo ANSV" className="ansv-logo" />
      <h1 className="bot-title">Asistente de Soporte ANSV</h1>
      {/* Puedes añadir un eslogan o tagline aquí */}
    </header>
  );
}

export default BrandingHeader;