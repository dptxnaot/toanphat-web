import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: { DEFAULT:"#1e6b2e", 2:"#155222", 3:"#2d8c40", 4:"#e8f5e9" },
        amber: { DEFAULT:"#f5a623", 2:"#e8950f" },
        navy: "#0b1a2e",
      },
      fontFamily: { sans: ["Be Vietnam Pro","sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
