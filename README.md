# Appscrip Task - Product Discovery Website

A modern, responsive product discovery website built with Next.js, featuring a clean UI for browsing and filtering products. This project demonstrates server-side rendering (SSR) capabilities with Next.js App Router, interactive client components, and a focus on user experience.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Frontend**: React 19
- **Styling**: CSS Modules
- **Icons**: React Icons, Iconsax ReactJS
- **Deployment**: Netlify (configured via `netlify.toml`)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/manju025/appscrip-task-manjundhar.git
   cd appscrip-task-manjundhar
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- `src/app/`: Next.js App Router pages and components
  - `page.jsx`: Main home page with product discovery
  - `ProductsList.jsx`: Component for rendering product list
  - `layout.js`: Root layout with metadata
- `src/styles/`: CSS modules for styling
- `public/`: Static assets (images, SVGs)
- `next.config.mjs`: Next.js configuration
- `netlify.toml`: Netlify deployment configuration
