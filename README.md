# Portfolio Website - replit.md

## Overview

This is a full-stack portfolio website for Pankaj Kumar, a Python Backend Developer. The application is built using a modern tech stack with React frontend, Express backend, and PostgreSQL database. It features a professional portfolio layout with contact form functionality and responsive design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL adapter
- **Database**: PostgreSQL (configured for Neon serverless)
- **Development**: Hot reloading with Vite integration in development mode

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions Table**: Stores contact form submissions (id, name, email, subject, message, created_at)

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling
- **Hero Section**: Landing section with call-to-action buttons
- **About Section**: Professional overview with statistics
- **Skills Section**: Technical skills organized by categories
- **Experience Section**: Work history with achievements
- **Projects Section**: Portfolio projects with technology tags
- **Education Section**: Educational background
- **Contact Section**: Contact form with API integration
- **Footer**: Professional footer with contact links

### Backend Components
- **Express Server**: Main application server with middleware
- **API Routes**: RESTful endpoints for contact form and data retrieval
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Validation**: Zod schema validation for form inputs

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data is validated using Zod schemas
   - POST request sent to `/api/contact` endpoint
   - Backend validates and stores submission in database
   - Success/error response returned to frontend
   - Toast notification displayed to user

2. **Admin Data Retrieval**:
   - GET request to `/api/contact-submissions` endpoint
   - Backend retrieves all contact submissions
   - Data returned as JSON response

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Hookform Resolvers
- **Styling**: Class Variance Authority and clsx for conditional styling
- **Date Handling**: date-fns for date formatting

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking and validation
- **Development**: tsx for TypeScript execution

## Deployment Strategy

### Development
- Uses Vite dev server with HMR (Hot Module Replacement)
- Express server runs on port 5000
- PostgreSQL connection via DATABASE_URL environment variable
- Development script: `npm run dev`

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Build script: `npm run build`
- Start script: `npm run start`

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Deployment**: Autoscale deployment target
- **Port**: External port 80 mapped to internal port 5000
- **Database**: Drizzle schema push with `npm run db:push`

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Transformed portfolio into modern 3D design with:
  - Interactive particle system and floating animations
  - 3D card effects with tilt and hover transformations
  - Glassmorphism navigation with backdrop blur
  - Gradient backgrounds and animated borders
  - Enhanced visual hierarchy with modern animations
  - Dark mode support throughout all components
  - Professional glassmorphism and depth effects
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
