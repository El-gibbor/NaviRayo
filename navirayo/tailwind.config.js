/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1224px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Comfortaa: ["Comfortaa", "system-ui"],
      },
      colors: {
        "main-color": "#399E5A",
        "body-color-light": "#fff",
        "body-color-dark": "#262b26",
        "border-lines-light": "#e7e7e7",
        "border-lines-dark": "#1D1D1D",
        "dark-text": "#2F333C",
        "light-text": "#aaaaaa",
        "container-dark": "#343b34",
        "container-dark-2": "#3f473f",
        "container-dark-3": "#546154",
      },
      animation: {
        spinLoader: "spin .4s linear infinite",
        spinSlow: "spin 5s linear infinite",
      },
      backgroundImage: {
        'search-light': "url('https://visitrwanda.com/wp-content/uploads/fly-images/1210/Visit-Rwanda-Kigali-Centre-Roads-1920x1281.jpg')",
        'search-dark': "url('https://wallpapercave.com/wp/wp9106234.jpg')",
      },
      backgroundPosition: {
        'center-30': 'center 30%',
        'center-60': 'center 20%',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [
  ],
  darkMode: 'selector',
};
