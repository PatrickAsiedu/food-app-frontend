module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public//index.html"],
  theme: {
    extend: {
      screens: {
        lmd: { min: "768px", max: "1023px" },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#002C59",
        shawdow: "#000000",
        checkbox: "#23B65E",
        links: "#007AFF",
        switch: "#F2F2F2",
        notification: "#DC2032",
        bluebullet: "#00D4FF",
        orangebullet: "#FFB800",
        tablehighligh: "#E4EBF2",
      },
      boxShadow: {
        switchshadow: "1px 1px 2px -1px rgba(51, 51, 51, 0.3)",
      },
    },
  },
  plugins: [],
};
