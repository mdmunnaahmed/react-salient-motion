/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      fontFamily: {
        body: ["'DM Sans'", "sans-serif"],
        heading: ["'DM Sans'", "sans-serif"],
      },
      fontSize: {
        sm: "13px",
        md: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "48px",
        "5xl": "56px",
      },
      boxShadow: {
        small: "0px 1px 12px 0px #00000014;",
        base: "0px 10px 18px 0px #00000030;",
        large: "0px 6px 50px 0px rgba(0, 0, 0, 0.06);",
      },
      colors: {
        primary: "#1F7550",
        "primary-darker": "#134630",
        title: "#FFFFFF",
        "title-two": "#91918A",
        body: "#FFFFFF",
        placeholder: "#ACACAC",
        border: "#363636",
        "body-bg": "#04100B",
        input: "#121D18",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
