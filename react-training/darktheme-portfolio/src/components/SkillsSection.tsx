import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
interface Skill {
  name: string;
  level: number;
  color: string;
}
const SkillsSection = () => {
  const frontendSkills: Skill[] = [
    {
      name: "React",
      level: 95,
      color: "cyan",
    },
    {
      name: "TypeScript",
      level: 90,
      color: "blue",
    },
    {
      name: "JavaScript",
      level: 95,
      color: "yellow",
    },
    {
      name: "HTML5/CSS3",
      level: 90,
      color: "orange",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      color: "teal",
    },
    {
      name: "Next.js",
      level: 80,
      color: "meh",
    },
  ];
  const toolsSkills: Skill[] = [
    {
      name: "Git/GitHub",
      level: 85,
      color: "purple",
    },
    {
      name: "Webpack",
      level: 75,
      color: "blue",
    },
    {
      name: "Jest",
      level: 80,
      color: "red",
    },
    {
      name: "Figma",
      level: 70,
      color: "pink",
    },
    {
      name: "VS Code",
      level: 90,
      color: "blue",
    },
    {
      name: "CI/CD",
      level: 75,
      color: "green",
    },
  ];
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const skillVariants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: (i: number) => ({
      width: `${i}%`,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };
  const renderSkillBars = (skills: Skill[]) => (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-white font-medium">{skill.name}</span>
            <span className="text-gray-400">{skill.level}%</span>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full bg-${skill.color}-500`}
              custom={skill.level}
              variants={skillVariants}
              style={{
                background: getColorGradient(skill.color),
              }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
  function getColorGradient(color: string) {
    switch (color) {
      case "cyan":
        return "linear-gradient(90deg, #06b6d4, #0891b2)";
      case "blue":
        return "linear-gradient(90deg, #3b82f6, #1d4ed8)";
      case "yellow":
        return "linear-gradient(90deg, #eab308, #ca8a04)";
      case "orange":
        return "linear-gradient(90deg, #f97316, #c2410c)";
      case "teal":
        return "linear-gradient(90deg, #14b8a6, #0d9488)";
      case "gray":
        return "linear-gradient(90deg, #4b5563, #1f2937)";
      case "purple":
        return "linear-gradient(90deg, #a855f7, #7e22ce)";
      case "red":
        return "linear-gradient(90deg, #ef4444, #b91c1c)";
      case "pink":
        return "linear-gradient(90deg, #ec4899, #be185d)";
      case "green":
        return "linear-gradient(90deg, #22c55e, #15803d)";
      default:
        return "linear-gradient(90deg, #06b6d4, #0891b2)";
    }
  }
  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-6 w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #000, #111, #000)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          className="absolute top-0 left-0 opacity-5"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-medium mb-2 block">
            Expertise
          </span>
          <AnimatedText
            text="Technical Skills & Proficiency"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <AnimatedText
            text="A comprehensive overview of my technical abilities and tools I work with"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            delay={0.3}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
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
              duration: 0.5,
            }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 mr-3">
                <span className="text-sm">01</span>
              </span>
              Front-End Development
            </h3>
            {renderSkillBars(frontendSkills)}
          </motion.div>
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
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 mr-3">
                <span className="text-sm">02</span>
              </span>
              Tools & Technologies
            </h3>
            {renderSkillBars(toolsSkills)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
