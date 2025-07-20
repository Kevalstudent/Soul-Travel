#!/bin/bash

# Soul Travel Project Setup Script
# This script creates the complete project structure with all files

echo "🚀 Setting up Soul Travel project..."

# Create project directory structure
mkdir -p soul-travel/{src/{components,contexts,hooks,pages,services},public}
cd soul-travel

# Create package.json
cat > package.json << 'EOF'
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
EOF

# Create .gitignore
cat > .gitignore << 'EOF'
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
EOF

echo "✅ Created basic project structure"
echo "📁 Project created in: $(pwd)"
echo ""
echo "Next steps:"
echo "1. cd soul-travel"
echo "2. npm install"
echo "3. Copy all the React component files from the project"
echo "4. npm run dev"
echo ""
echo "🎉 Project setup complete!"
EOF