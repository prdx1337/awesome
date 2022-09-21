/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        bighead: "url('./assets/bighead.svg')",
        coding: "url('./assets/coding.svg')",
        designing: "url('./assets/designing.png')",
        team: "url('./assets/team.png')",
        group: "url('./assets/group.png')",
      },
    },
  },
  plugins: [],
};
