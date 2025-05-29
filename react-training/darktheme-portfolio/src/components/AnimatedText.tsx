import { motion } from "framer-motion";
interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}
const AnimatedText = ({
  text,
  className = "",
  once = true,
  delay = 0,
}: AnimatedTextProps) => {
  const words = text.split(" ");
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay * i,
      },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
      }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="mr-2 inline-block" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
export default AnimatedText;
