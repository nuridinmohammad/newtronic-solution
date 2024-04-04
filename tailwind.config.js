/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // plugins: [import("daisyui")],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff00ef",

          secondary: "#00c133",

          accent: "#009d00",

          neutral: "#242614",

          "base-100": "#32232f",

          info: "#008bd4",

          success: "#2bca0a",

          warning: "#ce6a00",

          error: "#ff91ac",
        },
      },
    ],
  },
};
