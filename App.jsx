import { useState } from "react";
import { motion } from "framer-motion";
import "./styles/App.css";

const apps = [
  { name: "Bot de Soporte", url: "http://localhost:8000/chat" },
  { name: "Redactor de Prensa", url: "http://localhost:8000/redactor" },
  { name: "Transcriptor Auditxt", url: "http://localhost:8000/transcriptor" },
];

export default function App() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-violet-700 mb-8"
      >
        🚀 Lanzador de Aplicaciones
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {apps.map((app, index) => (
          <motion.a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-2xl p-6 transition-shadow duration-300 shadow-lg bg-white text-center text-violet-700 font-medium hover:shadow-xl border border-violet-100`}
          >
            <h2 className="text-xl mb-2">{app.name}</h2>
            <p className="text-sm text-gray-500">Click para abrir</p>
          </motion.a>
        ))}
      </div>

      <footer className="mt-16 text-sm text-gray-500">
        Desarrollado con 💜 por tu equipo
      </footer>
    </div>
  );
}
