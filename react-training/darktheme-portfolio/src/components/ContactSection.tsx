import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const inputClasses =
    "w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placegolder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all";
  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      value: "contact@developer.com",
      link: "mailto:contact@developer.com",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py32 px-6 w-full bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-medium mb-2 block">
            Get In Touch
          </span>
          <AnimatedText
            text="Let's Work Together"
            className="text-3xl md:text-5xl font-bold mb-6"
          />
          <AnimatedText
            text="Have a project in mind or just want to say hello? I'd love to hear from you"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            delay={0.3}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <motion.div
          className="lg:col-span-2 space-y-8"
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
          <p className="text-gray-400">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision. Feel free to reach out
            through any of the following channels.
          </p>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="flex items-start gap-4 group"
                whileHover={{
                  x: 5,
                }}
              >
                <div className="w-12 h-12 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-900/30 transition-colors">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-3"
          initial={{
            opacity: 0,
            x: 50,
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
          <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you shortly
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.1,
                    }}
                  >
                    <label htmlFor="name" className="block text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.2,
                    }}
                  >
                    <label htmlFor="email" className="block text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="john@example.com"
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                  >
                    <label
                      htmlFor="subject"
                      className="block text-gray-400 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Project Inquiry"
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-gray-400 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="I'd like to discuss a project..."
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                  >
                    <motion.button
                      type="submit"
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 flex items-center gap-2"
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <SendIcon size={18} />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
