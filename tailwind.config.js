/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          Lightred: "hsl(0, 100%, 67%)",
          OrangeyYellow: "hsl(39, 100%, 56%)",
          Greenteal: " hsl(166, 100%, 37%)",
          Cobaltblue: "hsl(234, 85%, 45%)",
        },
        Gradients: {
          slate: "hsl(252, 100%, 67%)",
          royal: "hsl(241, 81%, 54%)",
          Violet: "hsla(256, 72%, 46%, 1)",
          Persian: "hsla(241, 72%, 46%, 0)",
        },
        Neutral: {
          White: "hsl(0, 0%, 100%)",
          PaleBlue: "hsl(221, 100%, 96%)",
          LightLavender: "hsl(241, 100%, 89%)",
          Darkgrayblue: "hsl(224, 30%, 27%)",
        },
      },
      fontFamily: {
        body: ["Hanken Grotesk"],
      },
      fontSize: {
        paragraph: "18px",
      },
      fontWeight: {
        500: "500",
        700: "700",
        800: "800",
      },
      borderRadius: {
        Custom: "1.25rem",
      },
      width: {
        102: "40rem",
      },
      height: {
        100: "30rem",
        ninteprecent: "99%",
      },
    },
  },
  plugins: [],
};
