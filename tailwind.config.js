export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob1: "blob1 10s infinite",
        blob2: "blob2 10s infinite",
        blob3: "blob3 10s infinite",
      },
      keyframes: {
        blob1: {
          "0%": {
            transform: " translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: " translate(10px,-10px) scale(1.1)",
          },
          "66%": {
            transform: " translate(60px,-20px,20px) scale(0.9)",
          },
          "100%": {
            transform: " translate(0px,0px) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: " translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: " translate(40px,-20px) scale(1.1)",
          },
          "66%": {
            transform: " translate(40px,-20px) scale(0.9)",
          },
          "100%": {
            transform: " translate(0px,0px) scale(1)",
          },
        },
        blob3: {
          "0%": {
            transform: " translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: " translate(50px,-30px) scale(1.1)",
          },
          "66%": {
            transform: " translate(-30px,60px,-25px) scale(0.9)",
          },
          "100%": {
            transform: " translate(0px,0px) scale(1)",
          },
        },
      },
      colors: {
        mainColor: "#483D8B",
        mainColor2: "#0a0818",
      },
    },
  },
  plugins: [],
};
