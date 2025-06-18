// src/App.jsx
import React from "react";
import "./index.css";
import apps from "./apps-config";

function App() {
  return (
    <div className="container">
      <h1>🚀 Lanzador de Aplicaciones</h1>
      <div className="card-container">
        {apps.map((app) => (
          <div key={app.title} className="card" onClick={() => window.open(app.url, "_blank")}>
            <img src={app.image} alt={app.title} />
            <div className="card-content">
              <h2>{app.title}</h2>
              <p>{app.description}</p>
            </div>
          </div>
        ))}
      </div>
      <footer>Desarrollado con 💜 por tu equipo</footer>
    </div>
  );
}

export default App;