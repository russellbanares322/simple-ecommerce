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
      backgroundImage: {
        "hero-bg": "url(./assets/hero-bg.png)",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      keyframes: {
        float: {
          "0%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translateY(0px)",
          },
          "50%": {
            boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translateY(-20px)",
          },
          "100%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translateY(0px)",
          },
        },
        "delay-float": {
          "100%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translateY(0px)",
          },
          "50%": {
            boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translateY(20px)",
          },
          "0%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "delay-float": "delay-float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
