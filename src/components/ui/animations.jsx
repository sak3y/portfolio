import { motion } from "framer-motion";

// Sliding animations on view/scroll
const SlideUp = ({ children, delay = 0.1 }) => {
  return (
    <motion.div
      className="spring"
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, delay, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

const SlideUpInitial = ({ children, delay = 0.1 }) => {
  return (
    <motion.div
      className="spring"
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}   // ✅ no space before =
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

const SlideIn = ({ children, delay = 0.3 }) => {
  return (
    <motion.div
      className="spring"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
export { SlideIn, SlideUpInitial };
