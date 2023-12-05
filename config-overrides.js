const path = require('path');

module.exports = function override(config) {
  // Customize the webpack config here
  config.output.filename = 'static/js/[name].[contenthash:8].js';
  config.output.chunkFilename = 'static/js/[name].[contenthash:8].chunk.js';

  // Set cache headers for static assets
  config.plugins.forEach((plugin) => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin.options = {
        ...plugin.options,
        minify: {
          ...plugin.options.minify,
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      };
    }
  });

  return config;
};
