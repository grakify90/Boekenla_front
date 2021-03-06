module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("tailwindcss")("tailwind.js"), require("autoprefixer")()],
};
