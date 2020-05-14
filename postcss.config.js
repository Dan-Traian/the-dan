module.exports = {
   plugins: [require("tailwindcss")("tailwind.js"), require("autoprefixer")()],
   css: {
      loaderOptions: {
         sass: {}
      }
   }
};
