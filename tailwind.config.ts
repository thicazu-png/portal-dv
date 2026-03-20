import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#071018",
          primary: "#0f5b70",
          emerald: "#0ba36b",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.4rem",
      },
    },
  },
  plugins: [],
};

export default config;
