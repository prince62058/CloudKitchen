# Yashavee Cloud Kitchen

## Overview
This is a full-stack web application for Yashavee Cloud Kitchen, a premium cloud kitchen in Bhopal specializing in Indian, Chinese, Italian cuisine, and desserts. The application features a modern, responsive design with a complete menu showcase, restaurant information, and contact functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the stack
- **Development**: Hot module replacement with Vite integration
- **API Design**: RESTful API with Express routes

### Database & ORM
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Connection**: Neon Database serverless driver for PostgreSQL
- **Storage**: In-memory storage implementation for development with interface for easy database migration

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and mobile menu
- **Hero Section**: Full-screen landing with animated elements and call-to-action
- **Featured Dishes**: Showcase of signature menu items
- **Menu Section**: Tabbed interface for different cuisine categories (Indian, Chinese, Italian, Desserts)
- **About Section**: Restaurant information with animated statistics
- **Location Section**: Bhopal-specific information and delivery areas
- **Contact Section**: Multiple contact methods and restaurant details
- **Footer**: Comprehensive footer with social links and information

### Backend API Endpoints
- `GET /api/menu` - Retrieve all menu items
- `GET /api/menu/:category` - Get menu items by category
- `GET /api/featured` - Fetch featured dishes

### UI Component Library
- Complete shadcn/ui component library implementation
- Custom animated counter component
- Responsive design with mobile-first approach
- Consistent theming with CSS custom properties

## Data Flow

### Menu Data Management
1. Menu items are defined in the database schema with categories, pricing, and availability
2. Development uses in-memory storage with sample data
3. API endpoints serve menu data to frontend components
4. React Query manages caching and data synchronization
5. Components display menu items with add-to-cart functionality

### User Interaction Flow
1. Users land on the hero section with smooth navigation
2. Menu browsing through categorized tabs
3. Featured dishes highlight popular items
4. Contact information readily accessible
5. Responsive design ensures mobile compatibility

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Class name utility
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool with HMR
- **typescript**: Type safety
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- Vite development server with Express middleware
- Hot module replacement for rapid development
- TypeScript compilation with strict checking
- In-memory storage for quick setup

### Production Build
- `npm run build`: Creates optimized production bundle
- Static assets served from `/dist/public`
- Express server compiled with esbuild
- Environment variables for database configuration

### Database Migration
- Drizzle Kit handles schema migrations
- `npm run db:push` applies schema changes
- PostgreSQL configured via DATABASE_URL environment variable
- Easy transition from in-memory to persistent storage

## Recent Changes
- **June 29, 2025**: Successfully fixed Vercel deployment image loading issues
  - Implemented OptimizedImage component with smart fallback system
  - Added category-specific image fallbacks for all food categories
  - Created comprehensive error handling and logging for image loading
  - Optimized all image URLs with proper Unsplash parameters (width, height, format, quality)
  - Added vercel.json configuration with proper CORS headers and routing
  - Created detailed DEPLOYMENT.md guide for Vercel deployment
  - All 43 menu items now load properly with fallback support
  - Images successfully load in development with console logging
  - Enhanced image loading reliability for production deployment
- **June 29, 2025**: Successfully completed migration from Replit Agent to Replit environment
  - Migrated project from Replit Agent to standard Replit environment with full database integration
  - Implemented PostgreSQL database with proper client/server separation and security practices
  - Created DatabaseStorage class to replace in-memory storage for production readiness
  - Successfully seeded database with 39 menu items across all categories (Indian, Chinese, Italian, South Indian, Desserts)
  - Applied robust security practices with environment-based database configuration
  - Fixed accessibility warnings in modal components with proper dialog descriptions
  - Maintained existing API functionality while upgrading to persistent database storage
  - All image URLs verified as proper Unsplash links, no broken external references
  - Application fully functional with proper error handling and data validation
  - Fixed food item display issues by ensuring proper database connection and API endpoints
- **June 29, 2025**: Successfully migrated from Replit Agent to Replit environment and updated menu/branding
  - Completed migration with proper security practices and client/server separation
  - Changed restaurant name from "Yashasvee Sisodiya Cloud Kitchen" to "Yashavee Cloud Kitchen"
  - Updated delivery areas to "All over Bhopal - Complete city coverage"
  - Reduced all menu item prices (under ₹300, ₹200, and ₹100 categories)
  - Enhanced Chinese menu section with new items: Double Egg Roll, Chicken Roll, Chicken Chilli, Chicken Lollipop
  - Removed Honey Chilli Chicken and Sweet & Sour Chicken from Chinese section
  - Added complete South Indian menu section with 8 authentic dishes (Masala Dosa, Idli Sambar, Rava Upma, etc.)
  - Implemented animated shopping cart component with real-time item management
  - Added cart functionality to navigation bar with item count badges and animations
  - Integrated cart system with all menu components for seamless user experience
  - All pricing now structured under affordable ranges for better accessibility
- **June 28, 2025**: Enhanced website with 3D animations and expanded menu
  - Added 32 total menu items (9 Indian, 8 Chinese, 8 Italian, 8 Desserts)
  - Implemented 3D card effects with perspective transforms and hover animations
  - Added glass morphism effects to floating elements in hero section
  - Enhanced buttons with 3D hover effects and shimmer animations
  - Fixed image loading with error fallbacks and lazy loading
  - Added advanced CSS animations including rotate3d, shimmer, and slideUp

## Changelog
```
Changelog:
- June 28, 2025. Initial setup and 3D enhancement implementation
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```