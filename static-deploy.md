# Static Deployment Guide for Render

## Current App Status
- ✅ Full-stack app working on Replit
- ✅ Shopping cart functionality active
- ✅ All menu data loading properly
- ✅ Database integration working

## Render Deployment Options

### Option 1: Web Service (RECOMMENDED)
For full functionality including backend features:

**Service Type**: Web Service
**Build Command**: `npm install && npm run build`
**Start Command**: `npm start`
**Environment Variables**:
- NODE_ENV = production
- DATABASE_URL = (your database URL if using external DB)

### Option 2: Static Site (Limited Functionality)
For frontend-only version:

**Service Type**: Static Site
**Build Command**: `npm install && vite build --config vite.static.config.js`
**Publish Directory**: `dist-static`

## What Works in Static Version:
- ✅ Menu display
- ✅ Shopping cart (localStorage)
- ✅ All animations and UI
- ❌ No backend APIs
- ❌ No database persistence

## Files Modified for Static Deployment:
- `vite.static.config.js` - Static build configuration
- `client/src/lib/staticData.ts` - Hardcoded menu data
- `client/src/lib/staticApi.ts` - Mock API functions
- `client/src/components/featured-dishes.tsx` - Uses static data
- `client/src/components/menu-section.tsx` - Uses static data

## Recommendation:
Use **Web Service** on Render for full functionality, as it will preserve all your backend features and database integration.