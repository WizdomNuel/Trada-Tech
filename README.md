# TRADA Technologies

> **The Smart Business Integrator.**

A modern, high-performance web application designed for TRADA Technologies. Built with a focus on speed, responsiveness, and aesthetic excellence, this platform serves as the digital face of TRADA's mission to bridge the gap between potential and execution in African business operations.

## 🚀 Features

- **Responsive Design**: Fully optimized for all devices, from mobile phones to large desktop screens.
- **Theme Support**: Seamless switching between **Light** and **Dark** modes with persistent user preference.
- **Modern Animations**: Smooth, professional transitions and interactions powered by **Framer Motion**.
- **Performance**: Lightning-fast load times and optimized asset delivery using **Vite**.
- **Interactive UI**: Custom components including accordions, tabbed interfaces, and modal dialogs.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

## 📂 Project Structure

```bash
trada-technologies/
├── src/
│   ├── assets/          # Static assets (images, logos)
│   ├── components/      # Reusable UI components (Navbar, Footer, Section, etc.)
│   ├── context/         # React Context (ThemeContext)
│   ├── pages/           # Page components (Home, About, Solutions, etc.)
│   ├── App.tsx          # Main application component
│   ├── constants.tsx    # Global constants and data
│   ├── types.ts         # TypeScript type definitions
│   └── main.tsx         # Entry point
├── public/              # Public static files
├── index.html           # HTML entry point (includes Tailwind CDN configuration)
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🏁 Getting Started

### Prerequisites

Ensure you have **Node.js** installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/WizdomNuel/Trada-Tech.git
    cd trada-technologies
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Development

Start the development server with hot-reload:

```bash
npm run dev
```

Visit `http://localhost:5173` (or the URL shown in your terminal) to view the app.

### Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🎨 Styling & Theming

The application uses **Tailwind CSS** for styling. The theme configuration extends the default Tailwind theme to include custom colors (`trada-dark`, `trada-primary`, `trada-secondary`) and fonts (`Inter`, `Space Grotesk`).

Dark mode is implemented via the `class` strategy, toggled by the `ThemeContext`.

## 📄 License

This project is proprietary and confidential.

---

**TRADA Technologies Limited** - *Bridging the gap between chaotic potential and structured growth.*
