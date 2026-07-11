import React, { useState } from 'react'
import { certificateData } from '../data/certificateData'
import { motion, AnimatePresence } from 'framer-motion'

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextCertificate = () => {
    setDirection(1)
    setCurrentIndex((prev) =>
      prev === certificateData.length - 1 ? 0 : prev + 1
    )
  }

  const prevCertificate = () => {
    setDirection(-1)
    setCurrentIndex((prev) =>
      prev === 0 ? certificateData.length - 1 : prev - 1
    )
  }

  const certificate = certificateData[currentIndex]

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95
    })
  }

  return (
    <div
      id="certificates"
      className="relative min-h-screen w-full px-6 md:px-16 py-16 md:py-24 text-white flex flex-col justify-center items-center gap-10 bg-[#070F2B] overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10 pointer-events-none" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora'] tracking-wide bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-md text-center"
      >
        My Certificates
      </motion.h1>

      {/* Navigation Controls Bar */}
      <div className="w-full max-w-xl h-14 flex items-center justify-between border border-cyan-400/20 bg-white/5 backdrop-blur-md rounded-full px-1.5 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
        <button
          onClick={prevCertificate}
          className="w-12 h-12 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 active:scale-95 duration-300 text-2xl cursor-pointer"
        >
          ←
        </button>

        <h3 className="text-sm md:text-base font-semibold font-['Poppins'] tracking-wider text-gray-200">
          Credential {currentIndex + 1} of {certificateData.length}
        </h3>

        <button
          onClick={nextCertificate}
          className="w-12 h-12 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 active:scale-95 duration-300 text-2xl cursor-pointer"
        >
          →
        </button>
      </div>

      {/* Animated Certificate Glass Container (Scaled Up) */}
      <div className="w-full max-w-6xl min-h-auto md:min-h-[560px] flex items-center justify-center relative px-2">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={certificate.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.35,
              ease: 'easeOut'
            }}
            className="w-full rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col md:flex-row shadow-[0_0_60px_rgba(34,211,238,0.15)] hover:border-cyan-400/35 transition duration-500"
          >
            {/* Left Image Side (55%) (Scaled Up Height) */}
            <div className="w-full md:w-[55%] h-[220px] sm:h-[300px] md:h-[560px] bg-slate-950/40 relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-contain p-4 md:p-8"
              />
            </div>

            {/* Right Details Side (45%) (Scaled Up Padding & Font) */}
            <div className="w-full md:w-[45%] p-6 sm:p-10 md:p-14 flex flex-col justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold font-['Poppins']">
                  Verified Credential
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-['Sora'] text-gray-100 mt-2 mb-4 leading-tight">
                  {certificate.title}
                </h2>
                <p className="text-[15px] md:text-base text-gray-300 leading-relaxed font-['Poppins']">
                  {certificate.description}
                </p>
              </div>

              <div>
                {/* Certified Skills list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {certificate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-semibold text-cyan-300 font-['Poppins']"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View verification button */}
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 inline-block text-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold tracking-wider transition shadow-[0_4px_15px_rgba(6,182,212,0.2)] hover:shadow-[0_4px_20px_rgba(6,182,212,0.4)] active:scale-95 duration-200"
                >
                  Verify Certificate ↗
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Certificates