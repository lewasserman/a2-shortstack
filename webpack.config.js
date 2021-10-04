// //webpack.config.js

// const path = require("path")

// module.exports = {
//   entry : "./src/server.improved.js",
//   output : {
//     path: path.resolve(__dirname, "dist"),
//     filename: "output.js"
//   }
// }
const path = require("path");
module.exports = {
  entry: "/public/body.jsx",
  output: { path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};