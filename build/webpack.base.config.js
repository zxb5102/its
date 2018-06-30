const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  devtool: isProd ? false : "#cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist/",
    filename: "[name].[chunkhash].js"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      public: path.resolve(__dirname, "../public"),
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src")
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "[name].[hash].[ext]"
        }
      },
      {
        test: /\.(less|css)$/,
        use: isProd
          ? ExtractTextPlugin.extract({
              use: [
                {
                  loader: "css-loader",
                  options: { minimize: true, root: "@/static" }
                },
                "less-loader"
              ],
              fallback: "vue-style-loader"
            })
          : [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {root: "@/static" }
              },
              "less-loader"
            ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? "warning" : false
  },
  plugins: isProd
    ? [
        new VueLoaderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: { warnings: false }
        // }),
        new UglifyJsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin({
          filename: "common.[chunkhash].css"
        })
      ]
    : [new VueLoaderPlugin(), new FriendlyErrorsPlugin()]
};
