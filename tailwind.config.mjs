/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryblue: "#182c4f", //"#2f5596",
      },
    },
    animation: {
      marquee: "marquee 20s linear infinite",
      underline: "underlineAnimation 2s infinite linear",
    },
    keyframes: {
      underline: {
        "0%": { width: "0%" },
        "50%": { width: "100%" },
        "100%": { width: "0%" },
      },
      underlineAnimation: {
        "0%" : { width:"0%", left: "0"},
        "50%": { width: "100%", left:"0" },
        "100%": { width: "0%", left:"100%" },
    },
      marquee: {
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0%)" },
      },
    },
  },
  plugins: [],
};
