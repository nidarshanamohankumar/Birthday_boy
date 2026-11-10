import { motion } from "framer-motion";

function Planet({ name, description, className, onClick }) {

  return (
    <motion.div
      className={`planet-card ${className}`}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >

      <div className="planet-orbit">

        <div className="planet-sphere"></div>

      </div>

      <h2>{name}</h2>

      <p>{description}</p>

      <span>✦ Explore Planet ✦</span>

    </motion.div>
  );
}

export default Planet;