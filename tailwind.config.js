/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        primary: {
          100: '#F0F5FF',
          200: '#1f8dd6',
          300: '#1873b0',
          400: '#0f5989',
        },
        'c-gray-100': '#f5f5f5',
        'c-gray-200': '#ededed',
        'c-gray-400': '#666666',
      },
      borderWidth: {
        5: '5px',
        6: '6px',
        7: '7px',
      },
      minWidth: {
        3: '12px',
        4: '16px',
        5: '20px',
      },
      height: {
        4.5: '18px',
      },
      width: {
        4.5: '18px',
      },
    },
  },
  plugins: [],
};
