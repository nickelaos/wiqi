/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(204,130,66)",
        "primary-bg": "#212121",
        "primary-text": "rgba(255, 255, 255, 0.85)", // rgb(186,186,186)
        "secondary": "#F0BB68",
        "secondary-bg": "rgb(43,43,43)",
        "solid": "#525252"
      }
    },
  },
  plugins: [],
}
