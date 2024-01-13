const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/sections/**/*.{js,jsx}',
    './src/configs/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        fore: {
          primary: 'var(--color-fore-primary)',
          secondary: 'var(--color-fore-secondary)',
          subtle: 'var(--color-fore-subtle)',
        },
        back: {
          primary: 'var(--color-back-primary)',
          secondary: 'var(--color-back-secondary)',
          subtle: 'var(--color-back-subtle)',
          accent: 'var(--color-back-accent)',
        },
        
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      fontFamily: {
        sans: ['Public Sans', ...fontFamily.sans],
      },
    },
  },
}
