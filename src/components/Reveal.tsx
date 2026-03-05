import { motion } from "framer-motion";

export default function Reveal({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}