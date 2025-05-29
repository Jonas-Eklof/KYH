import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  CodeIcon,
} from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, rgba(0, 0, 0, 0) 70%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(80px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-900/20 text-cyan-400 text-sm border border-cyan-800/30 mb-6">
            Front-End Developer
          </span>
        </motion.div>
        <AnimatedText
          text="Creating Digital Experiences That Inspire"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        />
        <AnimatedText
          text="Innovative front-end developer crafting modern web experiences with cutting-edge technologies and pixel perfect designs."
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          delay={0.6}
        />
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        >
          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
          </motion.button>
          <motion.button
            className="px-8 py-3 rounded-full border border-cyan-700/30 hover:border-cyan-500/50 text-cyan-400 font-medium"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            View Projects
          </motion.button>
        </motion.div>
        <motion.div
          className="flex justify-center gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {[GithubIcon, LinkedinIcon, CodeIcon].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50"
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(6,182,212, 0.5)",
                color: "rgb(6,182,212)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-gray-400 hover:text-cyan-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDownIcon size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
