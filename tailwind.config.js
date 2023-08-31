/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: [
        "0.6rem",
        {
          lineHeight: "1rem",
          letterSpacing: "-0.01em",
          fontWeight: "normal",
        },
      ],
      sm: [
        "0.8rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "-0.01em",
          fontWeight: "normal",
        },
      ],
      lg: [
        "1.5rem",
        {
          lineHeight: "1rem",
          letterSpacing: "-0.01em",
          fontWeight: "normal",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "3rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.02em",
          fontWeight: "500",
        },
      ],
    },
  },
  plugins: [],
};
