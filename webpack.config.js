const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (options, webpack) => {
  const lazyImports = [
    "@nestjs/microservices/microservices-module",
    "@nestjs/websockets/socket-module",
    "@nestjs/platform-express",
    "pg-native"
  ];

  return {
    ...options,
    externals: [],
    output: {
      ...options.output,
      libraryTarget: "commonjs2"
    },
    plugins: [
      ...options.plugins,
      new BundleAnalyzerPlugin(),
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        }
      })
    ],
    optimization: {
      ...options.optimization,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: "all",
          parallel: true,
          terserOptions: {
            compress: true,
            mangle: false,
            keep_classnames: true
          }
        })
      ]
    }
  };
};