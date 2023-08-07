export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-green": "#013D29",
        "soft-pink": "#FBF0E4",
        green: "#05A607",
        black: "#000000",
        gray: "#F6F7F8",
        cyan: "#A5D1E6",
        brown: "#C6B195",
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
      },
      content: {
        wave: "url(./src/assets/wave.svg)",
      },
    },
  },
  plugins: [],
};
