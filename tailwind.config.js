/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "16px",
        xl: "24px",
      },
      colors: {
        primary: "#186E71",
      },
      height: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
        384: "96rem",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xs: "1.5rem",
          sm: "2rem",
          lg: "3rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
