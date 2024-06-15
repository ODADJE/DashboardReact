/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },

  daisyui: {
    // themes: ['garden', 'night'],
    themes: [
      {
        garden: {
          ...require('daisyui/src/theming/themes')['garden'],
          primary: '#D95D39',
        },
      },
      {
        night: {
          ...require('daisyui/src/theming/themes')['night'],
          primary: '#D95D39',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
