/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary))',
        nav: 'rgba(var(--nav))',
        background: 'rgba(var(--background))',
        elbg: 'rgba(var(--elbg))',
        ink: 'rgba(var(--ink))',
        "white-ink": 'rgba(var(--white-ink))',
      }
    }
  },
  plugins: []
}
