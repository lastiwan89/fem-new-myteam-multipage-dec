import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "green-midnight": "#014d56",
      "green-jungle": "#004047",
      "green-sacramento": "#012d32",
      "green-dark": "#002529",

      "blue-rapture": "#79c8c7",
      "blue-police": "#2c6168",

      white: "#ffffff",
      "light-coral": "#f67e7e",
    },
    fontSize: {
      "fs-h1-100": "5.5rem",
      "fs-h1-64": "4rem",
      "fs-h2-48": "3rem",
      "fs-h3-18": "1.125rem",
      "fs-body-18": "1.125rem",
      "fs-body-15": "0.9375rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {
      backgroundImage: {
        home1: "url('/bg-pattern-home-1.svg')",
        home2: "url('/bg-pattern-home-2.svg')",
        home3: "url('/bg-pattern-home-3.svg')",
        home4: "url('/bg-pattern-home-4-about-3.svg')",
        home5: "url('/bg-pattern-home-5.svg')",
        home6: "url('/bg-pattern-home-6-about-5.svg')",
        about1: "url('/bg-pattern-about-1-mobile-nav-1.svg')",
        about2: "url('/bg-pattern-about-2-contact-1.svg')",
        about3: "url('/bg-pattern-about-4.svg')",
        contact: "url('/bg-pattern-contact-2.svg')",
      },
      lineHeight: {
        "100": "100px",
        "64": "56px",
        "48": "48px",
        "18": "28px",
        "15": "25px",
      },
    },
  },
  plugins: [],
};
export default config;
