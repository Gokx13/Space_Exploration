/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    backgroundImage:{
      "tech-desktop":'url(  ./assets/technology/background-technology-desktop.jpg)',
      "dest-desktop":'url(  ./assets/destination/background-destination-desktop.jpg)',
      "crew-desktop":'url(./assets/crew/background-crew-desktop.jpg)',
      "desktop-image":'url(./assets/home/background-home-desktop.jpg)',
    },
    fontFamily: {
      's': [ 'Barlow Condensed', 'sans-serif'],
      'ss':[ 'Bellefair', 'serif'],
     
    },
    extend: {},
  },
  plugins: [],
}
