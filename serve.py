#!/usr/bin/env python3
"""
Simple Python HTTP server for Soul Travel website
Run this script to serve the built website files
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

def main():
    # Configuration
    PORT = 8000
    DIST_DIR = "dist"
    
    # Check if dist directory exists
    if not os.path.exists(DIST_DIR):
        print(f"❌ Error: '{DIST_DIR}' directory not found!")
        print("Please run 'npm run build' first to create the dist folder.")
        sys.exit(1)
    
    # Change to dist directory
    os.chdir(DIST_DIR)
    
    # Create server
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🚀 Soul Travel website is running!")
            print(f"📍 Server address: http://localhost:{PORT}")
            print(f"📁 Serving files from: {os.getcwd()}")
            print(f"🛑 Press Ctrl+C to stop the server")
            print("-" * 50)
            
            # Try to open browser automatically
            try:
                webbrowser.open(f"http://localhost:{PORT}")
                print("🌐 Opening browser automatically...")
            except:
                print("💡 Please open http://localhost:{PORT} in your browser")
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n👋 Server stopped. Goodbye!")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {PORT} is already in use!")
            print(f"💡 Try a different port: python serve.py")
            print(f"💡 Or kill the process using port {PORT}")
        else:
            print(f"❌ Error starting server: {e}")

if __name__ == "__main__":
    main()