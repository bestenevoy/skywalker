module.exports = {
  plugins: [
    "tailwindcss",
    process.env.NODE_ENV === "production" ?
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./src/pages/**/*.{js,jsx,ts,tsx}",
          "./src/components/**/*.{js,jsx,ts,tsx}",
        ],
        defaultExtractor: (content) => {
          // Capture as liberally as possible, including things like `h-(screen-1.5)`
          const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
          // Capture classes within other delimiters like .block(class="w-1/2") in Pug
          const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
          return broadMatches.concat(innerMatches);
        }
      },
    ] :
    undefined,
    "autoprefixer",
  ],
};