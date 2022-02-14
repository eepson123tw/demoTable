const path = require('path');
const webpack = require('webpack'); 
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { HotModuleReplacementPlugin } = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
	context: path.resolve(__dirname, 'src'),
	entry: { 
    index: './index.js',
  },
	output: {
	  path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', //抓entry裡面obj的key
    clean: true,
    // publicPath: process.env.NODE_ENV==='development'? '/':'/demoTable',
	},
  resolve: {
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ],

      },
      {
          test: /\.(js)$/,
          use: 'babel-loader'
      },
    ]
},

plugins: [
  new CleanWebpackPlugin(),
 
  new CopyPlugin({
    patterns: [{
      from: "assets",
      to: "assets",
      force: true,
      noErrorOnMissing: true
    }]
  }),
  new MiniCssExtractPlugin({
    filename: "./[name].css" 
  }),

  new HtmlWebpackPlugin({ 
    title: '個人資料表',
    filename: 'index.html', //輸出名
    template: 'template/template.html', //輸入指定的資料夾與檔案
    inject: 'body'
  }),
  new webpack.ProvidePlugin({ 
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    Popper: ['popper.js', 'default'],

  }), 
  new HotModuleReplacementPlugin(),
],
optimization: {
 
  minimizer: [
      // CSS optimizer
      new OptimizeCSSAssetsPlugin(),
      // JS optimizer by default
      new TerserPlugin(),
  ],
},

  devtool: process.env.NODE_ENV==='development'?"cheap-module-eval-source-map" : "source-map",
  target: 'web',
  resolve: {
    extensions: [".ts", ".js"],
    alias:{
      "@":  path.resolve(__dirname, 'src'),
    }
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    static: './dist',
    compress: true,
    port: 3000,

  },
}