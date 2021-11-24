/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
module.exports = {
  webpack: {
    configure: {
      output: {
        filename: 'static/js/main-min.js',
      },
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          chunks(chunk) {
            return false;
          },
        },
      },
    },
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.plugins[5].options.filename = 'static/css/main.min.css';
          return webpackConfig;
        },
      },
      options: {},
    },
  ],
};
