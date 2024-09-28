/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F4F6F9', // You can name it whatever you like
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}
