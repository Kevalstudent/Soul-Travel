# Soul Travel - Complete Project Files

Copy each section below into the corresponding file in your GitHub repository.

## 1. Root Configuration Files

### package.json
```json
{
  "name": "soul-travel",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "python -m http.server 8000 --directory dist",
    "serve-py": "python serve.py",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@types/axios": "^0.9.36",
    "@types/react-router-dom": "^5.3.3",
    "axios": "^1.10.0",
    "framer-motion": "^12.23.5",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.6.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Soul Travel - Comprehensive Travel Platform</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

### tsconfig.app.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

### tsconfig.node.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

### eslint.config.js
```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
```

### .env.example
```env
# Amadeus API (for flights)
VITE_AMADEUS_CLIENT_ID=m4TOOJlYRyDE8eCIlWA6zvVcA4F19Gm3
VITE_AMADEUS_CLIENT_SECRET=c4EuJPcASGXA1Nrs

# Booking.com API (for accommodations)
VITE_BOOKING_API_KEY=your_booking_rapidapi_key

# Skyscanner API (alternative flight search)
VITE_SKYSCANNER_API_KEY=your_skyscanner_rapidapi_key

# OpenCage Geocoding API (for location search)
VITE_OPENCAGE_API_KEY=your_opencage_api_key

# OpenWeatherMap API (for weather data)
VITE_OPENWEATHER_API_KEY=your_openweather_api_key

# Google Maps API (for map functionality)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build outputs
build/
out/

# Cache
.cache/
.parcel-cache/

# OS generated files
Thumbs.db
ehthumbs.db
Desktop.ini
$RECYCLE.BIN/
```

## 2. Source Files (src/)

### src/main.tsx
```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/vite-env.d.ts
```typescript
/// <reference types="vite/client" />
```

### src/App.tsx
```typescript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import AccommodationPage from './pages/AccommodationPage';
import ConnectPage from './pages/ConnectPage';
import EntertainmentPage from './pages/EntertainmentPage';
import SupportPage from './pages/SupportPage';
import TourismPage from './pages/TourismPage';
import TransportPage from './pages/TransportPage';
import TravelPage from './pages/TravelPage';
import BookNowPage from './pages/BookNowPage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/entertainment" element={<EntertainmentPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/tourism" element={<TourismPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/book-now" element={<BookNowPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
```

---

**This is a large project with 40+ files. Would you like me to:**

1. **Continue with all the remaining files** (components, pages, services, etc.) in this format?
2. **Create a downloadable archive** with all files properly organized?
3. **Provide a GitHub repository template** that you can fork/clone?

The complete project includes:
- 11 page components (HomePage, FlightsPage, etc.)
- 3 reusable components (Layout, CurrencySelector, AirportAutocomplete)
- 2 custom hooks (useFlightSearch, useAccommodationSearch)
- 2 service files (API integration, currency conversion)
- 1 context (ThemeContext)
- Plus all configuration files

Let me know how you'd prefer to receive the remaining files!