const path = require("path");

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /.jsx$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
};

// yarn add babel-core -> allows to use babel in tools like webpack
// yarn add babel-loader -> teach webpack how to use
