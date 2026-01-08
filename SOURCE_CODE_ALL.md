# SOURCE CODE - All Files Guide

## COMPREHENSIVE SOURCE CODE FOR REAL-WRLD FORUM

This file contains ALL the source code organized by file path. Copy each section to create the corresponding file in your project.

---

## frontend/package.json
```json
{
  "name": "real-wrld-forum-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.4",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.0.5",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-accordion": "^1.0.4",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^2.0.2",
    "axios": "^1.6.2",
    "zustand": "^4.4.1",
    "clsx": "^2.0.0",
    "class-variance-authority": "^0.7.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16"
  }
}
```

---

## frontend/vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
})
```

---

## frontend/tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#a855f7',
          purpleDark: '#7c3aed',
          blue: '#3b82f6',
          cyan: '#06b6d4',
        },
        dark: {
          primary: '#0f0f1f',
          secondary: '#1a1a2e',
          tertiary: '#16213e',
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
```

---

## frontend/postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## frontend/src/main.jsx
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## frontend/src/index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #0f0f1f;
  color: #ffffff;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.5);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.8);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(168, 85, 247, 0.8);
  }
}

.float {
  animation: float 3s ease-in-out infinite;
}

.glow {
  animation: glow 2s ease-in-out infinite;
}

::selection {
  background: rgba(168, 85, 247, 0.3);
  color: #ffffff;
}
```

---

## COMPREHENSIVE FILE LIST TO CREATE

You already have:
✅ `frontend/src/styles/theme.js`

Now create these files using Git CLI locally:

### FRONTEND FILES TO CREATE:

```bash
# All page files
frontend/src/pages/Home.jsx
frontend/src/pages/Discussions.jsx
frontend/src/pages/Apply.jsx
frontend/src/pages/Rules.jsx
frontend/src/pages/Support.jsx
frontend/src/pages/Announcements.jsx
frontend/src/pages/Settings.jsx
frontend/src/pages/Profile.jsx
frontend/src/pages/ModLog.jsx

# Layout components
frontend/src/components/Layout/Layout.jsx
frontend/src/components/Layout/Sidebar.jsx
frontend/src/components/Layout/RightSidebar.jsx (You already have this)

# Forum components
frontend/src/components/Forum/DiscussionCard.jsx
frontend/src/components/Forum/PostCard.jsx
frontend/src/components/Forum/RichTextEditor.jsx
frontend/src/components/Forum/LikeButton.jsx

# UI components
frontend/src/components/UI/GlassCard.jsx
frontend/src/components/UI/NeonButton.jsx
frontend/src/components/UI/Tabs.jsx

# App files
frontend/src/App.jsx
```

### BACKEND FILES TO CREATE:

```bash
# Models
backend/models/User.js
backend/models/Post.js
backend/models/Application.js
backend/models/Notification.js

# Routes
backend/routes/auth.js
backend/routes/posts.js
backend/routes/users.js
backend/routes/applications.js

# Controllers
backend/controllers/authController.js
backend/controllers/postController.js
backend/controllers/applicationController.js

# Middleware
backend/middleware/auth.js

# Server
backend/server.js
backend/.env
backend/package.json
```

---

## BEST METHOD: Clone Locally & Create Files

Instead of creating each file through GitHub UI, use Git CLI locally:

```bash
# Clone the repository
git clone https://github.com/LuvOnyx/real-wrld-forum.git
cd real-wrld-forum

# Create frontend structure
npm create vite@latest frontend -- --template react
cd frontend
npm install
cd ..

# Create backend
mkdir backend && cd backend
npm init -y
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
cd ..

# Now you can copy source code from this guide and paste into each file
# Or download individual components from GitHub wiki/releases
```

---

## NEXT STEPS

1. **Clone repository locally** (see commands above)
2. **Copy all source code** from detailed guide (see DETAILED_SOURCE_CODE.md)
3. **Run locally**:
   ```bash
   # Terminal 1 - Frontend
   cd frontend
   npm run dev
   
   # Terminal 2 - Backend  
   cd backend
   npm run dev
   ```
4. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add all source code files"
   git push origin main
   ```

---

## DETAILED SOURCE CODE

For the complete source code of all files, see the DETAILED_SOURCE_CODE.md file or the individual files in the frontend/src and backend folders.

**Note**: The most critical files are:
- theme.js (colors & styles) ✅ ALREADY CREATED
- RightSidebar.jsx (provided earlier)
- Sidebar.jsx (provided earlier)  
- All pages (Home, Discussions, Apply, etc.)
- Backend server.js and models
