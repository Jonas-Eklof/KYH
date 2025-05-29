import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { ExternalLinkIcon, GithubIcon, CodeIcon } from "lucide-react";
import { useState } from "react";
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      description:
        "Mobile-responsive application for tracking workouts, nutrition, and fitness goals with visualization of progress.",
      tags: ["React", "JavaScript", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Forecast PWA",
      description:
        "Progressive Web App providing real-time weather forecasts with offline capabilities and location-based services.",
      tags: ["React", "PWA", "API Integration"],
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Task Management System",
      description:
        "Collaborative task management platform with real-time updates, user assignments, and progress tracking.",
      tags: ["TypeScript", "React", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];
  const filters = [
    "All",
    "React",
    "TypeScript",
    "JavaScript",
    "PWA",
    "API Integration",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-6 w-full bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-medium mb-2 block">
            Portfolio
          </span>
          <AnimatedText
            text="Featured Projects & Work"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <AnimatedText
            text="Showcasing my best work and the technologies I've mastered"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            delay={0.3}
          />
        </div>
        <motion.div
          className="
        flex flex-wrap justify-center gap-3 mb-12
        "
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-gray-800/30 border border-gray-700/50"
                whileHover={{
                  y: -5,
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{
                      scale: hoveredProject === project.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolutue inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-80"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/90 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <motion.a
                      href={project.demoUrl}
                      className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-gray-900 hover:bg-white"
                      whileHover={{
                        scale: 1.1,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <ExternalLinkIcon size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-gray-900 hover:bg-white"
                      whileHover={{
                        scale: 1.1,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <GithubIcon size={20} />
                    </motion.a>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CodeIcon size={16} className="text-cyan-400" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">
              No Projects found with this filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
