# Netlify Deployment Guide for Nest Tech Solutions

## Quick Fix for Current Issue

**IMPORTANT: Node.js Version Issue**
Netlify is currently using Node.js v18, but Angular 20 requires Node.js v20+. Until Netlify updates, use Manual Deployment.

### Option 1: Manual Deployment (RECOMMENDED - Immediate Fix)

1. **Build the project** (already done):
   ```bash
   npm run build
   ```

2. **Deploy the correct folder**:
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Drag and drop the **entire contents** of `dist/nest-tech-solutions/browser` folder
   - NOT the `dist` folder itself, but the `browser` folder contents
   - This should include: `index.html`, `_redirects`, `assets/`, and all `.js` files

### Option 2: Git Integration (Recommended)

1. **Commit the configuration files**:
   ```bash
   git add .
   git commit -m "Add Netlify configuration for SPA routing"
   git push
   ```

2. **Configure Netlify Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist/nest-tech-solutions/browser`
   - Node version: 20 (minimum required by Angular CLI)

### Files Added for Netlify Support:

- `src/_redirects` - Handles SPA routing
- `netlify.toml` - Netlify configuration
- Updated `angular.json` - Includes _redirects in build

### Troubleshooting:

**Node.js Version Issue (Current Problem):**
- Error: "Node.js version v18.20.8 detected. The Angular CLI requires a minimum Node.js version of v20.19"
- **Solution**: Use Manual Deployment (Option 1) until Netlify supports Node.js 20+
- Files added: `.nvmrc` and updated `netlify.toml` for future compatibility

**If you still get 404 errors after deployment:**
1. **Check publish directory**: Must be `dist/nest-tech-solutions/browser`
2. **Verify _redirects file**: Should be in the root of published directory
3. **Clear cache**: In Netlify dashboard, go to Deploys > Trigger deploy > Clear cache and deploy

### Expected Result:

After proper deployment:
- ✅ Home page loads correctly
- ✅ Direct URLs work (e.g., yoursite.com/about)
- ✅ Page refresh works on any route
- ✅ Navigation between pages works

The key is ensuring Netlify serves the `browser` folder contents, not the `dist` folder itself.
