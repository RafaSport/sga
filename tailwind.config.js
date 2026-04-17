/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        prefeitura: {
          primary: "#1E3A8A",
          secondary: "#2563EB",
          light: "#EFF6FF"
        }
      }
    }
  },
  plugins: [],
}