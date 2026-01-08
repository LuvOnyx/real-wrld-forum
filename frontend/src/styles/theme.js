export const THEME_COLORS = {
  // Neon Purple & Blue (Exact from Base44)
  primary: '#a855f7', // Vibrant Purple
  primaryDark: '#7c3aed', // Darker Purple
  secondary: '#3b82f6', // Electric Blue
  secondary2: '#06b6d4', // Cyan
  accent: '#a855f7', // Neon Purple
  
  // Dark backgrounds (Glassmorphism)
  bg: {
    primary: '#0f0f1f', // Deep dark
    secondary: '#1a1a2e', // Slightly lighter
    tertiary: '#16213e', // Card background
    overlay: 'rgba(15, 15, 31, 0.8)', // Glassmorphism overlay
  },
  
  // Text colors
  text: {
    primary: '#ffffff',
    secondary: '#b0b0c3',
    tertiary: '#8a8a9e',
  },
  
  // Status colors
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
  
  // Glows
  glow: {
    purple: '0 0 20px rgba(168, 85, 247, 0.5)',
    blue: '0 0 20px rgba(59, 130, 246, 0.5)',
    cyan: '0 0 15px rgba(6, 182, 212, 0.4)',
  },
};

export const GLASS_EFFECT = {
  base: 'backdrop-blur-md bg-opacity-10 border border-opacity-20 border-white',
  hover: 'hover:bg-opacity-15 hover:border-opacity-30',
};
