import React from 'react'
import { motion } from 'framer-motion'
import ProfileImg from '../assets/Profile.png'

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 gap-12 mt-[10vh] overflow-hidden bg-[#070F2B]"
    >
      {/* Space Theme Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl -z-10 pointer-events-none" />

      {/* Left Text Content Container */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full md:w-1/2 flex flex-col justify-center gap-6 z-10"
      >
        <span className="text-sm uppercase tracking-widest text-cyan-400 font-semibold font-['Poppins']">
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide font-['Sora'] leading-tight">
          Hi, I'm <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
            Veeramallu Mahesh
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-amber-200/90 font-['Poppins']">
          Java Full Stack Developer & DSA Solver
        </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
          Passionate about engineering scalable backend microservices, crafting elegant responsive frontends, and resolving algorithmic challenges on LeetCode. Focused on clean design and real-world impact.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          <a href="#projects">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold tracking-wider transition shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:scale-105 active:scale-95 duration-200">
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 text-white font-semibold tracking-wider transition hover:scale-105 active:scale-95 duration-200">
              Get In Touch
            </button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-slate-900/60 border border-white/5 hover:border-cyan-400/50 hover:bg-cyan-500/10 flex items-center justify-center transition duration-300 text-gray-400 hover:text-cyan-400 hover:scale-110 shadow-md"
            title="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-slate-900/60 border border-white/5 hover:border-indigo-400/50 hover:bg-indigo-500/10 flex items-center justify-center transition duration-300 text-gray-400 hover:text-indigo-400 hover:scale-110 shadow-md"
            title="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Mahesh_541/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-slate-900/60 border border-white/5 hover:border-orange-400/50 hover:bg-orange-500/10 flex items-center justify-center transition duration-300 text-gray-400 hover:text-orange-400 hover:scale-110 shadow-md"
            title="LeetCode"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.211.451-1.677 0l-4.51-4.375a1.252 1.252 0 0 1 0-1.707l4.51-4.375c.466-.451 1.211-.451 1.677 0l2.69 2.607a1.232 1.232 0 0 1 0 1.707 1.252 1.252 0 0 1-1.677 0l-1.85-1.794-2.833 2.748 2.833 2.748 1.85-1.794a1.252 1.252 0 0 1 1.677 0 1.232 1.232 0 0 1 0 1.707zm.843-7.558l3.053-2.959a1.252 1.252 0 0 0 0-1.707l-4.51-4.375a1.252 1.252 0 0 0-1.677 0l-3.053 2.959a1.252 1.252 0 0 0 0 1.707l4.51 4.375a1.252 1.252 0 0 0 1.677 0z" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Right Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="w-full md:w-1/2 flex justify-center items-center z-10"
      >
        <div className="relative group">
          {/* Animated glow background behind image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-600 blur-3xl opacity-50 group-hover:opacity-75 transition duration-500 scale-105" />
          <img
            className="relative h-[55vh] w-[55vh] object-cover border-10 border-blue-200 rounded-full shadow-[0_0_80px_rgba(34,211,238,0.55)] group-hover:scale-[1.03] transition duration-500"
            src={ProfileImg}
            alt="Profile"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Home