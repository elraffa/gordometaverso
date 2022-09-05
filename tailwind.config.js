/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/gordo_metaverso_header.jpg')",
        'hero-pattern-sm': "url('/img/gordo_metaverso_header-sm.png')",
      },
    },
  },
  plugins: [],
};
