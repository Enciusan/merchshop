module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        top: 'top',
      }
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [],
}