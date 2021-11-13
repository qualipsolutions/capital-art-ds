module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  important: '.tailwind',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
