/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ["Vidaloka", "sans-serif"],
      secondary: ["Montserrat", "sans-serif"],
    },
       container: {
      padding: {
        DEFAULT: '0',
         },
    },
    screens: {
      ss: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#c98d83",
        secondary : '#783b31',
        bg: '#f2f1ec',
        black: '#000',
        white: '#fff',
        box_shadow: '0 .5rem 1rem rgba(0, 0, 0, 0.1)',
        back: "#f1edee",
        glass: "rgba(255,255,255,0.15)",
        glass2: "rgba(255,255,255,0.25)",
        cart: "#f9629f",
        cart2: "#dc143c",
      },
      backgroundImage: {
        banner: "url('/src/assets/img/banner-bg.jpg')",
      },
         backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        custom: '140%',
      },
    },
  },
  plugins: [],
}
