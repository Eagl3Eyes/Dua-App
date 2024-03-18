/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'customWhite': '#F7F8FA',
        'customBlack': '#393939', // base color
        'customGreen': '#1FA45B',
        'customWhiteNavBtn': '#E8F0F5',
        'customGray': '#7E7E7E',
        'customIcon': '#868686',
        'customSearchGray': '#F3F4F6',
        'customBg': '#eaeef3',
      },
      boxShadow: {
        'customShadow': '0px -12px 15px 0.5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar')],
};
