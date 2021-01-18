module.exports = {
  stories: [
    // Paths to the story files
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.mdx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        "sass-loader",
      ],
    })
    return config
  },
};