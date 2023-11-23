/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "principal-blue": "#137DC5",
        "principal-orange": "#FB9C2A",
        "secondary-blue": "#2199EA",
        "tertiary-blue": "#0F5F96",
        "secondary-orange": "#FCB35C",
      },
    },

  },

  plugins: [],
}

