const path = require('path');
const webpack = require('webpack')

const config = {
  target: 'node',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      "@Routers": path.resolve(__dirname, 'src/routers'),
      "@Src": path.resolve(__dirname, "src"),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "global.GENTLY": false
    })
  ],
}

module.exports = function (env, argv) {
  console.log("@env: ", env)
  console.log("@argv: ", argv.mode)
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }
  return config
};
