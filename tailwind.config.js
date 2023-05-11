/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
          blue: {
              dark: "hsl(218, 23%, 16%)",
              gray: "hsl(217, 19%, 38%)",
              dark_gray: "hsl(217, 19%, 24%)",
          },
          light_cyan: "hsl(193, 38%, 86%)",
          neon_green: "hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
}
