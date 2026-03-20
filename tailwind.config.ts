import type { Config } from "tailwindcss";

const config: Config = {
  // This line is the "magic" that makes your toggle work
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // This ensures Tailwind looks inside your components folder too
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Future custom premium colors go here
    },
  },
  plugins: [],
};
export default config;
