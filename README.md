# Cynbit Careers Portal

A modern, responsive career openings portal built with **React** and **Vite**, featuring a clean architectural aesthetic, dual-grid role layouts, robust multi-field live search, location filtering, and dedicated application modals.

---

## Features

- **Multi-Field Live Search:** Real-time query matching across job titles, teams/categories, required skills, and descriptions with case-insensitive tokenization (e.g., searching `ui ux` matches `UI/UX Design Intern`).
- **Location Filter:** Granular toggle/filter by work arrangement and office locations (`Remote`, `Jaipur`, or all).
- **Responsive 2-Column Grid:** Clean layout adhering strictly to a dual-card row rhythm across desktop and tablet screens.
- **Dynamic Feedback & Counts:** Real-time result counter and a dedicated empty state with query suggestions when no roles match.
- **Role Details Modal:** Interactive modal popup per position displaying extended requirements and a pre-configured `mailto:` application link.
- **Zero Heavy Dependencies:** High-performance inline styles and lightweight vanilla React hooks (`useState`, `useMemo`).

---

## Tech Stack

- **Framework:** [React 18+](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Modular CSS / React Inline Design System

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v16.0 or higher) and **npm** installed on your machine.

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/cynbit_careerpage.git](https://github.com/your-username/cynbit_careerpage.git)
   cd cynbit_careerpage

1. Install project dependencies:
  npm install
2. Start the development server:
   npm run dev
3. View in browser:
   Open http://localhost:5175/ (or the specific port assigned by your Vite CLI).

Project Structure
## Project Structure

```text
cynbit_careerpage/
├── public/              # Static assets & favicons
├── src/
│   ├── assets/          # Icons, vectors, and branding
│   ├── components/      # Career components, JobCard, and Modal
│   ├── App.jsx          # Root application container
│   ├── main.jsx         # React DOM entry point
│   └── index.css        # Global CSS reset & typography
├── package.json         # Project manifests and scripts
└── vite.config.js       # Vite build & server configuration
