# Soul Travel - Complete Project Setup for GitHub

This document contains all the code and files needed to set up the Soul Travel project on GitHub.

## Project Structure

```
soul-travel/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── CurrencySelector.tsx
│   │   └── AirportAutocomplete.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   ├── useFlightSearch.ts
│   │   └── useAccommodationSearch.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── FlightsPage.tsx
│   │   ├── AccommodationPage.tsx
│   │   ├── ConnectPage.tsx
│   │   ├── EntertainmentPage.tsx
│   │   ├── SupportPage.tsx
│   │   ├── TourismPage.tsx
│   │   ├── TransportPage.tsx
│   │   ├── TravelPage.tsx
│   │   ├── BookNowPage.tsx
│   │   └── MapPage.tsx
│   ├── services/
│   │   ├── api.ts
│   │   └── currencyService.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── README-Python-Server.md
├── serve.py
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── create-archive.js
```

## Setup Instructions

1. Create a new repository on GitHub
2. Clone the repository locally
3. Copy all the files from this archive into your local repository
4. Run the following commands:

```bash
npm install
npm run dev
```

## Files to Copy

Below are all the files you need to copy to your GitHub repository:

---

## Root Files

### package.json
```json
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
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

### README.md
```markdown
# Soul Travel - Comprehensive Travel Platform

A modern, full-featured travel platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Flight Search**: Real-time flight search with Amadeus API integration
- **Accommodation Search**: Hotel and property search with Booking.com API
- **Travel Community**: Connect with other travelers, share experiences
- **Entertainment**: Discover events and activities worldwide
- **Support Services**: Hire professional services (maids, babysitters, chefs, etc.)
- **Tourism**: Explore attractions and cultural highlights
- **Transport**: Book various transportation options
- **Travel Planning**: Custom itineraries and travel packages
- **Interactive Map**: Visual exploration of destinations
- **Responsive Design**: Works perfectly on all devices

## API Integration

### Required API Keys

1. **Amadeus API** (Flights)
   - Sign up at: https://developers.amadeus.com/
   - Get Client ID and Client Secret
   - Free tier: 2,000 API calls/month

2. **Booking.com API** (Accommodations)
   - Available through RapidAPI: https://rapidapi.com/apidojo/api/booking/
   - Subscription required for production use

3. **OpenCage Geocoding API** (Location Services)
   - Sign up at: https://opencagedata.com/
   - Free tier: 2,500 requests/day

4. **OpenWeatherMap API** (Weather Data)
   - Sign up at: https://openweathermap.org/api
   - Free tier: 1,000 calls/day

### Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env`
4. Add your API keys to the `.env` file
5. Start the development server: `npm run dev`

### API Configuration

The application includes fallback mock data when APIs are unavailable or rate-limited. This ensures the application remains functional during development and testing.

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── services/           # API services and utilities
└── types/              # TypeScript type definitions
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## API Usage Examples

### Flight Search
```typescript
import { amadeusAPI } from './services/api';

const searchFlights = async () => {
  const results = await amadeusAPI.searchFlights({
    from: 'NYC',
    to: 'LON',
    departDate: '2025-03-15',
    adults: 2,
    children: 0,
    infants: 0,
    class: 'economy'
  });
};
```

### Accommodation Search
```typescript
import { bookingAPI } from './services/api';

const searchHotels = async () => {
  const results = await bookingAPI.searchHotels({
    destination: 'London',
    checkIn: '2025-03-15',
    checkOut: '2025-03-18',
    guests: 2,
    rooms: 1
  });
};
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

© 2025 Soul Travel. All rights reserved.
```

This is just the beginning. The complete archive contains all 40+ files. Would you like me to continue with the remaining files, or would you prefer me to create a downloadable archive format instead?