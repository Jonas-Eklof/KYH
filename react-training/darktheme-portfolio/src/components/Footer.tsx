import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  ArrowUpIcon,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: GithubIcon,
      url: "#",
      name: "Github",
    },
    {
      icon: LinkedinIcon,
      url: "#",
      name: "LinkedIn",
    },
    {
      icon: TwitterIcon,
      url: "#",
      name: "Twitter",
    },
    {
      icon: InstagramIcon,
      url: "#",
      name: "Instagram",
    },
  ];

  const navLinks = [
    {
      name: "Home",
      url: "#hero",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  return (
    <footer className="bg-gray-900 w-full">
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full"
        >
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,80C320,75,400,53,480,42.7C560,32,640,32,720,42.7C800,53,880,75,960,74.7C1040,75,1120,53,1200,42.7C1280,32,1360,32,1400,32L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <motion.div
              className="text-2xl font-bold mb-4"
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
              <span className="text-cyan-400">Hello</span>.World
            </motion.div>
            <motion.p
              className="text-gray-400 mb-6"
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
                delay: 0.1,
              }}
            >
              Creating Exceptional digital experiences through clean code and
              creative solutions.
            </motion.p>
            <motion.div
              className="flex space-x-8"
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
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
          <div>
            <motion.h3
              className="text-xl font-semibold mb-6"
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
                delay: 0.1,
              }}
            >
              Quick Links
            </motion.h3>
            <motion.ul
              className="space-y-3"
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
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    x: 5,
                  }}
                >
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.url)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div>
            <motion.h3
              className="text-xl font-semibold mb-6"
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
                delay: 0.1,
              }}
            >
              Contact
            </motion.h3>
            <motion.div
              className="space-y-3"
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
              <p className="text-gray-400">
                <span className="block text-white">Email:</span>
                contact@developer.com
              </p>
              <p className="text-gray-400">
                <span className="block text-white">Phone:</span>
                +1 (555) 123-4567
              </p>
              <p className="text-gray-400">
                <span className="block text-white">Location:</span>
                San Francisco, CA
              </p>
            </motion.div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-500 text-sm mb-4 md:mb-0"
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
              delay: 0.3,
            }}
          >
            © {new Date().getFullYear()} Hello.World - All rights reserved.
          </motion.p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400"
            whileHover={{
              y: -2,
            }}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            Back to Top <ArrowUpIcon size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
