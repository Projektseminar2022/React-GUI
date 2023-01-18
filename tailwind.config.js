/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require("daisyui"),
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       forest: {
  //         ...require("daisyui/src/colors/themes")["[data-theme=forest]"],
  //         "base-100": "#2A303C"
  //       }
  //     }
  //   ]
  //},
}
