module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  important: '#tailwind-root',
  theme: {
    // fontSize: {
    //   xs: '0.75rem',
    //   sm: '0.875rem',
    //   lg: '1.25rem',
    //   xl: '1.5rem',
    // },
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
