import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Coffee Cafe Website',
      description: 'An elegant Coffee Cafe website featuring a modern user interface, dynamic menu options, and interactive page sections. Built using vanilla HTML, CSS, and basic JavaScript to deliver a smooth and engaging user experience.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      glow: 'shadow-[0_0_35px_rgba(249,115,22,0.18)] hover:shadow-[0_0_45px_rgba(249,115,22,0.3)] hover:border-orange-500/40',
      border: 'border-orange-500/20',
      link: 'https://github.com/Vmahesh-9701/Coffee.git'
    },
    {
      title: 'Developer Portfolio & Analytics',
      description: 'A premium glassmorphic personal portfolio showcasing professional achievements, skills, and certifications. Integrates direct frontend LeetCode API analytics to render live problem-solving statistics and topic proficiencies dynamically.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      glow: 'shadow-[0_0_35px_rgba(59,130,246,0.18)] hover:shadow-[0_0_45px_rgba(59,130,246,0.3)] hover:border-blue-400/40',
      border: 'border-blue-500/20',
      link: 'https://github.com/Vmahesh-9701/portfolio-website'
    },
    {
      title: 'Construction Worker Safety & Employment Portal',
      description: 'A comprehensive portal designed to streamline job placement for construction workers while ensuring rigorous safety compliance. Features worker registration, employment matching, safety training logs, and safety guideline information boards.',
      tech: ['React.js', 'Java', 'Spring Boot', 'PostgreSQL'],
      glow: 'shadow-[0_0_35px_rgba(34,211,238,0.18)] hover:shadow-[0_0_45px_rgba(34,211,238,0.3)] hover:border-cyan-400/40',
      border: 'border-cyan-500/20',
      link: 'https://github.com/Vmahesh-9701/Construction-Worker-Saftey-Employment-Portal.git'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <div
      id="projects"
      className="min-h-screen w-full px-8 py-24 text-white flex flex-col justify-center items-center gap-12 bg-[#070F2B] overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl -z-10 pointer-events-none" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold font-['Sora'] tracking-wide bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-md text-center"
      >
        My Projects
      </motion.h1>

      {/* Projects Container Grid (Scaled Up) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full max-w-7xl mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2"
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={`rounded-[30px] border ${proj.border} bg-white/5 backdrop-blur-md p-10 min-h-[420px] flex flex-col justify-between transition duration-500 ${proj.glow} hover:scale-[1.02]`}
          >
            <div>
              <h2 className="text-2xl font-bold font-['Sora'] text-gray-100 mb-4 tracking-wide leading-tight">
                {proj.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-gray-300 mb-6 font-['Poppins']">
                {proj.description}
              </p>
            </div>

            <div>
              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] px-2.5 py-1 rounded bg-slate-900/60 border border-white/5 font-semibold text-cyan-300 font-['Poppins']"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-cyan-400 hover:text-cyan-300 transition duration-200"
              >
                View Repository Code ↗
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects