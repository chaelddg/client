let debug = process.env.NODE_ENV !== "production";
let webpack = require("webpack");

let path = require("path");
module.exports = {
    context: path.join(__dirname, "app/src"),
    devtool: debug ? "inline-sourcemap": null,
    entry: "./js/client.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy"],
                }
            }
        ]
    },
    output: {
        path: __dirname + "/app/",
        filename: "client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};