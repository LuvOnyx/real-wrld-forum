import React from 'react';
import { motion } from 'framer-motion';
import { THEME_COLORS } from '../../styles/theme';
import { HiUser, HiCog6Tooth, HiArrowRightOnRectangle } from 'react-icons/hi2';

const RightSidebar = () => {
  const user = {
    name: 'Mike Respondi',
    email: 'mikeyrrespondi@gma...',
    role: 'Admin',
    avatar: 'M',
    posts: 0,
    replies: 0
  };

  const recentActivity = [
    { type: 'created', user: 'Marcus_RP', action: 'created a new post', time: '2m ago', avatar: 'M' },
    { type: 'replied', user: 'SkyWalker', action: 'replied to a post', time: '5m ago', avatar: 'S' },
    { type: 'joined', user: 'NightRider', action: 'joined the server', time: '12m ago', avatar: 'N' },
  ];

  return (
    <div className="h-screen flex flex-col sticky top-0 overflow-y-auto" style={{ backgroundColor: THEME_COLORS.bg.secondary }}>
      {/* User Profile Section */}
      <motion.div
        className="p-6 border-b"
        style={{ borderColor: THEME_COLORS.bg.tertiary }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Avatar */}
        <motion.div
          className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center font-bold text-2xl"
          style={{ background: `linear-gradient(135deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary})` }}
          whileHover={{ scale: 1.05 }}
        >
          {user.avatar}
        </motion.div>

        {/* User Info */}
        <div className="text-center">
          <h3 className="font-bold text-lg" style={{ color: THEME_COLORS.text.primary }}>
            {user.name}
          </h3>
          <p className="text-xs mt-1" style={{ color: THEME_COLORS.text.secondary }}>
            {user.email}
          </p>
          <div className="mt-2 flex items-center justify-center gap-1">
            <HiUser className="w-3 h-3" style={{ color: THEME_COLORS.secondary2 }} />
            <span className="text-xs font-semibold" style={{ color: THEME_COLORS.secondary2 }}>
              {user.role}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <motion.div
            className="p-3 rounded-lg text-center"
            style={{ backgroundColor: THEME_COLORS.bg.tertiary }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-2xl font-bold" style={{ color: THEME_COLORS.text.primary }}>
              {user.posts}
            </p>
            <p className="text-xs mt-1" style={{ color: THEME_COLORS.text.secondary }}>Posts</p>
          </motion.div>
          <motion.div
            className="p-3 rounded-lg text-center"
            style={{ backgroundColor: THEME_COLORS.bg.tertiary }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-2xl font-bold" style={{ color: THEME_COLORS.text.primary }}>
              {user.replies}
            </p>
            <p className="text-xs mt-1" style={{ color: THEME_COLORS.text.secondary }}>Replies</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="p-4 space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <button
          className="w-full px-4 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90"
          style={{ backgroundColor: `${THEME_COLORS.primary}20`, color: THEME_COLORS.primary }}
        >
          <HiUser className="w-4 h-4" />
          My Profile
        </button>
        <button
          className="w-full px-4 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90"
          style={{ backgroundColor: `${THEME_COLORS.primary}20`, color: THEME_COLORS.primary }}
        >
          <HiCog6Tooth className="w-4 h-4" />
          Settings
        </button>
        <button
          className="w-full px-4 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90"
          style={{ backgroundColor: `${THEME_COLORS.danger}20`, color: THEME_COLORS.danger }}
        >
          <HiArrowRightOnRectangle className="w-4 h-4" />
          Sign Out
        </button>
      </motion.div>

      {/* Recent Activity Section */}
      <motion.div
        className="flex-1 p-4 border-t"
        style={{ borderColor: THEME_COLORS.bg.tertiary }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h4 className="text-sm font-bold uppercase mb-4" style={{ color: THEME_COLORS.text.secondary }}>
          RECENT ACTIVITY
        </h4>

        <div className="space-y-3">
          {recentActivity.map((activity, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-lg hover:opacity-80 transition-all cursor-pointer"
              style={{ backgroundColor: `${THEME_COLORS.primary}10` }}
              whileHover={{ x: 4 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.05 }}
            >
              {/* Avatar */}
              <motion.div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary})` }}
              >
                {activity.avatar}
              </motion.div>

              {/* Activity Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold" style={{ color: THEME_COLORS.text.primary }}>
                  <span style={{ color: THEME_COLORS.primary }}>{activity.user}</span>
                  <span className="mx-1" style={{ color: THEME_COLORS.text.secondary }}>-</span>
                  <span style={{ color: THEME_COLORS.text.secondary }}>{activity.action}</span>
                </p>
                <p className="text-xs mt-1" style={{ color: THEME_COLORS.text.secondary }}>
                  ⏰ {activity.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RightSidebar;
