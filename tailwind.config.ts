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
      "fs-100": "100px",
      "fs-64": "64px",
      "fs-48": "48px",
      "fs-40": "40px",
      "fs-32": "32px",
      "fs-28": "28px",
      "fs-18": "18px",
      "fs-15": "15px",
      "fs-13": "13px",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    screens: {
      md: "768px" /* tablet */,
      lg: "1024px" /* laptop */,
      xl: "1280px" /* desktop */,
      "2xl": "1536px" /* large display */,
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
        quote: "url('/icon-quotes.svg')",
      },
      // bg position (lr & ud)
      backgroundPosition: {
        "top-50p": "160% 0%",
        "bottom-r-50": "160% 150%",
      },
      lineHeight: {
        "lh-100": "100px",
        "lh-56": "56px",
        "lh-48": "48px",
        "lh-40": "40px",
        "lh-32": "32px",
        "lh-28": "28px",
        "lh-25": "25px",
        "lh-18": "18px",
      },
    },
  },
  plugins: [],
};
export default config;
