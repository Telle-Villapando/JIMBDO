/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "bottom-only":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Customize values
      },
      lineHeight: {
        125: "1.25", // 125% is equivalent to 1.25
      },
      fontSize: {
        text32: "32px",
      },
      screens: {
        customMin: "250px",
      },
      maxWidth:{
        1600: "1600px",
      },
    },
  },
  plugins: [],
};
