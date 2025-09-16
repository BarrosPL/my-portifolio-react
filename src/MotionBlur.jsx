import { motion } from 'framer-motion'

const MotionBlur = ({ position, size, opacity }) => {
  return (
    <motion.div
      className="fixed rounded-full blur-3xl bg-indigo-500" // fixed para ficar preso à tela
      style={{
        top: position.top,
        left: position.left,
        width: size.width,
        height: size.height,
        opacity: opacity || 0.6,
        transform: "translate(-50%, -50%)",
        zIndex: 0
      }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    />
  )
}

export default MotionBlur
