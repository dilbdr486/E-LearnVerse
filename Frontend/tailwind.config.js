/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, // Centers the container by default
      padding: '1rem', // Adds padding by default
    },
    extend: {},
  },
  plugins: [],
}

