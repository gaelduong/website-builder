/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './content/*.{js,ts,jsx,tsx}',
    './config/*.{js,ts,jsx,tsx}',
    './layout/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
    './redux/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
