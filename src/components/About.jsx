import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  // Define educational journey checkpoints
  const checkpoints = [
    {
      id: '10th',
      title: '10th Class',
      subtitle: 'S.N.N.Z.P.H School',
      description: 'Formed logical and analytical foundations in Mathematics and Science.',
      x: 200,
      y: 100,
      cardX: 100,
      cardY: 135,
      direction: 'down',
      color: '#38bdf8'
    },
    {
      id: 'diploma',
      title: 'Diploma (CSE)',
      subtitle: 'AANM & VVRSR Polytechnic',
      description: 'Introduced core concepts of computer programming, networks, and databases.',
      x: 440,
      y: 120,
      cardX: 340,
      cardY: 15,
      direction: 'up',
      color: '#818cf8'
    },
    {
      id: 'btech',
      title: 'B.Tech (CSE)',
      subtitle: 'SRKR Eng. College',
      description: 'Deepened expertise in advanced DSA, full-stack microservices, and system design.',
      x: 680,
      y: 100,
      cardX: 580,
      cardY: 135,
      direction: 'down',
      color: '#fb7185'
    },
    {
      id: 'forward',
      title: 'Forward',
      subtitle: 'Career Horizons',
      description: 'Solving complex algorithmic problems, building scale backends, and cloud apps.',
      x: 860,
      y: 120,
      cardX: 760,
      cardY: 15,
      direction: 'up',
      color: '#2dd4bf'
    }
  ]

  return (
    <div
      id="about"
      className="relative min-h-screen px-6 py-24 text-white flex flex-col justify-center items-center gap-6 bg-[#070F2B] overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10 pointer-events-none" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold font-['Sora'] tracking-wide bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-md text-center"
      >
        About Me
      </motion.h1>

      {/* Glass card container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-7xl rounded-[40px] border border-cyan-400/20 bg-white/5 backdrop-blur-md shadow-[0_0_60px_rgba(34,211,238,0.15)] p-10 md:p-16 hover:shadow-[0_0_80px_rgba(34,211,238,0.25)] hover:border-cyan-400/45 transition duration-500 flex flex-col gap-10"
      >
        <div>
          <p className="text-[1.2rem] md:text-[1.42rem] leading-relaxed text-zinc-200 font-['Poppins']">
            I’m a <span className="text-cyan-400 font-semibold drop-shadow-sm">B.Tech Computer Science</span> student passionate about <span className="text-cyan-400 font-semibold drop-shadow-sm">Java Full Stack Development</span> and building modern, scalable, and user-friendly web applications. I enjoy transforming ideas into real-world projects and continuously improving my development skills through hands-on learning and practical experience.
          </p>
          <br />
          <p className="text-[1.2rem] md:text-[1.42rem] leading-relaxed text-zinc-200 font-['Poppins']">
            I have a strong interest in <span className="text-cyan-400 font-semibold drop-shadow-sm">Data Structures and Algorithms</span>, <span className="text-cyan-400 font-semibold drop-shadow-sm">problem-solving</span>, and writing clean, efficient code. I regularly practice coding on LeetCode to strengthen my logical thinking and enhance my understanding of software development concepts. Along with web development, I enjoy exploring new technologies and building projects that solve real-world problems and improve user experience.
          </p>
        </div>

        {/* Education Roadmap Journey Section (Clean divider, no duplicate headings) */}
        <div className="w-full border-t border-cyan-500/10 pt-10 flex flex-col gap-4">
          {/* Interactive Roadmap Map Container */}
          <div className="w-full rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur-xs overflow-hidden relative p-1 md:p-3">
            <svg
              viewBox="0 0 1000 220"
              className="w-full h-auto drop-shadow-xl"
              style={{ minHeight: '190px' }}
            >
              <defs>
                <filter id="glow-light" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-mid" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                {/* Winding road gradient */}
                <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="33%" stopColor="#818cf8" />
                  <stop offset="66%" stopColor="#fb7185" />
                  <stop offset="100%" stopColor="#2dd4bf" />
                </linearGradient>
              </defs>

              {/* Custom CSS classes in SVG */}
              <style>{`
                @keyframes pulseRing {
                  0% { r: 5; opacity: 0.8; }
                  100% { r: 18; opacity: 0; }
                }
                @keyframes flowLine {
                  to { stroke-dashoffset: -20; }
                }
                .svg-animate-ring {
                  transform-origin: center;
                  animation: pulseRing 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
                }
                .svg-animate-flow {
                  stroke-dasharray: 5, 5;
                  animation: flowLine 1.5s linear infinite;
                }
              `}</style>

              {/* Grid Lines in background for CAD feel */}
              <g stroke="rgba(34,211,238,0.015)" strokeWidth="0.75" strokeDasharray="4,4">
                {[40, 80, 120, 160, 200].map((ly) => (
                  <line key={`hy-${ly}`} x1="30" y1={ly} x2="970" y2={ly} />
                ))}
                {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((lx) => (
                  <line key={`vx-${lx}`} x1={lx} y1="10" x2={lx} y2="210" />
                ))}
              </g>

              {/* The Winding Journey Road Line */}
              <g>
                {/* Background Shadow Road */}
                <path
                  d="M 80 110 Q 200 90, 320 110 T 560 110 T 800 110 T 920 110"
                  fill="transparent"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                {/* Main Colored Gradient Road */}
                <path
                  d="M 80 110 Q 200 90, 320 110 T 560 110 T 800 110 T 920 110"
                  fill="transparent"
                  stroke="url(#roadGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="opacity-40"
                />
                {/* Animated Pulsing Stream Flow */}
                <path
                  d="M 80 110 Q 200 90, 320 110 T 560 110 T 800 110 T 920 110"
                  fill="transparent"
                  stroke="url(#roadGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="svg-animate-flow"
                  filter="url(#glow-light)"
                />
              </g>

              {/* Checkpoints Cards (ForeignObjects for HTML rendering) */}
              {checkpoints.map((cp) => (
                <foreignObject
                  key={`card-${cp.id}`}
                  x={cp.cardX}
                  y={cp.cardY}
                  width="200"
                  height="75"
                >
                  <div 
                    className="p-2 rounded-xl text-left border bg-slate-900/80 backdrop-blur-xs select-none transition duration-300 hover:scale-[1.03]"
                    style={{ borderColor: `${cp.color}25` }}
                  >
                    <div className="flex items-center gap-1">
                      <span 
                        className="w-1.5 h-1.5 rounded-full inline-block" 
                        style={{ backgroundColor: cp.color, boxShadow: `0 0 6px ${cp.color}` }}
                      />
                      <h4 className="font-bold text-[11px] font-['Sora'] text-gray-200">
                        {cp.title}
                      </h4>
                    </div>
                    <p 
                      className="text-[8px] font-semibold tracking-wider font-['Poppins'] uppercase mt-0.2"
                      style={{ color: cp.color }}
                    >
                      {cp.subtitle}
                    </p>
                    <p className="text-[9px] text-zinc-400 font-['Poppins'] mt-0.5 leading-tight">
                      {cp.description}
                    </p>
                  </div>
                </foreignObject>
              ))}

              {/* Interactive Milestone Checkpoint Nodes (Styled as Map Pins) */}
              {checkpoints.map((cp, idx) => {
                const anchorY1 = cp.direction === 'up' ? cp.y - 48 : cp.y
                const anchorY2 = cp.direction === 'up' ? cp.cardY + 75 : cp.cardY
                
                return (
                  <g key={`node-${cp.id}`} className="group/node cursor-pointer">
                    {/* Anchor lines to cards */}
                    <line
                      x1={cp.x}
                      y1={anchorY1}
                      x2={cp.x}
                      y2={anchorY2}
                      stroke={cp.color}
                      strokeWidth="0.75"
                      strokeDasharray="2,3"
                      className="opacity-40 group-hover/node:opacity-80 transition duration-300"
                    />
                    
                    {/* Pulsing expand ring on the base map coordinate */}
                    <circle
                      cx={cp.x}
                      cy={cp.y}
                      r="20"
                      fill="transparent"
                      stroke={cp.color}
                      strokeWidth="1.5"
                      className="svg-animate-ring"
                      style={{ animationDelay: `${idx * 0.42}s`, transformOrigin: `${cp.x}px ${cp.y}px` }}
                    />
                    
                    {/* Map Pin Teardrop Shape */}
                    <g transform={`translate(${cp.x}, ${cp.y})`}>
                      <path
                        d="M 0 0 C -10 -11 -17 -22 -17 -31 A 17 17 0 1 1 17 -31 C 17 -22 10 -11 0 0 Z"
                        fill={cp.color}
                        filter="url(#glow-light)"
                        className="transition duration-300 group-hover:scale-115 origin-bottom"
                        style={{ transformOrigin: '0px 0px' }}
                      />
                      {/* Inner dot inside pin head */}
                      <circle
                        cx="0"
                        cy="-31"
                        r="5.5"
                        fill="#ffffff"
                      />
                    </g>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About