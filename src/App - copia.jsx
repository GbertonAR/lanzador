import React from "react";
import "./index.css";

function App() {
  const apps = [
    {
      title: "Bot de Soporte",
      url: "http://localhost:8000/bot",
    },
    {
      title: "Redactor de Prensa",
      url: "http://localhost:8000/redactor",
    },
    {
      title: "Transcriptor Auditxt",
      url: "http://localhost:8000/transcriptor",
    },
  ];

  return (
    <div className="container">
      <h1>🚀 Lanzador de Aplicaciones</h1>
      <div className="card-container">
        {apps.map((app) => (
          <div key={app.title} className="card" onClick={() => window.open(app.url, "_blank")}>
            <h2>{app.title}</h2>
            <p>Click para abrir</p>
          </div>
        ))}
      </div>
      <footer>Desarrollado con 💜 por tu equipo</footer>
    </div>
  );
}

export default App;
