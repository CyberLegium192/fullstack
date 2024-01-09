export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/tailwind-datepicker-react/dist/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
    screens: {
      'handphone': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [
     require('flowbite/plugin')
  ],
}