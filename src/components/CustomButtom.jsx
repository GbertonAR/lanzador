import { motion } from "framer-motion";

export default function CustomButton({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-6 py-3 bg-purple-400 text-white rounded-2xl shadow-lg text-lg font-semibold hover:bg-purple-500 transition"
    >
      {children}
    </motion.button>
  );
}