module.exports = {
    future: {
      removeDeprecatedGapUtilities: true
    },
    purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "accent-1": "#387FAB"
        }
      }
    },
    variants: {},
    plugins: []
  };
  