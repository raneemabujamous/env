/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/views/**/*.{js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],

}

