import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          1: '#1c1f2e',
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
        },
        blue:{
          1:"#0e78f9"
        }
      },
      backgroundImage: {
        hero:"url('/images/hero-background.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
     
      keyframes: {
            "accordion-down": {
              "from": {
                "height": "0"
              },
              "to": {
                "height": "var(--radix-accordion-content-height)"
              }
            },
            "accordion-up": {
              "from": {
                "height": "var(--radix-accordion-content-height)"
              },
              "to": {
                "height": "0"
              }
            },
            slidein:{
              from:{
                  opacity:"0",
                  transform:"translateY(-10px)",
              },
              to:{
                opacity:"1",
                transform:"translateY(0)",
              },

            },
          },
          animation:{
            slidein:"slidein 1s ease var(--slidein-delay, 0) forwards",
          }
},
  plugins: [],
};
export default config;
