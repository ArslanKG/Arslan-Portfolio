module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  // Diğer konfigürasyonlar...
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ... diğer eklentiler ...
  ],
};
