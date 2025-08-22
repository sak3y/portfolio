// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Sliding animations on view/scroll
const SlideUp = ({ children, delay }) => {
  return (
    <motion.div
      className="spring"
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2}}
      transition={{ duration: 1.2, delay: delay || 0.1, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

const SlideUpInitial = ({ children, delay }) => {
  return (
    <motion.div
      className="spring"
      initial={{ opacity: 0, y: 120 }}
      animate ={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay: delay || 0.1, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};


const SlideIn = ({ children, delay }) => {
  return (
    <motion.div
      className="spring"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay: delay || 0.3, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
export { SlideIn, SlideUpInitial };
