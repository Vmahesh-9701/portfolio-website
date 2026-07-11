import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { skillData } from '../data/skillData'

const Skills = () => {
  const scrollRef = useRef()

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -480,
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 480,
      behavior: 'smooth'
    })
  }

  // Predefined glow themes
  const glowThemes = [
    {
      glow: 'shadow-[0_0_35px_rgba(6,182,212,0.18)] hover:shadow-[0_0_45px_rgba(6,182,212,0.3)]',
      border: 'border-cyan-500/20 hover:border-cyan-400/50',
      text: 'text-cyan-400',
      imgBorder: 'border-cyan-500/40'
    },
    {
      glow: 'shadow-[0_0_35px_rgba(99,102,241,0.18)] hover:shadow-[0_0_45px_rgba(99,102,241,0.3)]',
      border: 'border-indigo-500/20 hover:border-indigo-400/50',
      text: 'text-indigo-400',
      imgBorder: 'border-indigo-500/40'
    },
    {
      glow: 'shadow-[0_0_35px_rgba(16,185,129,0.18)] hover:shadow-[0_0_45px_rgba(16,185,129,0.3)]',
      border: 'border-emerald-500/20 hover:border-emerald-400/50',
      text: 'text-emerald-400',
      imgBorder: 'border-emerald-500/40'
    },
    {
      glow: 'shadow-[0_0_35px_rgba(245,158,11,0.18)] hover:shadow-[0_0_45px_rgba(245,158,11,0.3)]',
      border: 'border-amber-500/20 hover:border-amber-400/50',
      text: 'text-amber-400',
      imgBorder: 'border-amber-500/40'
    },
    {
      glow: 'shadow-[0_0_35px_rgba(236,72,153,0.18)] hover:shadow-[0_0_45px_rgba(236,72,153,0.3)]',
      border: 'border-pink-500/20 hover:border-pink-400/50',
      text: 'text-pink-400',
      imgBorder: 'border-pink-500/40'
    },
    {
      glow: 'shadow-[0_0_35px_rgba(168,85,247,0.18)] hover:shadow-[0_0_45px_rgba(168,85,247,0.3)]',
      border: 'border-purple-500/20 hover:border-purple-400/50',
      text: 'text-purple-400',
      imgBorder: 'border-purple-500/40'
    }
  ]

  return (
    <div
      id="skills"
      className="relative w-full px-4 sm:px-8 py-16 md:py-24 text-white flex flex-col justify-center items-center gap-10 md:gap-12 overflow-hidden bg-[#070F2B]"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl -z-10 pointer-events-none" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora'] tracking-wide bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-md text-center"
      >
        My Skills
      </motion.h1>

      {/* Desktop Main Section Carousel (hidden on mobile, md+ flex) */}
      <div className="hidden md:flex relative w-full justify-center items-center">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-2 md:left-10 z-10 h-14 w-14 rounded-full border border-cyan-400/30 bg-black/50 backdrop-blur-md text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] active:scale-95 transition duration-300 text-2xl items-center justify-center cursor-pointer"
        >
          ←
        </button>

        {/* Scroll Container (Scaled Up Cards) */}
        <div
          ref={scrollRef}
          className="w-[90%] md:w-[85%] flex gap-6 md:gap-10 overflow-x-auto scroll-smooth no-scrollbar py-6 md:py-8 px-2 md:px-6"
        >
          {skillData.map((skill, index) => {
            const theme = glowThemes[index % glowThemes.length]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`min-w-[280px] sm:min-w-[360px] md:min-w-[400px] max-w-[400px] h-[520px] md:h-[60vh] rounded-[24px] sm:rounded-[30px] flex flex-col justify-between border ${theme.border} bg-white/5 backdrop-blur-md p-6 sm:p-10 ${theme.glow} hover:scale-[1.02] transition duration-400`}
              >
                {/* Image and content alignment depending on odd/even */}
                {index % 2 === 0 ? (
                  <>
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className={`w-32 h-32 sm:w-44 sm:h-44 object-cover rounded-full border-4 ${theme.imgBorder} mx-auto shadow-lg`}
                    />
                    <div className="mt-4 flex-1 flex flex-col justify-center">
                      <h2 className={`text-2xl sm:text-3xl font-bold font-['Sora'] ${theme.text}`}>
                        {skill.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed mt-2 text-xs sm:text-[15px] font-['Poppins']">
                        {skill.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4 flex-1 flex flex-col justify-center">
                      <h2 className={`text-2xl sm:text-3xl font-bold font-['Sora'] ${theme.text}`}>
                        {skill.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed mt-2 text-xs sm:text-[15px] font-['Poppins']">
                        {skill.description}
                      </p>
                    </div>
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className={`w-32 h-32 sm:w-44 sm:h-44 object-cover rounded-full border-4 ${theme.imgBorder} mx-auto shadow-lg mt-auto`}
                    />
                  </>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-2 md:right-10 z-10 h-14 w-14 rounded-full border border-cyan-400/30 bg-black/50 backdrop-blur-md text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] active:scale-95 transition duration-300 text-2xl items-center justify-center cursor-pointer"
        >
          →
        </button>
      </div>

      {/* Mobile/Tablet Vertical Stack (hidden on md+) */}
      <div className="md:hidden w-full flex flex-col gap-6 px-1 sm:px-4">
        {skillData.map((skill, index) => {
          const theme = glowThemes[index % glowThemes.length]

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`w-full rounded-[20px] border ${theme.border} bg-white/5 backdrop-blur-md p-5 flex items-center gap-4 sm:gap-6 ${theme.glow} hover:scale-[1.01] transition duration-300`}
            >
              {index % 2 === 0 ? (
                <>
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-2 ${theme.imgBorder} shrink-0 shadow-md`}
                  />
                  <div className="flex-1 text-left">
                    <h3 className={`text-lg sm:text-xl font-bold font-['Sora'] ${theme.text}`}>
                      {skill.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mt-1 text-xs sm:text-sm font-['Poppins']">
                      {skill.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1 text-left">
                    <h3 className={`text-lg sm:text-xl font-bold font-['Sora'] ${theme.text}`}>
                      {skill.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mt-1 text-xs sm:text-sm font-['Poppins']">
                      {skill.description}
                    </p>
                  </div>
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-2 ${theme.imgBorder} shrink-0 shadow-md`}
                  />
                </>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills