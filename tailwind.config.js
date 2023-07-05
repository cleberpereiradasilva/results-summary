/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'hanken-grotesk': 'hanken-grotesk'
      },
      width: {
        58: '14.5rem'
      },
      screens: {
        sm: '390px',
        md: '850px',
        lg: '1440px'
      },
      colors: {
        primary: {
          light: 'hsl(0, 100%, 67%)',
          orangey: 'hsl(39, 100%, 56%)',
          green: 'hsl(166, 100%, 37%)',
          cobalt: 'hsl(234, 85%, 45%)'
        },
        blue: {
          light: 'hsl(252, 100%, 67%)',
          royal: 'hsl(241, 81%, 54%)',
          violet: 'hsla(256, 72%, 46%, 1)',
          persian: 'hsla(241, 72%, 46%, 0)',
          pale: 'hsl(221, 100%, 96%)'
          //dark gray blue: hsl(224, 30%, 27%)
        },
        white: 'hsl(0, 0%, 100%)',
        //- Light lavender: hsl(241, 100%, 89%)
        neutral: {
          light: 'hsl(0, 100%, 97%)',
          orangey: 'hsl(39, 100%, 96%)',
          green: 'hsl(166, 100%, 96%)',
          cobalt: 'hsl(234, 85%, 96%)'
        }
      },
      borderRadius: {
        card: '24px'
      }
    }
  },
  plugins: []
}
