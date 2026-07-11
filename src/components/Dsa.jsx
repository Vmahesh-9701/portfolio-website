import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { dsaData } from '../data/DsaData'
import lc from '../assets/leetcode.jpg'

const Dsa = () => {
  const [stats, setStats] = useState({
    ...dsaData.fallbackStats,
    username: dsaData.username
  })
  const [topics, setTopics] = useState(dsaData.topics)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const usernameVal = dsaData.username
        const [profileRes, skillsRes] = await Promise.all([
          fetch(`https://leetcode-api-pied.vercel.app/user/${usernameVal}`),
          fetch(`https://leetcode-api-pied.vercel.app/user/${usernameVal}/skills`)
        ])

        if (!profileRes.ok) throw new Error('Failed to fetch LeetCode profile')

        const profileData = await profileRes.json()
        let skillsData = null
        try {
          if (skillsRes.ok) {
            skillsData = await skillsRes.json()
          }
        } catch (skillsErr) {
          console.warn('Could not parse skills data:', skillsErr.message)
        }

        let totalSolved = dsaData.fallbackStats.totalSolved
        let easySolved = dsaData.fallbackStats.easySolved
        let mediumSolved = dsaData.fallbackStats.mediumSolved
        let hardSolved = dsaData.fallbackStats.hardSolved
        let ranking = dsaData.fallbackStats.ranking
        let reputation = dsaData.fallbackStats.reputation
        let username = dsaData.username

        if (profileData) {
          if (profileData.username) username = profileData.username
          if (profileData.profile) {
            if (profileData.profile.ranking !== undefined) ranking = profileData.profile.ranking
            if (profileData.profile.reputation !== undefined) reputation = profileData.profile.reputation
          }
          if (profileData.submitStats && profileData.submitStats.acSubmissionNum) {
            for (const sub of profileData.submitStats.acSubmissionNum) {
              const diff = sub.difficulty
              const count = Number(sub.count)
              if (diff === 'All') totalSolved = count
              else if (diff === 'Easy') easySolved = count
              else if (diff === 'Medium') mediumSolved = count
              else if (diff === 'Hard') hardSolved = count
            }
          }
        }

        if (skillsData) {
          const calculatedTopicCounts = {
            "Arrays": 0,
            "Linked Lists": 0,
            "Trees & BST": 0,
            "Graphs": 0,
            "Dynamic Programming": 0,
            "Sorting & Searching": 0,
            "Backtracking": 0,
            "Stacks & Queues": 0,
          }

          const categories = ["fundamental", "intermediate", "advanced"]
          for (const category of categories) {
            if (skillsData[category]) {
              for (const tag of skillsData[category]) {
                const tagSlug = tag.tagSlug
                const count = Number(tag.problemsSolved || 0)

                if (tagSlug === "array") {
                  calculatedTopicCounts["Arrays"] += count
                } else if (tagSlug === "linked-list") {
                  calculatedTopicCounts["Linked Lists"] += count
                } else if (tagSlug === "tree" || tagSlug === "binary-tree" || tagSlug === "binary-search-tree") {
                  calculatedTopicCounts["Trees & BST"] += count
                } else if (tagSlug === "graph" || tagSlug === "graph-theory") {
                  calculatedTopicCounts["Graphs"] += count
                } else if (tagSlug === "dynamic-programming") {
                  calculatedTopicCounts["Dynamic Programming"] += count
                } else if (tagSlug === "sorting" || tagSlug === "binary-search") {
                  calculatedTopicCounts["Sorting & Searching"] += count
                } else if (tagSlug === "backtracking") {
                  calculatedTopicCounts["Backtracking"] += count
                } else if (tagSlug === "stack" || tagSlug === "queue") {
                  calculatedTopicCounts["Stacks & Queues"] += count
                }
              }
            }
          }

          const updatedTopics = dsaData.topics.map((topic) => {
            if (calculatedTopicCounts[topic.name] !== undefined) {
              return { ...topic, count: calculatedTopicCounts[topic.name] }
            }
            return topic
          })
          setTopics(updatedTopics)
        }

        setStats({
          username,
          totalSolved,
          easySolved,
          mediumSolved,
          hardSolved,
          totalEasy: dsaData.fallbackStats.totalEasy,
          totalMedium: dsaData.fallbackStats.totalMedium,
          totalHard: dsaData.fallbackStats.totalHard,
          ranking,
          reputation,
          badgesCount: dsaData.fallbackStats.badgesCount
        })
      } catch (err) {
        console.warn('LeetCode API fetch error. Using high-fidelity fallbacks:', err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  // Calculate percentages
  const easyPercent = Math.round((stats.easySolved / stats.totalEasy) * 100)
  const mediumPercent = Math.round((stats.mediumSolved / stats.totalMedium) * 100)
  const hardPercent = Math.round((stats.hardSolved / stats.totalHard) * 100)
  
  const totalInLeetcode = stats.totalEasy + stats.totalMedium + stats.totalHard
  const overallPercent = Math.round((stats.totalSolved / totalInLeetcode) * 100)

  // Circular progress configuration (Scaled Up from 180 to 210)
  const size = 210
  const strokeWidth = 16
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (overallPercent / 100) * circumference

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <div
      id="dsa"
      className="min-h-screen w-full px-6 md:px-16 py-16 md:py-24 text-white flex flex-col items-center gap-10 bg-[#070F2B] overflow-y-auto"
    >
      {/* Title section */}
      <div className="text-center mt-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora'] tracking-wide bg-linear-to-r from-orange-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
          LeetCode Analytics
        </h1>
        <p className="text-gray-400 mt-2 font-['Poppins'] tracking-wider text-sm md:text-base">
          My Data Structures & Algorithms Problem-Solving Journey
        </p>
      </div>

      {/* Main Grid Dashboard - 3 Symmetrical Cards (Scaled Up to max-w-8xl) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full max-w-8xl grid grid-cols-1 lg:grid-cols-3 gap-8 px-2"
      >
        {/* Card 1: Profile Summary & Circular Progress (Scaled Up Padding to p-10) */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl border border-orange-500/20 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.15)] p-6 sm:p-10 flex flex-col justify-between items-center text-center group hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:border-orange-500/40 transition duration-500"
        >
          <div className="w-full">
            {/* Header info */}
            <div className="flex items-center gap-4 justify-center mb-6">
              <img
                src={lc}
                alt="LeetCode"
                className="w-14 h-14 rounded-xl object-contain border border-amber-500/30 group-hover:scale-110 transition duration-300 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-200 tracking-wide font-['Sora']">
                  @{stats.username || dsaData.username}
                </h3>
                <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-full border border-orange-500/30 font-semibold font-['Poppins']">
                  Rank: #{stats.ranking.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Circular Progress SVG */}
            <div className="relative flex justify-center items-center my-8">
              <svg width={size} height={size} className="transform -rotate-90">
                <defs>
                  <linearGradient id="leetcodeProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
                {/* Background circle */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  className="stroke-slate-800"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                {/* Foreground circle */}
                <motion.circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke="url(#leetcodeProgressGradient)"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  strokeLinecap="round"
                />
              </svg>
              {/* Center Text */}
              <div className="absolute flex flex-col justify-center items-center">
                <span className="text-5xl font-extrabold text-white drop-shadow-md font-['Orbitron']">
                  {stats.totalSolved}
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                  Solved
                </span>
              </div>
            </div>
          </div>

          <div className="w-full mt-6">
            <div className="grid grid-cols-2 gap-4 bg-slate-900/40 p-4 rounded-2xl border border-white/5 mb-6 text-sm">
              <div className="text-center border-r border-white/10">
                <div className="text-gray-400 text-xs uppercase tracking-wide">Reputation</div>
                <div className="text-xl font-bold text-amber-400 mt-1">{stats.reputation}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-xs uppercase tracking-wide">Completed</div>
                <div className="text-xl font-bold text-orange-400 mt-1">{overallPercent}%</div>
              </div>
            </div>

            <a
              href={dsaData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 inline-block text-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 font-semibold tracking-wider text-black transition shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_4px_25px_rgba(249,115,22,0.5)] active:scale-95 duration-200"
            >
              View Official Profile ↗
            </a>
          </div>
        </motion.div>

        {/* Card 2: Difficulty Breakdown & Badges (Scaled Up Padding to p-10) */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl border border-orange-500/20 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.15)] p-6 sm:p-10 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:border-orange-500/40 transition duration-500"
        >
          {/* Difficulty progress bars */}
          <div>
            <h3 className="text-2xl font-bold font-['Sora'] tracking-wide mb-6 border-b border-white/10 pb-2">
              Difficulty Stats
            </h3>
            <div className="flex flex-col gap-6">
              {/* Easy */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Easy</span>
                  <span className="text-xs text-gray-400">
                    <strong className="text-emerald-400 text-sm">{stats.easySolved}</strong> / {stats.totalEasy}
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    className="h-full bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${easyPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Medium */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Medium</span>
                  <span className="text-xs text-gray-400">
                    <strong className="text-amber-400 text-sm">{stats.mediumSolved}</strong> / {stats.totalMedium}
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    className="h-full bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${mediumPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                  />
                </div>
              </div>

              {/* Hard */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-rose-500 uppercase tracking-wider">Hard</span>
                  <span className="text-xs text-gray-400">
                    <strong className="text-rose-500 text-sm">{stats.hardSolved}</strong> / {stats.totalHard}
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    className="h-full bg-rose-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${hardPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Badges section */}
          <div className="mt-8">
            <h4 className="text-lg font-bold font-['Sora'] mb-4 text-gray-300 tracking-wide">
              Badges Earned ({dsaData.badges.length})
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {dsaData.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="relative group/badge p-3 bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-orange-500/30 rounded-2xl flex flex-col items-center justify-center transition duration-300 cursor-help"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center text-2xl shadow-lg mb-2 transform group-hover/badge:scale-110 transition duration-300`}>
                    {badge.icon}
                  </div>
                  <span className="text-[10px] text-center text-gray-300 font-semibold truncate w-full">
                    {badge.name}
                  </span>

                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover/badge:flex flex-col items-center w-48 z-10">
                    <div className="bg-slate-950 text-xs text-gray-200 p-2.5 rounded-lg border border-white/10 shadow-2xl text-center">
                      <p className="font-bold text-amber-400">{badge.name}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5 leading-snug">{badge.description}</p>
                    </div>
                    <div className="w-2 h-2 bg-slate-950 border-r border-b border-white/10 transform rotate-45 -mt-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 3: DSA Topics Progress (Scaled Up Padding to p-10) */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl border border-orange-500/20 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.15)] p-6 sm:p-10 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:border-orange-500/40 transition duration-500"
        >
          <div>
            <h3 className="text-2xl font-bold font-['Sora'] tracking-wide mb-6 border-b border-white/10 pb-2">
              Topic Proficiency
            </h3>
            <div className="grid grid-cols-1 gap-4 max-h-[380px] overflow-y-auto pr-2 no-scrollbar">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="p-3.5 bg-slate-900/50 border border-white/5 rounded-2xl flex flex-col gap-2 hover:border-orange-500/30 hover:scale-[1.02] duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-200 truncate pr-1">
                      {topic.name}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-bold bg-white/10"
                      style={{ color: topic.color }}
                    >
                      {topic.count} solved
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(100, (topic.count / 45) * 100)}%`,
                        backgroundColor: topic.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Dsa