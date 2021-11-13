module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  important: '#tailwind-root',
  theme: {
    screens: {
      xs: 0,
      sm: '577px',
      md: '769px',
      lg: '993px',
      xl: '1201px',
      '2xl': '1601px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
