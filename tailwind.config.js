module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bluish-gray': '#d0d6f9',
        'very-dark-blue': "#0b0d17"
      },
      screens:{
        'mobile': '375px',
        'tablet': '768px',
        'desktop': '1440px',
      },
      fontFamily: {
        'main': 'Bellefair, sans-serif',
        'text': 'Barlow, sans-serif',
      },
      fontSize:{
        'subhead-2': ['14px','16.8px'],
        'nav': ['16px','19.2px'],
        'body-text': ['18px','32px'],
        'subhead-1': ['28px','32px'],
        'head-1': ['150px','171.9px'],
        'head-2': ['100px','114.6px'],
        'head-3': ['56px','64,2px'],
        'head-4': ['32px','36.18px'],
        'head-5': ['28px','32.6px']
      },
      boxShadow:{
        'glass': 'inset 0 0 10px rgba(255, 255, 255, .5);'
      },
      letterSpacing:{
        'head-5': '4.75px',
        'nav': '2.7px',
        'subhead-2': '2.35px',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      }
    },
  },
  plugins: [],
}
