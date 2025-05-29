import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { CodeIcon, MonitorIcon, PaletteIcon, UsersIcon } from "lucide-react";
const AboutSection = () => {
  const qualities = [
    {
      icon: CodeIcon,
      title: "Clean Code",
      description:
        "Writing maintainable, efficient, and well-structured code that follows best practices.",
    },
    {
      icon: MonitorIcon,
      title: "Responsive Design",
      description:
        "Creating interfaces that work flawlessly across all devices and screen sizes.",
    },
    {
      icon: PaletteIcon,
      title: "Creative Solutions",
      description:
        "Approaching problems with innovative thinking and creative implementation.",
    },
    {
      icon: UsersIcon,
      title: "User-Focused",
      description:
        "Developing with user experience and accessibility as top priorities.",
    },
  ];
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-6 bg-gradient-to-b from-gray-950 to-gray-900 w-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span className="text-cyan-400 font-medium mb-2 block">
              About Me
            </span>
            <AnimatedText
              text="Passionate Front-End Developer with an Eye for Design"
              className="text-3xl md:text-4xl font-bold mb-6"
            />
            <motion.p
              className="text-gray-400 mb-6"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
              }}
            >
              I'm a front-end developer with 5+ years of experience crafting
              engaging digital experiences. I specialize in React, TypeScript,
              and modern web technologies, focusing on creating intuitive,
              accessible, and performant applications.
            </motion.p>
            <motion.p
              className="text-gray-400 mb-8"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.6,
              }}
            >
              My approach combines technical expertise with creative
              problem-solving to deliver solutions that not only meet but exceed
              expectations. I'm passionate about staying current with emerging
              technologies and continuously improving my craft.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.8,
              }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-colors"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(6, 182,212, 0.15)",
                }}
              >
                <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 mb-4">
                  <quality.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
                <p className="text-gray-400">{quality.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
