import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const { name, email, subject, message } = formState
    
    // Construct the email body
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    
    // Create mailto link pointing to the user's real email
    const mailtoLink = `mailto:maheshnagagopiveeramallu@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`
    
    // Open default mail client
    window.location.href = mailtoLink
    
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div
      id="contact"
      className="relative min-h-screen px-6 py-24 text-white flex flex-col justify-center items-center gap-12 bg-[#070F2B] overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl -z-10 pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold font-['Sora'] tracking-wide bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
          Get In Touch
        </h1>
        <p className="text-gray-400 mt-2 font-['Poppins'] tracking-wider text-sm md:text-base">
          Have a project in mind, a question, or just want to say hello?
        </p>
      </motion.div>

      {/* Contact Grid layout (Scaled Up to max-w-7xl) */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch z-10 px-2">
        {/* Left Column: Info Card (Span 2) (Scaled Up padding to p-12) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.1)] p-10 md:p-12 flex flex-col justify-between hover:border-cyan-400/35 transition duration-500"
        >
          <div>
            <h3 className="text-2xl font-bold font-['Sora'] text-gray-100 mb-6">
              Contact Information
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-300 mb-8 font-['Poppins']">
              Feel free to drop a message. I'm always open to discussing new development opportunities, open-source projects, or algorithmic problems!
            </p>

            {/* Details */}
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl font-bold">
                  ✉
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-['Poppins']">Email</h4>
                  <a
                    href="mailto:maheshnagagopiveeramallu@gmail.com"
                    className="text-sm font-semibold text-gray-200 mt-0.5 hover:text-cyan-400 transition"
                  >
                    maheshnagagopiveeramallu@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center text-indigo-400 text-xl font-bold">
                  📍
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-['Poppins']">Location</h4>
                  <p className="text-sm font-semibold text-gray-200 mt-0.5">Andhra Pradesh, India</p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-xl font-bold">
                  🟢
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-['Poppins']">Open to work</h4>
                  <p className="text-sm font-semibold text-gray-200 mt-0.5">Java Full Stack Roles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Profile CTA */}
          <div className="mt-10 border-t border-white/5 pt-6 text-xs text-gray-400 font-['Poppins']">
            © {new Date().getFullYear()} Mahesh. Powered by React.
          </div>
        </motion.div>

        {/* Right Column: Contact Form (Span 3) (Scaled Up padding to p-12) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-3 rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.1)] p-10 md:p-12 hover:border-cyan-400/35 transition duration-500"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wider text-gray-400 font-['Poppins']" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Naga Gopi"
                  className="bg-slate-950/40 border border-white/10 focus:border-cyan-400/50 rounded-2xl p-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wider text-gray-400 font-['Poppins']" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="gopi@example.com"
                  className="bg-slate-950/40 border border-white/10 focus:border-cyan-400/50 rounded-2xl p-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition duration-300"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-gray-400 font-['Poppins']" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                placeholder="Job Inquiry / Collaboration Opportunity"
                className="bg-slate-950/40 border border-white/10 focus:border-cyan-400/50 rounded-2xl p-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition duration-300"
              />
            </div>

            {/* Message (Scaled Up height to rows=7) */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-gray-400 font-['Poppins']" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows="7"
                placeholder="Write your message here..."
                className="bg-slate-950/40 border border-white/10 focus:border-cyan-400/50 rounded-2xl p-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={sent}
              className={`w-full py-4 rounded-2xl font-bold tracking-wider transition-all duration-300 active:scale-98 text-center cursor-pointer ${
                sent
                  ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:from-cyan-600 hover:to-blue-700'
              }`}
            >
              {sent ? 'Message Sent Successfully! ✓' : 'Send Message ✉'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
