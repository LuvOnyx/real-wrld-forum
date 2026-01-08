import React from 'react';
import { motion } from 'framer-motion';
import { THEME_COLORS } from '../styles/theme';

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-auto" style={{ backgroundColor: THEME_COLORS.bg.primary }}>
      <motion.div
        className="max-w-2xl mx-auto px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Live Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ backgroundColor: `${THEME_COLORS.primary}20`, border: `1px solid ${THEME_COLORS.primary}` }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_COLORS.primary }} />
          <span style={{ color: THEME_COLORS.primary }} className="text-sm font-semibold">NOW LIVE</span>
        </motion.div>

        {/* Season Badge */}
        <motion.div
          className="inline-block px-3 py-1 rounded-lg ml-2 text-xs"
          style={{ backgroundColor: THEME_COLORS.bg.tertiary, color: THEME_COLORS.text.secondary }}
        >
          Season 1
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-6xl font-bold mt-8 mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span style={{ color: THEME_COLORS.text.primary }}>Welcome to </span>
          <span style={{ background: `linear-gradient(135deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Real-Wrld
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg mb-12 leading-relaxed"
          style={{ color: THEME_COLORS.text.secondary }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Experience the most immersive FiveM roleplay server with a passionate community, custom scripts, and endless possibilities. Your story starts here.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            className="px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
            style={{ background: `linear-gradient(135deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary2})` }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ color: '#fff' }}>Apply Now</span>
            <span>→</span>
          </motion.button>
          <motion.button
            className="px-8 py-3 rounded-lg font-semibold border border-current transition-all"
            style={{ borderColor: THEME_COLORS.secondary2, color: THEME_COLORS.secondary2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Server Rules
          </motion.button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          className="grid grid-cols-4 gap-4 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { label: 'Members', value: '2' },
            { label: 'Online Now', value: '128' },
            { label: 'Forum Posts', value: '3' },
            { label: 'Rating', value: '4.9' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-4 rounded-lg"
              style={{ backgroundColor: THEME_COLORS.bg.tertiary }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl font-bold" style={{ color: THEME_COLORS.text.primary }}>
                {stat.value}
              </p>
              <p className="text-xs mt-2" style={{ color: THEME_COLORS.text.secondary }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
