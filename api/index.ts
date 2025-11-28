import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

// This function handles all requests that aren't static assets
// It serves the index.html file for client-side routing
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // For API routes (if you add them later)
    if (req.url?.startsWith('/api/')) {
      return res.status(404).json({
        error: 'API endpoint not found',
        message: 'No API routes are currently configured'
      });
    }

    // For all other routes, serve index.html for client-side routing
    const indexPath = path.join(process.cwd(), 'dist', 'public', 'index.html');

    // Check if index.html exists
    if (fs.existsSync(indexPath)) {
      const html = fs.readFileSync(indexPath, 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      return res.status(200).send(html);
    } else {
      console.error('index.html not found at:', indexPath);
      return res.status(500).json({
        error: 'Build files not found',
        message: 'The application build is missing. Please check build configuration.',
        path: indexPath
      });
    }
  } catch (error) {
    console.error('Serverless function error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
