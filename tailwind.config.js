/** @type {import('tailwindcss').Config} */
const _ = require('lodash')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {

      primary: {
        light: '#fe9f2a',
        DEFAULT: '#C5A059',
        dark: '#b66400',
      },
      secondary: {
        DEFAULT:'#1b0d0d',
      },
      cocoa: {
        DEFAULT:'#3D2B1F',
      },
           
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#dcdcdc',
        light: '#eeeeee', //yes
        lightest: '#f9fafc',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#000000',
      },
      black50: {
        DEFAULT: '#0000004f',
      }

    },
    fontFamily: {
      Ubuntu: ['Ubuntu Sans', 'sans-serif'],
      Lato: ['Lato', 'sans-serif'],
      Eyesome: ['EyesomeScript', 'sans-serif'],
      Playfair: ['PlayfairDisplay-Bold', 'sans-serif'],
      Montserrat: ['Montserrat-Light', 'sans-serif'],
      Lora:['Lora-Regular', 'sans-serif'],
    },
    fontSize: {
      'h1': 'calc(3vh + 6vw)',
      'h2': 'calc(2.5vh + 3vw)',
      'h2-plus':'calc(2.5vh + 5vw)',
      'h3': 'calc(1.5vh + 2vw)',
      'p': '18px',
      'p-plus': '20px',
    },
    extend: {
      backgroundImage: {
        'footer-texture': "url('/img/footer-texture.png')",
        'header-logo': "url('./images/header-logo.webp')",
        'footer-logo': "url('./images/logo-dark.webp')",
        'story': "url('./images/story.png')",
        'custombg1': "url('./images/logan-voss-unsplash.jpg')",
        'abstract': "url('./images/abstract.jpg')",
        'abstract2': "url('./images/abstract2.jpg')",
        'splash': "url('./images/splash.jpg')",
        'order': "url('./images/order.jpg')",
        'slidebg': "url('./images/slide-bg.png')",

      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50vw',
        'full': '100%',
      },

      animation: {
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [    plugin(function({ addBase, theme }) {
    addBase({
      'h1': { fontSize: theme('fontSize.2xl') },
      'h2': { fontSize: theme('fontSize.6xl') },
      'h3': { fontSize: theme('fontSize.lg') },
    })
  })],
}
