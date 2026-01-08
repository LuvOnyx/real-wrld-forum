import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { THEME_COLORS } from '../../styles/theme';
import * as Icons from 'react-icons/all';
import { HiHome, HiChatBubbleLeft, HiBellAlert, HiShieldCheck, HiStar, HiQuestionMarkCircle, HiCog6Tooth, HiShieldExclamation } from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isServerOnline] = useState(true);

  const mainMenuItems = [
    { icon: HiHome, label: 'Home', path: '/' },
    { icon: HiChatBubbleLeft, label: 'Discussions', path: '/discussions' },
    { icon: HiBellAlert, label: 'Announcements', path: '/announcements' },
    { icon: HiShieldCheck, label: 'Server Rules', path: '/rules' },
  ];

  const actionItems = [
    { icon: HiStar, label: 'Apply Now', path: '/apply', badge: 'NEW' },
    { icon: HiQuestionMarkCircle, label: 'Support', path: '/support' },
    { icon: HiCog6Tooth, label: 'Settings', path: '/settings' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-screen flex flex-col sticky top-0" style={{ backgroundColor: THEME_COLORS.bg.secondary }}>
      {/* Logo */}
      <motion.div 
        className="p-4 border-b"
        style={{ borderColor: THEME_COLORS.bg.tertiary }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
            style={{ background: `linear-gradient(135deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary})` }}
          >
            R
          </div>
          <div className="text-xs">
            <p className="font-bold" style={{ color: THEME_COLORS.primary }}>Real-Wrld</p>
            <p className="text-xs opacity-60" style={{ color: THEME_COLORS.text.secondary }}>FIVEM COMMUNITY</p>
          </div>
        </div>
      </motion.div>

      {/* Main Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        {mainMenuItems.map((item, idx) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link to={item.path}>
                <div 
                  className="mx-3 px-3 py-2.5 rounded-lg mb-2 flex items-center gap-3 cursor-pointer transition-all"
                  style={{
                    backgroundColor: active ? THEME_COLORS.primary + '20' : 'transparent',
                    borderLeft: active ? `3px solid ${THEME_COLORS.primary}` : 'none'
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: active ? THEME_COLORS.primary : THEME_COLORS.text.secondary }} />
                  <span style={{ color: active ? THEME_COLORS.text.primary : THEME_COLORS.text.secondary }} className="text-sm font-medium">
                    {item.label}
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}

        {/* Divider */}
        <div className="my-4 mx-3" style={{ borderTop: `1px solid ${THEME_COLORS.bg.tertiary}` }} />

        {/* Action Items */}
        {actionItems.map((item, idx) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <motion.div
              key={`action-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (mainMenuItems.length + idx) * 0.05 }}
            >
              <Link to={item.path}>
                <div 
                  className="mx-3 px-3 py-2.5 rounded-lg mb-2 flex items-center gap-3 cursor-pointer transition-all relative"
                  style={{
                    backgroundColor: active ? THEME_COLORS.primary + '20' : 'transparent',
                    borderLeft: active ? `3px solid ${THEME_COLORS.primary}` : 'none'
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: active ? THEME_COLORS.primary : THEME_COLORS.text.secondary }} />
                  <span style={{ color: active ? THEME_COLORS.text.primary : THEME_COLORS.text.secondary }} className="text-sm font-medium">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="ml-auto px-2 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: THEME_COLORS.primary, color: THEME_COLORS.text.primary }}>
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Moderation Section */}
      <div className="border-t p-4" style={{ borderColor: THEME_COLORS.bg.tertiary }}>
        <p className="text-xs font-bold uppercase" style={{ color: THEME_COLORS.text.secondary }}>MODERATION</p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/modlog">
            <div className="mt-3 px-3 py-2.5 rounded-lg flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all">
              <HiShieldExclamation className="w-5 h-5" style={{ color: THEME_COLORS.text.secondary }} />
              <span style={{ color: THEME_COLORS.text.secondary }} className="text-sm font-medium">Mod Log</span>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Server Status */}
      <div className="p-4 border-t" style={{ borderColor: THEME_COLORS.bg.tertiary }}>
        <motion.div
          className="p-3 rounded-lg"
          style={{ backgroundColor: THEME_COLORS.bg.tertiary }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: isServerOnline ? THEME_COLORS.success : THEME_COLORS.danger }} />
            <span className="text-xs font-bold" style={{ color: isServerOnline ? THEME_COLORS.success : THEME_COLORS.danger }}>SERVER ONLINE</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold" style={{ color: THEME_COLORS.text.primary }}>128</span>
            <span className="text-sm" style={{ color: THEME_COLORS.text.secondary }}>/256 Players Online</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sidebar;
