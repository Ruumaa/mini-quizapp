/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#454ADE',
          secondary: '#0077b6',
          accent: '#00b4d8',
          neutral: '#90e0ef',
          'base-100': '#edf2f4',
        },
      },
      // 'light',
    ],
  },
  plugins: [require('daisyui')],
};
