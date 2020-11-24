const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
    app: path.join(__dirname, "src", "index.tsx")
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(jpe?g|png|jpeg|bmp|gif|svg)?$/,
        loader: "file-loader"
      }
    ]
  },
  output: {
    publicPath: "/",
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "s3")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
