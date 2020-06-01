const webpack = require('webpack');
const path = require('path');
const { exec } = require('child_process');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let electronIsRun = false;

const handler = (percentage) => {
  const percent = percentage * 100;
  if (percent === 100 && !electronIsRun) {
    if (process.env.NODE_ENV === 'development') {
      exec('yarn electron');
    } else {
      console.log(`${percent}%`)
    }
    electronIsRun = true;
  }
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'src/index.jsx'),
  target: 'electron-renderer',
  output: {
    path: `${__dirname}/build`,
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    enforceExtension: false,
    extensions: ['.jsx', '.js', '.json', '.scss', '.svg'],
    alias: {
      '@asts': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve('src/components/'),
      '@pages': path.resolve('src/pages/')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: './font/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /^\.s|css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(handler),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new MiniCssExtractPlugin({ filename: '[name]-[contenthash:8].css' })
  ],
  devServer: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:8090/'
      }
    }
  }
};
