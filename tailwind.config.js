module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bluish-gray": "#d0d6f9",
        "very-dark-blue": "#0b0d17",
      },
      screens: {
        m: "375px",
        t: "640px",
        d: "1280px",
      },
      fontFamily: {
        main: "Bellefair, sans-serif",
        text: "Barlow Condensed, sans-serif",
      },
      letterSpacing: {
        "lg": "4.75px",
        "sm": "2.7px",
        "md": "2.35px",
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
