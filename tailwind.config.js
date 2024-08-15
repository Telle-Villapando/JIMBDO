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
      width: {
        1520: "1520px",
      },
      margin: {
        "28rem": "28rem",
      },
    },
  },
  plugins: [],
};
