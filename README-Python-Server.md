# Running Soul Travel with Python HTTP Server

This guide shows you how to run the Soul Travel website using Python's built-in HTTP server instead of npm.

## Prerequisites

- Python 3.x installed on your system
- The built website files (created by running `npm run build`)

## Steps to Run

1. **Build the website** (if not already done):
   ```bash
   npm run build
   ```

2. **Navigate to the dist folder**:
   ```bash
   cd dist
   ```

3. **Start Python HTTP server**:
   
   **For Python 3.x:**
   ```bash
   python -m http.server 8000
   ```
   
   **For Python 2.x (if needed):**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

4. **Open your browser** and go to:
   ```
   http://localhost:8000
   ```

## Alternative Port

If port 8000 is busy, you can use any other port:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

## For GitHub Codespaces/Terminal

If you're using GitHub Codespaces or similar cloud environment:

1. Build the project:
   ```bash
   npm run build
   ```

2. Navigate to dist:
   ```bash
   cd dist
   ```

3. Start server:
   ```bash
   python -m http.server 8000
   ```

4. The terminal will show a URL you can click to open the website.

## File Structure

After building, your `dist` folder will contain:
- `index.html` - Main HTML file
- `assets/` - CSS and JavaScript files
- Static assets and images

## Benefits

- ✅ No Node.js required to run
- ✅ Works on any system with Python
- ✅ Perfect for deployment on simple servers
- ✅ Fast loading static files
- ✅ Can be hosted on GitHub Pages, Netlify, etc.

## Troubleshooting

**If you get "command not found" for python:**
- Try `python3 -m http.server 8000`
- Make sure Python is installed: `python --version`

**If port is already in use:**
- Use a different port: `python -m http.server 9000`
- Or kill the process using that port

**If files don't load properly:**
- Make sure you're in the `dist` folder when running the server
- Check that `npm run build` completed successfully