/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    // colors: {
    //   'white': '#fffff',
    //   'fuchsia': {
    //     600: 'c026d3',
    //     700: '#a21caf',
    //   },
    // },
    
  },
  plugins: [],
}

